<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ArchivosController;
use App\Http\Controllers\API\FechaConfiguracioneController;
use App\Http\Controllers\API\InformeController;
use App\Http\Controllers\API\RevisorController;
use App\Http\Controllers\CarreraController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('storefile', [ArchivosController::class, 'store']);
Route::post('getfile/{user_id}', [ArchivosController::class, 'obtenerDocumentos']);
Route::get('getUser/{id}', [ArchivosController::class, 'getUserById']);
Route::get('getUserM/{id}', [ArchivosController::class, 'getUserByM']);



//Route::get('downfile/{id}', [ArchivosController::class, 'descargarDocumento']);



Route::post('informe', [InformeController::class, 'store']);
Route::get('informe', [InformeController::class, 'index']);
Route::get('getStudents', [InformeController::class, 'obtenerEstudiantes']);

Route::post('fecha/{id}', [FechaConfiguracioneController::class, 'store']);
Route::get('fecha/{id}', [FechaConfiguracioneController::class, 'show']);
Route::post('nota/{id}', [ArchivosController::class, 'nota']);

Route::get('revisor', [RevisorController::class, 'index']);
Route::post('revisor', [RevisorController::class, 'show']);
Route::get('getEstudiante', [RevisorController::class, 'ObtenerEstudiantes']);
Route::get('getRevisor', [RevisorController::class, 'ObtenerRevisores']);
Route::post('revisorsave', [RevisorController::class, 'store']);
Route::post('revisor/{id}', [RevisorController::class, 'update']);



Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::resource('carreras', CarreraController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
