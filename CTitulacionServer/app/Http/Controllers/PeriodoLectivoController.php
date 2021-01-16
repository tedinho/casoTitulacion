<?php

namespace App\Http\Controllers;

use App\Models\periodo_lectivo;
use Illuminate\Http\Request;

class PeriodoLectivoController extends Controller
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

    public function buscarPeriodosLectivoPorIdCarrera($idCarrera)
    {
        return periodo_lectivo::where('carrera_id', $idCarrera)->get();
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
        return periodo_lectivo::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\periodo_lectivo  $periodo_lectivo
     * @return \Illuminate\Http\Response
     */
    public function show(periodo_lectivo $periodo_lectivo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\periodo_lectivo  $periodo_lectivo
     * @return \Illuminate\Http\Response
     */
    public function edit(periodo_lectivo $periodo_lectivo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\periodo_lectivo  $periodo_lectivo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, periodo_lectivo $periodo_lectivo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\periodo_lectivo  $periodo_lectivo
     * @return \Illuminate\Http\Response
     */
    public function destroy(periodo_lectivo $periodo_lectivo)
    {
        //
    }
}
