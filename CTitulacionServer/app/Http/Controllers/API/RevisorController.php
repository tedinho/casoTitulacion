<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Revisore;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RevisorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $revisor = Revisore::get();

        return $revisor;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $revisor = new Revisore();
        $revisor->student_id = $request['student_id'];
        $revisor->revisor_id = $request['revisor_id'];
        $revisor->save();

        return response()->json([
            "success" => true,
            "message" => "Se a asignado un revisor"
        ]);
    }


    public function Fusion($id)
    {
        $revisor = Revisore::where('revisor_id', $id)->first();  
        
        if($revisor){

            $student = User::where('id', $revisor['student_id'])->first();
            $rev = User::where('id', $revisor['revisor_id'])->first();
            return response()->json([
                "nombreEstudiante" => $student['name'],
                "idEstudiante" => $student['id'],
                "nombreRevisor" => $rev['name'],
                "idRevisor" => $rev['id'],
            ]);
        }
        
        return response()->json([
            "nombreEstudiante" => " ",
            "idEstudiante" => " ",
            "nombreRevisor" => " ",
            "idRevisor" => " ",
        ]);             

    }

    public function ObtenerEstudiantes()
    {
        $estudiante = Role::with('users')->where('name', 'student')->first();        

        return $estudiante;
    }
    public function ObtenerRevisores()
    {        
        $revisor = Role::with('users')->where('name', 'Revisor')->first();

        return $revisor;
    }

    public function obtenerEstudiantesId($email)
    {
        $revi = User::where('email', $email)->first();

        $revisorPivot = Revisore::where('revisor_id', $revi['id'])->get();
        

        return $revisorPivot;
    }

    public function obtenerEstu($id)
    {
        $datosEstudiante = User::where('id', $id)->get();

        return $datosEstudiante;
    }


}
