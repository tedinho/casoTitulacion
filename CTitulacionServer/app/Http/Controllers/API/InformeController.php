<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Http\Resources\Product as ProductResource;
use App\Models\Informe;
use App\Models\proyecto_titulacion;
use App\Models\User;

class InformeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Informe::get();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userId = User::where('email', $request['email'])
            ->first();

        $informe = new Informe();
        $informe->titulo = $request['titulo'];  
        $informe->cuerpo = $request['cuerpo'];
        $informe->observacion = $request['observacion'];
        $informe->user_id = $userId->id;

        $informe->save();

        return $this->sendResponse(new ProductResource($informe), 'Informe creado exitosamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Informe::find($id);

        if (is_null($product)) {
            return $this->sendError('Informe no encontrado.');
        }

        return $this->sendResponse(new ProductResource($product), 'Informe recuperado exitosamente.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
    }

    public function fechaEntrega(Request $request)
    {

        return proyecto_titulacion::create($request);
    }
}
