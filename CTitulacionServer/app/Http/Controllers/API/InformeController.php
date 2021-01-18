<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\FechaConfiguracione;
use App\Models\Informe;
use App\Models\proyecto_titulacion;
use App\Models\Role;
use App\Models\User;

class InformeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Informe::get();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $infoID = Informe::where('user_id', $request['id'])
            ->first();

        if ($infoID) {
            return response()->json([
                "success" => false,
                "message" => "El usuario ya tiene generado un informe",
            ]);
        }
        if (!$infoID) {
            
            $fecha = new FechaConfiguracione();
            $fecha->fecha = date('Y-m-d', strtotime("+8 days"));
            $fecha->user_id = $request['id'];
            $fecha->save();
    
            $informe = new Informe();
            $informe->titulo = $request['titulo'];
            $informe->cuerpo = $request['cuerpo'];
            $informe->observacion = $request['observacion'];
            $informe->user_id = $request['id'];
    
            $informe->save();
    
            return response()->json([
                "success" => true,
                "message" => "Se ha guardado el informe de forma correcta y se a asignado una fecha de entrega del proyecto",
                "informe" => $informe,
                "fecha" => $fecha
            ]);
            
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $informe = Informe::find($id);

        if (is_null($informe)) {
            return $this->sendError('Informe no encontrado.');
        }

        return response()->json([
            "success" => true,
            "Informe" => $informe
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
    }

    public function obtenerEstudiantes($student = "student")
    {
        $rol = $this->obtenerRol($student);
        return $rol;
    }

    protected function obtenerRol($rol_nombre)
    {
        $rol = Role::with('users')->where('name', $rol_nombre)->first();

        return $rol['users'];
    }
}
