<?php

namespace App\Http\Controllers\API;

use App\Models\Evidencia;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\FechaConfiguracione;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator, Redirect, Response, File;



class ArchivosController extends BaseController
{

    public function obtenerDocumentos($user_id)
    {
        $docs = Evidencia::where('user_id', $user_id)
            ->first();

        if($docs){
            return Evidencia::where('user_id', $user_id)
            ->get();           
        }
        if(!$docs){
            $docu = new Evidencia();
            $docu->id = "";
            $docu->nombre_archivo = "";
            $docu->ruta_archivo = "No se a subido ningun archivo";
            $docu->nota_archivo = "";
            $docu->user_id = $user_id;

            return [$docu];
        }

    }

    public function getUserById($id)
    {
        $user = User::where('email', $id)
            ->first();

        return $user;
    }

    public function getUserByM($id)
    {
        $user = User::where('id', $id)
            ->first();

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
                "success" => false,
                "message" => "No existe el correo",
            ]);
        }
        if ($usuario) {

            $arch = Evidencia::where('user_id', $usuario->id)
                ->first();

            if ($this->verificarFecha($usuario->id)) {

                if ($arch) {
                    return response()->json([
                        "success" => false,
                        "message" => "Solo puede subir un solo archivo"
                    ]);
                }
                if (!$arch) {
                    if ($request->file('file')) {

                        //store file into document folder
                        $file = $request->file->store('public/documents');

                        $archiv = $request->file->store('storage/documents');

                        //store your file into database
                        $evidencia = new Evidencia();
                        $evidencia->nombre_archivo = $request['nombre_archivo'];
                        $evidencia->ruta_archivo = $file;
                        $evidencia->url = $archiv;
                        $evidencia->tipo_archivo = $request['tipo_archivo'];
                        $evidencia->user_id = $usuario->id;
                        $evidencia->save();

                        return response()->json([
                            "success" => true,
                            "message" => "Archivo guardado exitosamente",
                            "file" => $file
                        ]);
                    }
                }
            }
            if (!$this->verificarFecha($usuario)) {
                return response()->json([
                    "success" => false,
                    "message" => "No puede subir archivos tiempo expirado",
                    "user" => $usuario
                ]);
            }
        }
    }
}
