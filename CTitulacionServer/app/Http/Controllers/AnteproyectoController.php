<?php

namespace App\Http\Controllers;

use App\Models\anteproyecto;
use Illuminate\Http\Request;

class AnteproyectoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return anteproyecto::get();
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
        return anteproyecto::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\anteproyecto  $anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function show(anteproyecto $anteproyecto)
    {
        return anteproyecto::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\anteproyecto  $anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function edit(anteproyecto $anteproyecto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\anteproyecto  $anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, anteproyecto $anteproyecto)
    {
        $input = $request->all();
        anteproyecto::where('id', $id)->update($input);
        return anteproyecto::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\anteproyecto  $anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function destroy(anteproyecto $anteproyecto)
    {
        //
    }
}
