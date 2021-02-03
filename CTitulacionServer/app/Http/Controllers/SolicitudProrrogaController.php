<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SolicitudProrroga;
use PhpParser\Node\Expr\AssignOp\Pow;

class SolicitudProrrogaController extends Controller
{

    // Listar Solicitud de Prórroga
    public function index()
    {

        $result = SolicitudProrroga::get();
        return $result;
        // return SolicitudesProrroga::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $solicitudProrroga = new SolicitudProrroga();
        $solicitudProrroga->fecha = $request['fecha'];
        $solicitudProrroga->proyecto_titulacions_id = $request['proyecto_titulacions_id'];
        $solicitudProrroga->evidencia_id = $request['evidencia_id'];
        $solicitudProrroga->duracion = $request['duracion'];
        $solicitudProrroga->motivo = $request['motivo'];
        $solicitudProrroga->observacion = $request['observacion'];
        $solicitudProrroga->estado = $request['estado'];
        $solicitudProrroga->intentos = $request['intentos'];
        $solicitudProrroga->motivo_desaprobado = $request['motivo_desaprobado'];
        $result = $solicitudProrroga->save();

        if ($result) {
            return ["result" => "Solicitud Prorroga añadida"];
        } else {
            return ["result" => "Solicitud Prorroga no añadida"];
        }

        // $solicitudProrroga = $request->all();
        // return SolicitudProrroga::create($solicitudProrroga);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = SolicitudProrroga::find($id);
        return $result;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $solicitudProrroga = SolicitudProrroga::find($id);
        $solicitudProrroga->fecha = $request['fecha'];
        $solicitudProrroga->proyecto_titulacions_id = $request['proyecto_titulacions_id'];
        $solicitudProrroga->evidencia_id = $request['evidencia_id'];
        $solicitudProrroga->duracion = $request['duracion'];
        $solicitudProrroga->motivo = $request['motivo'];
        $solicitudProrroga->observacion = $request['observacion'];
        $solicitudProrroga->estado = $request['estado'];
        $solicitudProrroga->intentos = $request['intentos'];
        $solicitudProrroga->motivo_desaprobado = $request['motivo_desaprobado'];
        $result = $solicitudProrroga->save();

        if ($result) {
            return ["result" => "Solicitud Prorroga actualizada"];
        } else {
            return ["result" => "Solicitud Prorroga no actualizada"];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $solicitudProrroga = SolicitudProrroga::find($id);
        $result = $solicitudProrroga->delete();

        if ($result) {
            return ["result" => "Solicitud Prorroga esta eliminada"];
        } else {
            return ["result" => "Solicitud Prorroga no se ha eliminado"];
        }
    }

    /**
     * aprobar solicitud de prorroga.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SolicitudProrroga  $solicitudProrroga
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function aprobarSolicitud(Request $request, $id)
    {
        $changeStage  = SolicitudProrroga::find($id);
        $changeStage->estado =  "Aprobado";
        $changeStage->intentos =  1;
        $changeStage->save();
        return $changeStage;
    }

     /**
     * desaprobar solicitud de prorroga.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SolicitudProrroga  $solicitudProrroga
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function desaprobarSolicitud(Request $request, $id)
    {
        $changeStage  = SolicitudProrroga::find($id);
        $changeStage->estado =  "Desaprobado";
        $changeStage->motivo_desaprobado = "No aprobado";
        $changeStage->save();
        return $changeStage;
    }
}
