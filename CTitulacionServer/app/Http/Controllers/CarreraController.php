<?php

namespace App\Http\Controllers;

use App\Models\carrera;
use Illuminate\Http\Request;

class CarreraController extends Controller
{

    public function buscarPorNombre($nombre = 'Turismo')
    {
        return $this->post->where('nombre', 'like', '%' . $nombre . '%')->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return carrera::get();
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
        return carrera::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\carrera  $carrera
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return carrera::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\carrera  $carrera
     * @return \Illuminate\Http\Response
     */
    public function edit(carrera $carrera)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\carrera  $carrera
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        carrera::where('id', $id)->update($input);
        return carrera::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\carrera  $carrera
     * @return \Illuminate\Http\Response
     */
    public function destroy(carrera $carrera)
    {
        //
    }
}
