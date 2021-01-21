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
        $userArr = User::with('roles')->get();

        return $userArr;
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
        $request->save();

        return response()->json([
            "success" => true,
            "message" => "Se a asignado un revisor"
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $usuario = User::where('email', $request['email'])->first();        
        $usuarioID = $usuario['id'];
        return $usuarioID;
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        $user = User::where('id', $id)->with('roles')->first();
        $rol = User::where('id', $id)->with('roles')->first();        
        // $rol->roles()->detach();
        // $rol->delete();
        // $user->roles()->attach(Role::where('name', 'revisor')->first());        
        // $user->save();

        return $rol;
    }

}
