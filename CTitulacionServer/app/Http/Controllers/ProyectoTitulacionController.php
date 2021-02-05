<?php

namespace App\Http\Controllers;

use App\Models\proyecto_titulacion;
use Illuminate\Http\Request;

class ProyectoTitulacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return proyecto_titulacion::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        return proyecto_titulacion::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\proyecto_titulacion  $proyecto_titulacion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return proyecto_titulacion::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\proyecto_titulacion  $proyecto_titulacion
     * @return \Illuminate\Http\Response
     */
    public function edit(proyecto_titulacion $proyecto_titulacion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\proyecto_titulacion  $proyecto_titulacion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        proyecto_titulacion::where('id', $id)->update($input);
        return proyecto_titulacion::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\proyecto_titulacion  $proyecto_titulacion
     * @return \Illuminate\Http\Response
     */
    public function destroy(proyecto_titulacion $proyecto_titulacion)
    {
        //
    }

    /**
     * aceptar proyecto de titulación
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SolicitudProrroga  $solicitudProrroga
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function aceptarProyectoTitulacion(Request $request, $id)
    {
        $acceptProject  = proyecto_titulacion::find($id);
        $acceptProject->estado_aceptacion =  "Aceptado";
        $acceptProject->save();
        return $acceptProject;
    }

    /**
     * rechazar proyecto de titulación
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SolicitudProrroga  $solicitudProrroga
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function rechazarProyectoTitulacion(Request $request, $id)
    {
        $refuseProject  = proyecto_titulacion::find($id);
        $refuseProject->estado_aceptacion =  "Rechazado";
        $refuseProject->save();
        return $refuseProject;
    }

     /**
     * anular proyecto de titulación
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SolicitudProrroga  $solicitudProrroga
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function anularProyectoTitulacion(Request $request, $id)
    {
        $refuseProject  = proyecto_titulacion::find($id);
        $refuseProject->estado_aceptacion =  "Anulado";
        $refuseProject->save();
        return $refuseProject;
    }
}
