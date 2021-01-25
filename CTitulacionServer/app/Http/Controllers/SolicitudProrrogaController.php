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
        $solicitudProrroga->duracion = $request['duracion'];
        $solicitudProrroga->motivo = $request['motivo'];
        $solicitudProrroga->observacion = $request['observacion']; 
        $result = $solicitudProrroga->save();

        if($result){
            return ["result"=>"Solicitud Prorroga añadida"];
        }else{
            return ["result"=>"Solicitud Prorroga no añadida"];
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
        $solicitudProrroga->duracion = $request['duracion'];
        $solicitudProrroga->motivo = $request['motivo'];
        $solicitudProrroga->observacion = $request['observacion']; 
        $result = $solicitudProrroga->save();

        if($result){
            return ["result"=>"Solicitud Prorroga actualizada"];
        }else{
            return ["result"=>"Solicitud Prorroga no actualizada"];
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

        if($result){
            return ["result"=>"Solicitud Prorroga esta eliminada"];
        }else{
            return ["result"=>"Solicitud Prorroga no se ha eliminado"];
        }
    }
}
