<?php

namespace App\Http\Controllers\API;

use App\Models\Evidencia;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Validator, Redirect, Response, File;



class ArchivosController extends BaseController
{

    public function obtenerDocumentos(Request $request)
    {        
        $userId = User::where('email', $request['email'])
                        ->first();

        return Evidencia::where('user_id', $userId->id)
                    ->get();
    }

    public function nota(Request $request, $id)
    {
        $documento = Evidencia::find($id);

        $documento->nota_archivo = $request['nota_archivo'];

        $documento->save();
    }

    public function store(Request $request)
    {

        if ($request->file('file')) {

            $userId = User::where('email', $request['email'])
                ->first('id');

            //store file into document folder
            $file = $request->file->store('public/documents');

            //store your file into database
            $evidencia = new Evidencia();
            $evidencia->nombre_archivo = $request['nombre_archivo'];
            $evidencia->ruta_archivo = $file;
            $evidencia->tipo_archivo = $request['tipo_archivo'];
            $evidencia->user_id = $userId->id;
            $evidencia->save();

            return response()->json([
                "success" => true,
                "message" => "Archivo guardado exitosamente",
                "file" => $file
            ]);
        }
    }
}
