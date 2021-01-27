<?php

namespace App\Http\Controllers;

use App\Models\observacion_anteproyecto;
use Illuminate\Http\Request;

class ObservacionAnteproyectoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return observacion_anteproyecto::get();
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
        return observacion_anteproyecto::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\observacion_anteproyecto  $observacion_anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return observacion_anteproyecto::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\observacion_anteproyecto  $observacion_anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function edit(observacion_anteproyecto $observacion_anteproyecto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\observacion_anteproyecto  $observacion_anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        observacion_anteproyecto::where('id', $id)->update($input);
        return observacion_anteproyecto::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\observacion_anteproyecto  $observacion_anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function destroy(observacion_anteproyecto $observacion_anteproyecto)
    {
        //
    }
}
