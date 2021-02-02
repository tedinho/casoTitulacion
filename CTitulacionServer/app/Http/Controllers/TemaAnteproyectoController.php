<?php

namespace App\Http\Controllers;

use App\Models\carrera;
use App\Models\estudiante;
use App\Models\estudiante_carrera;
use App\Models\solicitud;
use App\Models\TemaAnteproyecto;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TemaAnteproyectoController extends Controller
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

    public function buscarTemaAnteproyectoPorIdCarrera($idCarrera)
    {

        $temas = TemaAnteproyecto::whereHas('solicitud', function ($q) use ($idCarrera) {
            $q->whereHas('estudiante_carrera', function ($s) use ($idCarrera) {
                $s->where('carrera_id', $idCarrera);
            });
        })->get();
        for ($i = 0; $i < count($temas); $i++) {
            $t = $temas[$i];
            $t->evidencia;
            $soli = $t->solicitud;
            $estuca = $soli->estudiante_carrera;
            $estuca->estudiante;
        }

        return $temas;
    }

    public function buscarTemaAnteproyectoPorIdSolicitud($idSolicitud)
    {
        $temas = TemaAnteproyecto::where('solicitud_id', '=', $idSolicitud)->get();
        for ($i = 0; $i < count($temas); $i++) {
            $temas[$i]->evidencia;
        }
        return $temas;
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
        $ante = TemaAnteproyecto::create($input);
        $solicitud = solicitud::find($request->solicitud_id);
        $estudiante_carrera = estudiante_carrera::find($solicitud->estudiante_carrera_id);
        $usuario = User::find($estudiante_carrera->estudiante_id);
        $carrera = carrera::find($estudiante_carrera->carrera_id);
        $usuarioJunta = User::find($carrera->id_usuario_junta);
        $to_name = $usuarioJunta->name;
        $to_email = $usuarioJunta->email;
        $data = array("estudiante" => $usuario->name, "usuarioJunta" => $usuarioJunta->name);
        Mail::send('mailEnvioTemaAnte', $data, function ($message) use ($to_name, $to_email) {
            $message->to($to_email, $to_name)->subject('Tema Anteproyecto');
            $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
        });
        $temas = TemaAnteproyecto::where('id', '=', $ante->id)->get();
        for ($i = 0; $i < count($temas); $i++) {
            $temas[$i]->evidencia;
        }
        return $temas;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TemaAnteproyecto  $temaAnteproyecto
     * @return \Illuminate\Http\Response
     */
    public function show(TemaAnteproyecto $temaAnteproyecto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TemaAnteproyecto  $temaAnteproyecto
     * @return \Illuminate\Http\Response
     */
    public function edit(TemaAnteproyecto $temaAnteproyecto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TemaAnteproyecto  $temaAnteproyecto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        TemaAnteproyecto::where('id', $id)->update($input);
        if ($request->estado == 'R') {
            $solicitud = solicitud::find($request->solicitud_id);
            $estuCa = estudiante_carrera::find($solicitud->estudiante_carrera_id);
            $estudiante = User::find($estuCa->estudiante_id);
            $to_name = $estudiante->name;
            $to_email = $estudiante->email;
            $data = array("estudiante" => $estudiante->name, "observacion" => $request->observacion);
            Mail::send('mailRechazoTemaAnte', $data, function ($message) use ($to_name, $to_email) {
                $message->to($to_email, $to_name)->subject('Rechazo TemaAnteproyecto');
                $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
            });
        }
        if ($request->estado == 'A') {
            $solicitud = solicitud::find($request->solicitud_id);
            $estuCa = estudiante_carrera::find($solicitud->estudiante_carrera_id);
            $estudiante = User::find($estuCa->estudiante_id);
            $to_name = $estudiante->name;
            $to_email = $estudiante->email;
            $data = array("estudiante" => $estudiante->name);
            Mail::send('mailAproTemaAnte', $data, function ($message) use ($to_name, $to_email) {
                $message->to($to_email, $to_name)->subject('Aprobación TemaAnteproyecto');
                $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
            });
        }
        if ($request->estado == 'E') {
            $solicitud = solicitud::find($request->solicitud_id);
            $estudiante_carrera = estudiante_carrera::find($solicitud->estudiante_carrera_id);
            $usuario = User::find($estudiante_carrera->estudiante_id);
            $carrera = carrera::find($estudiante_carrera->carrera_id);
            $usuarioJunta = User::find($carrera->id_usuario_junta);
            $to_name = $usuarioJunta->name;
            $to_email = $usuarioJunta->email;
            $data = array("estudiante" => $usuario->name, "usuarioJunta" => $usuarioJunta->name);
            Mail::send('mailEnvioTemaAnte', $data, function ($message) use ($to_name, $to_email) {
                $message->to($to_email, $to_name)->subject('Tema Anteproyecto');
                $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
            });
            $temas = TemaAnteproyecto::where('id', '=', $id)->get();
            for ($i = 0; $i < count($temas); $i++) {
                $temas[$i]->evidencia;
            }
            return $temas;
        }
        return TemaAnteproyecto::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TemaAnteproyecto  $temaAnteproyecto
     * @return \Illuminate\Http\Response
     */
    public function destroy(TemaAnteproyecto $temaAnteproyecto)
    {
        //
    }
}
