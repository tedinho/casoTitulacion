<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Directore;
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

    public function fusionDirectorEstudiante($id)
    {
        $revisor = Directore::where('student_id', $id)->first();

        if ($revisor) {

            $student = User::where('id', $revisor['student_id'])->first();
            $rev = User::where('id', $revisor['revisor_id'])->first();
            return response()->json([
                "nombreEstudiante" => $student['name'],
                "idEstudiante" => $student['id'],
                "nombreRevisor" => $rev['name'],
                "idRevisor" => $rev['id'],
            ]);
        }

        return response()->json([
            "nombreEstudiante" => " ",
            "idEstudiante" => " ",
            "nombreRevisor" => " ",
            "idRevisor" => " ",
        ]);
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
