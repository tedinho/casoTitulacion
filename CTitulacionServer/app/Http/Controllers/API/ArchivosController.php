<?php

namespace App\Http\Controllers\API;

use App\Models\Evidencia;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator,Redirect,Response,File;



class ArchivosController extends BaseController
{
    public function store(Request $request)
    {
        if ($request->file('file')) {
             
            //store file into document folder
            $file = $request->file->store('public/documents');
 
            //store your file into database
            $evidencia = new Evidencia();     
            $evidencia->ruta_archivo = $file;
            $evidencia->save();
              
            return response()->json([
                "success" => true,
                "message" => "File successfully uploaded",
                "file" => $file
            ]);
  
        }
    }
}
