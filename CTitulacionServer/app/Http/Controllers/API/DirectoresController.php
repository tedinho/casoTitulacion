<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Directore;
use App\Models\Evidencia;
use App\Models\FechaConfiguracione;
use App\Models\Informe;
use App\Models\User;
use Illuminate\Http\Request;

class DirectoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    public function obtenerProyectoxEstudiante($id)
    {        
        $documento = Evidencia::where('user_id', $id)->first();

        if($documento)
        {
            return response()->json([                
                $documento
            ]);
        }
        if(!$documento)
        {
            $docu = new Evidencia();
            $docu->id = "";
            $docu->nombre_archivo = "";
            $docu->ruta_archivo = "No se a subido ningun archivo";
            $docu->nota_archivo = "";
            $docu->user_id = $id;

            return [$docu];
        }
        
    }

    public function fusionDirectorEstudiante($id)
    {
        $director = Directore::where('student_id', $id)->first();

        if ($director) {

            $student = User::where('id', $director['student_id'])->first();
            $rev = User::where('id', $director['director_id'])->first();
            return response()->json([
                "nombreEstudiante" => $student['name'],
                "idEstudiante" => $student['id'],
                "nombreDirector" => $rev['name'],
                "idRevisor" => $rev['id'],
            ]);
        }

        return response()->json([
            "nombreEstudiante" => " ",
            "idEstudiante" => " ",
            "nombreDirector" => " ",
            "idRevisor" => " ",
        ]);
    }

    public function informeDirector(Request $request)
    {
        $anio = date("Y"); 
        $validacionInforme = $request['validacion'];

        if ($validacionInforme == true) {
            
            $informe = new Informe();
            
            $informe->tipo_informe = "INFORME FINAL DE DIRECCIÓN DE TITULACIÓN";
            $informe->memorando = $anio;
            $informe->titulo = $request['titulo'];
            $informe->cuerpo = $request['cuerpo'];
            $informe->observacion = $request['observacion'];
            $informe->informe_favorable = true;
            $informe->revisor_email = $request['director_email'];
            $informe->user_id = $request['user_id'];
            $informe->save();

            $documento = Evidencia::where('user_id', $request['user_id'])->first();                     
            if($documento)
            {
                $documento->nota_archivo = $request['calificacion_proyecto'];
                $documento->save(); 
            }

            $user = User::where('email', $request['director_email'])->first();

            $fecha = new FechaConfiguracione();
            $fecha->fecha = date('Y-m-d', strtotime("+16 days"));
            $fecha->aceptacionInforme = true;
            $fecha->user_id = $request['user_id'];
            $fecha->save();

            $file = $request->file->store('public/documents');

            $archiv = $request->file->store('storage/documents');

            //store your file into database
            $hojaTutorias = new Evidencia();
            $hojaTutorias->nombre_archivo = $request['nombre_archivo'];
            $hojaTutorias->ruta_archivo = $file;
            $hojaTutorias->url = $archiv;
            $hojaTutorias->tipo_archivo = "Informe del director";
            $hojaTutorias->user_id = $user->id;
            $hojaTutorias->student_id = $request['user_id'];            
            $hojaTutorias->save();

            return response()->json([
                "success" => true,                
                "message" => "Guardado informe y calificación de forma correcta"
            ]);

        }
        if ($validacionInforme != true) {

            $informe = new Informe();
            $informe->tipo_informe = "INFORME FINAL DE DIRECCIÓN DE TITULACIÓN";
            $informe->memorando = $anio;
            $informe->titulo = $request['titulo'];
            $informe->cuerpo = $request['cuerpo'];
            $informe->observacion = $request['observacion'];
            $informe->informe_favorable = false;
            $informe->revisor_email = $request['director_email'];
            $informe->user_id = $request['user_id'];
            $informe->save();

            $documento = Evidencia::where('user_id', $request['user_id'])->first();
            if($documento)
            {
                $documento->nota_archivo = "0";
                $documento->save();      
            }

            $user = User::where('email', $request['director_email'])->first();

            $fecha = new FechaConfiguracione();            
            $fecha->aceptacionInforme = false;
            $fecha->user_id = $request['user_id'];
            $fecha->save();

            $file = $request->file->store('public/documents');

            $archiv = $request->file->store('storage/documents');

            //store your file into database
            $hojaTutorias = new Evidencia();
            $hojaTutorias->nombre_archivo = $request['nombre_archivo'];
            $hojaTutorias->ruta_archivo = $file;
            $hojaTutorias->url = $archiv;
            $hojaTutorias->tipo_archivo = "Informe del director";
            $hojaTutorias->user_id = $user->id;
            $hojaTutorias->student_id = $request['user_id'];            
            $hojaTutorias->save();

            return response()->json([
                "success" => true,                
                "message" => "Guardado informe de forma correcta"
            ]);
        }
        
    }

    public function obtenerEstudiantesEmail($email)
    {
        $director = User::where('email', 'd1@mail.com')->first();

        $directororPivot = Directore::where('director_id', $director['id'])->get();

        return $directororPivot;
    }

    public function obtenerEstudiantesxDirector($id)
    {
        $datosEstudiante = User::where('id', $id)->get();

        return $datosEstudiante;
    }

    public function getInformeByStudent($id)
    {
        $informeDirector = Evidencia::where('student_id', $id)->get();

        return $informeDirector;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
