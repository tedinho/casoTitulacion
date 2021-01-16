<?php

namespace App\Http\Controllers;

use App\Models\docente_carrera;
use Illuminate\Http\Request;

class DocenteCarreraController extends Controller
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

    public function buscarDocentesPorIdCarrera($idCarrera)
    {
        $docentes = docente_carrera::where('carrera_id', $idCarrera)->get();
        for ($i = 0; $i < count($docentes); $i++) {
            $nivel = $docentes[$i]->usuario;
            $nivel->carrera;
        }
        return $docentes;
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
        return docente_carrera::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\docente_carrera  $docente_carrera
     * @return \Illuminate\Http\Response
     */
    public function show(docente_carrera $docente_carrera)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\docente_carrera  $docente_carrera
     * @return \Illuminate\Http\Response
     */
    public function edit(docente_carrera $docente_carrera)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\docente_carrera  $docente_carrera
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, docente_carrera $docente_carrera)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\docente_carrera  $docente_carrera
     * @return \Illuminate\Http\Response
     */
    public function destroy(docente_carrera $docente_carrera)
    {
        //
    }
}
