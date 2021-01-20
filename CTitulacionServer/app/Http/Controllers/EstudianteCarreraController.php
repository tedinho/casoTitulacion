<?php

namespace App\Http\Controllers;

use App\Models\docente_carrera;
use App\Models\estudiante_carrera;
use Illuminate\Http\Request;

class EstudianteCarreraController extends Controller
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
        $estu = estudiante_carrera::create($input);
        $estu->carrera;
        return $estu;
    }

    public function buscarPorIdDocente($idDocente)
    {
        $docentes = docente_carrera::where('usuario_id', '=', $idDocente)->get();
        $idsCarreras = array();
        foreach ($docentes as $doc) {
            array_push($idsCarreras, $doc->carrera_id);
        }
        $estudiantes = estudiante_carrera::whereIn('carrera_id', $idsCarreras)->get();
        foreach ($estudiantes as $est) {
            $est->solicitudes;
            $est->estudiante;
        }
        return $estudiantes;
    }

    public function buscarPorIdEstudiante($idEstudiante)
    {
        $lista = estudiante_carrera::where('estudiante_id', $idEstudiante)->get();
        for ($i = 0; $i < count($lista); $i++) {
            $nivel = $lista[$i]->carrera;
            $nivel->carrera;
        }
        return $lista;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\estudiante_carrera  $estudiante_carrera
     * @return \Illuminate\Http\Response
     */
    public function show(estudiante_carrera $estudiante_carrera)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\estudiante_carrera  $estudiante_carrera
     * @return \Illuminate\Http\Response
     */
    public function edit(estudiante_carrera $estudiante_carrera)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\estudiante_carrera  $estudiante_carrera
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        estudiante_carrera::where('id', $id)->update($input);
        return estudiante_carrera::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\estudiante_carrera  $estudiante_carrera
     * @return \Illuminate\Http\Response
     */
    public function destroy(estudiante_carrera $estudiante_carrera)
    {
        //
    }
}
