<?php

namespace App\Http\Controllers;

use App\Models\proyecto_titulacion;
use Illuminate\Http\Request;
use Validator,Redirect,Response,File;

class ProyectoTitulacionController extends Controller
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
        if ($request->file('file')) {
             
            //store file into document folder
            $file = $request->file->store('public/documents');
 
            //store your file into database
            $rubrica = new proyecto_titulacion();     
            $rubrica->rubrica = $file;
            $rubrica->save();
              
            return response()->json([
                "success" => true,
                "message" => "Rubrica Subida exitosamente",
                "file" => $file
            ]);
  
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\proyecto_titulacion  $proyecto_titulacion
     * @return \Illuminate\Http\Response
     */
    public function show(proyecto_titulacion $proyecto_titulacion)
    {
        //
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
    public function update(Request $request, proyecto_titulacion $proyecto_titulacion)
    {
        //
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
}
