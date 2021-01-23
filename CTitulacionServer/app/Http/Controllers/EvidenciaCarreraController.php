<?php

namespace App\Http\Controllers;

use App\Models\evidencia_carrera;
use Illuminate\Http\Request;

class EvidenciaCarreraController extends Controller
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

    public function buscarEvidenciasPorIdCarrera($idCarrera)
    {
        $lista = evidencia_carrera::where('carrera_id', $idCarrera)->get();
        for ($i = 0; $i < count($lista); $i++) {
            $lista[$i]->evidencia;
        }
        return $lista;
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
        return evidencia_carrera::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\evidencia_carrera  $evidencia_carrera
     * @return \Illuminate\Http\Response
     */
    public function show(evidencia_carrera $evidencia_carrera)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\evidencia_carrera  $evidencia_carrera
     * @return \Illuminate\Http\Response
     */
    public function edit(evidencia_carrera $evidencia_carrera)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\evidencia_carrera  $evidencia_carrera
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        evidencia_carrera::where('id', $id)->update($input);
        return evidencia_carrera::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\evidencia_carrera  $evidencia_carrera
     * @return \Illuminate\Http\Response
     */
    public function destroy(evidencia_carrera $evidencia_carrera)
    {
        //
    }
}
