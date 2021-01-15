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
              

    public function obtenerDocumentos()
    {
        $user = Evidencia::get();

        return $user;
    }

    public function getUserById($id)
    {
        $user = User::where('id', $id)
            ->get();

        return $user;
    }


    public function nota(Request $request, $id)
    {
        $documentoVerificado = $this->verificarDocumento($id, 'nota_archivo');
        if ($documentoVerificado) {

            $documento = Evidencia::find($id);
            $documento->nota_archivo = $request['nota_archivo'];

            $documento->save();

            return response()->json([
                "success" => true,
                "message" => "Se guardo la nota del documento",
                "documento" => $documento['nota_archivo']
            ]);
        }

        if (!$documentoVerificado) {
            return response()->json([
                "success" => false,
                "message" => "El documento ya tiene asigado una nota"
            ]);
        }
    }

    protected function verificarDocumento($id, $campo)
    {
        $verificarDocumento = Evidencia::where($campo, '=', null)->find($id);

        if ($verificarDocumento != null) {
            return true;
        }
        if ($verificarDocumento == null) {
            return false;
        }
    }

    protected function verificarFecha($id)
    {
        $fechaconf = FechaConfiguracione::where([
            ['fecha', '>=', date('Y-m-d')],
            ['user_id', $id],
        ])
            ->first();

        if ($fechaconf) {
            return true;
        }

        if (!$fechaconf) {
            return false;
        }
    }

    public function store(Request $request)
    {

        $usuario = User::where('email', $request['email'])
            ->first('id');

        if (!$usuario) {
            return response()->json([
                "success" => true,
                "message" => "Archivo Subido exitosamente",
                "file" => $file
            ]);
  
        }
    }
}
