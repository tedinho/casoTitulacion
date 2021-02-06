<?php

namespace App\Http\Controllers;

use App\Models\carrera;
use App\Models\estudiante;
use App\Models\estudiante_carrera;
use App\Models\TemaAnteproyecto;
use App\Models\anteproyecto;
use App\Models\User;
use App\Models\Role;
use App\Models\Revisore;
use App\Models\solicitud;
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

    public function buscarAnteproyectoPorIdCarrera($idCarrera)
    {
        $antepro =  anteproyecto::whereHas('TemaAnteproyecto', function ($q) use ($idCarrera) {
            $q->whereHas('solicitud', function ($s) use ($idCarrera) {
                $s->whereHas('estudiante_carrera', function ($ec) use ($idCarrera) {
                    $ec->where('carrera_id', $idCarrera);
                });
            });
        })->get();
        for ($i = 0; $i < count($antepro); $i++) {
            $a = $antepro[$i];
            $a->evidencia;
            $tema = $a->temaAnteproyecto;
            $estuca = $tema->solicitud->estudiante_carrera;
            $estuca->estudiante;
        }
        return $antepro;
    }

    public function buscarAnteproyectoPorIdTema($idTema)
    {
        $antepro = anteproyecto::where('tema_ante_proyecto_id', '=', $idTema)->get();
        for ($i = 0; $i < count($antepro); $i++) {
            $antepro[$i]->evidencia;
        }
        return $antepro;
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
        $ante = anteproyecto::create($input);
        $tema = TemaAnteproyecto::find($request->tema_ante_proyecto_id);
        $estudiante_carrera = estudiante_carrera::find($tema->estudiante_carrera_id);
        $usuario = User::find($estudiante_carrera->estudiante_id);
        $carrera = carrera::find($estudiante_carrera->carrera_id);
        $usuarioJunta = User::find($carrera->id_usuario_junta);
        $to_name = $usuarioJunta->name;
        $to_email = $usuarioJunta->email;
        $data = array("estudiante" => $usuario->name, "usuarioJunta" => $usuarioJunta->name);

        $antepro = anteproyecto::where('id', '=', $ante->id)->get();
        for ($i = 0; $i < count($antepro); $i++) {
            $antepro[$i]->evidencia;
        }
        return $antepro;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\anteproyecto  $anteproyecto
     * @return \Illuminate\Http\Response
     */
    public function show(anteproyecto $anteproyecto)
    {
        //
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
    public function update(Request $request, $id)
    {
        $input = $request->all();
        anteproyecto::where('id', $id)->update($input);
        if ($request->estado == 'R') {
            $tema = TemaAnteproyecto::find($request->tema_ante_proyecto_id);
            $estuCa = estudiante_carrera::find($tema->estudiante_carrera_id);
            $estudiante = User::find($estuCa->estudiante_id);
            $to_name = $estudiante->name;
            $to_email = $estudiante->email;
            $data = array("estudiante" => $estudiante->name, "observacion" => $request->observacion);
        }
        if ($request->estado == 'A') {
            $tema = TemaAnteproyecto::find($request->tema_ante_proyecto_id);
            $estuCa = estudiante_carrera::find($tema->estudiante_carrera_id);
            $estudiante = User::find($estuCa->estudiante_id);
            $to_name = $estudiante->name;
            $to_email = $estudiante->email;
            $data = array("estudiante" => $estudiante->name);
        }
        if ($request->estado == 'E') {
            $tema = TemaAnteproyecto::find($request->tema_ante_proyecto_id);
            $soli = solicitud::find($tema->solicitud_id);
            $estuCa = estudiante_carrera::find($soli->estudiante_carrera_id);
            $estudiante = User::find($estuCa->estudiante_id);
            $carrera = carrera::find($estuCa->carrera_id);
            $usuarioJunta = User::find($carrera->id_usuario_junta);
            $to_name = $usuarioJunta->name;
            $to_email = $usuarioJunta->email;
            $data = array("estudiante" => $estudiante->name, "usuarioJunta" => $usuarioJunta->name);
            $antepro = anteproyecto::where('id', '=', $id)->get();
            for ($i = 0; $i < count($antepro); $i++) {
                $antepro[$i]->evidencia;
            }
            return $antepro;
        }
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

    /* public function obtenerEstudiantes($student = "student")
    {
        $rol = $this->obtenerRol($student);
        return $rol;
    }

    protected function obtenerRol($rol_nombre)
    {
        $rol = Role::with('users')->where('name', $rol_nombre)->first();

        return $rol['users'];
    } */

    public function ObtenerRevisores()
    {
        $revisor = Role::with('users')->where('name', 'Revisor')->first();

        return $revisor;
    }
}
