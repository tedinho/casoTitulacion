<?php

namespace App\Http\Controllers;

use App\Models\carrera_requisito_solicitud;
use Illuminate\Http\Request;

class CarreraRequisitoSolicitudController extends Controller
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
        return carrera_requisito_solicitud::create($input);
    }

    public function buscarCarreraRequisitoPorIdSolicitud($idSolicitud)
    {
        $lista = carrera_requisito_solicitud::where('solicitud_id', $idSolicitud)->get();
        for ($i = 0; $i < count($lista); $i++) {
            $lista[$i]->requisito;
            $lista[$i]->evidencia;
        }
        return $lista;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\carrera_requisito_solicitud  $carrera_requisito_solicitud
     * @return \Illuminate\Http\Response
     */
    public function show(carrera_requisito_solicitud $carrera_requisito_solicitud)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\carrera_requisito_solicitud  $carrera_requisito_solicitud
     * @return \Illuminate\Http\Response
     */
    public function edit(carrera_requisito_solicitud $carrera_requisito_solicitud)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\carrera_requisito_solicitud  $carrera_requisito_solicitud
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $input = $request->all();
        carrera_requisito_solicitud::where('id', $id)->update($input);
        return carrera_requisito_solicitud::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\carrera_requisito_solicitud  $carrera_requisito_solicitud
     * @return \Illuminate\Http\Response
     */
    public function destroy(carrera_requisito_solicitud $carrera_requisito_solicitud)
    {
        //
    }
}
