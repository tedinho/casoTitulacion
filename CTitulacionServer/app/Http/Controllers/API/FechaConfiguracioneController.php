<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\FechaConfiguracione;
use Illuminate\Http\Request;

class FechaConfiguracioneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $fecha = new FechaConfiguracione();
        $fecha->fecha = $request['fecha'];
        $fecha->user_id = $id;
        $fecha->save();

        return response()->json([
            "success" => true,
            "message" => "Fecha guardada de forma correcta",
            "fecha" => $fecha
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fecha = FechaConfiguracione::where('user_id', $id)
            ->first();

        if($fecha){
            return response()->json([
                "success" => true,
                "message" => "Tiene una fecha máxima para subir el archivo",
                "fecha" => $fecha
            ]);
        }
        if(!$fecha){
            return response()->json([
                "success" => false,
                "message" => "No tiene asignado fecha para la entrega del trabajo contactese con su docente", 
                "fecha" => " "
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
