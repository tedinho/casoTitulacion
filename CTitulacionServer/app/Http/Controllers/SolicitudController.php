<?php

namespace App\Http\Controllers;

use App\Models\docente_carrera;
use App\Models\estudiante_carrera;
use App\Models\solicitud;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SolicitudController extends Controller
{

    public function buscarSolicitudPorIdEstudianteCarrera($idEstudianteCarrera)
    {
        return solicitud::where('estudiante_carrera_id', $idEstudianteCarrera)->get();
    }


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
        return solicitud::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\solicitud  $solicitud
     * @return \Illuminate\Http\Response
     */
    public function show(solicitud $solicitud)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\solicitud  $solicitud
     * @return \Illuminate\Http\Response
     */
    public function edit(solicitud $solicitud)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\solicitud  $solicitud
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $input = $request->all();
        solicitud::where('id', $id)->update($input);
        if ($request->estado == 'E') {
            $estudianteCarrera = estudiante_carrera::find($request->estudiante_carrera_id);
            $estudiante = User::find($estudianteCarrera->estudiante_id);
            $docentes =  docente_carrera::where('carrera_id', $estudianteCarrera->carrera_id)->get();
            for ($i = 0; $i < count($docentes); $i++) {
                $nivel = $docentes[$i]->usuario;
                $nivel->carrera;
            }
            for ($i = 0; $i < count($docentes); $i++) {
                $to_name = $docentes[$i]->usuario->name;
                $to_email = $docentes[$i]->usuario->email;
                $data = array('nombre' => $docentes[$i]->usuario->name, "estudiante" => $estudiante->name);
                Mail::send('mailDocenteSolicitud', $data, function ($message) use ($to_name, $to_email) {
                    $message->to($to_email, $to_name)->subject('Envio Solicitud');
                    $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
                });
            }
        }

        if ($request->estado == 'R') {
            $estudianteCarrera = estudiante_carrera::find($request->estudiante_carrera_id);
            $estudiante = User::find($estudianteCarrera->estudiante_id);
            $to_name = $estudiante->name;
            $to_email = $estudiante->email;
            $data = array("estudiante" => $estudiante->name, "observacion" => $request->observacion);
            Mail::send('mailRechazoSolicitud', $data, function ($message) use ($to_name, $to_email) {
                $message->to($to_email, $to_name)->subject('Envio Solicitud');
                $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
            });
        }

        if ($request->estado == 'A') {
            $estudianteCarrera = estudiante_carrera::find($request->estudiante_carrera_id);
            $estudiante = User::find($estudianteCarrera->estudiante_id);
            $to_name = $estudiante->name;
            $to_email = $estudiante->email;
            $data = array("estudiante" => $estudiante->name);
            Mail::send('mailAprobacionSolicitud', $data, function ($message) use ($to_name, $to_email) {
                $message->to($to_email, $to_name)->subject('Envio Solicitud');
                $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
            });
        }

        return solicitud::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\solicitud  $solicitud
     * @return \Illuminate\Http\Response
     */
    public function destroy(solicitud $solicitud)
    {
        //
    }
}
