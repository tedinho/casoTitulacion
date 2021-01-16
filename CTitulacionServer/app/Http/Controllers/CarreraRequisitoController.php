<?php

namespace App\Http\Controllers;

use App\Models\carrera_requisito;
use Illuminate\Http\Request;

class CarreraRequisitoController extends Controller
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

    public function buscarRequisitosPorIdCarrera($idCarrera)
    {
        return carrera_requisito::where('carrera_id', $idCarrera)->get();
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
        return carrera_requisito::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\carrera_requisito  $carrera_requisito
     * @return \Illuminate\Http\Response
     */
    public function show(carrera_requisito $carrera_requisito)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\carrera_requisito  $carrera_requisito
     * @return \Illuminate\Http\Response
     */
    public function edit(carrera_requisito $carrera_requisito)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\carrera_requisito  $carrera_requisito
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, carrera_requisito $carrera_requisito)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\carrera_requisito  $carrera_requisito
     * @return \Illuminate\Http\Response
     */
    public function destroy(carrera_requisito $carrera_requisito)
    {
        //
    }
}
