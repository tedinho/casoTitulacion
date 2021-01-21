<?php

use App\Http\Controllers\AnteproyectoController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ArchivosController;
use App\Http\Controllers\API\FechaConfiguracioneController;
use App\Http\Controllers\API\InformeController;
use App\Http\Controllers\API\RevisorController;
use App\Http\Controllers\CarreraController;
use App\Http\Controllers\CarreraRequisitoController;
use App\Http\Controllers\CarreraRequisitoSolicitudController;
use App\Http\Controllers\DocenteCarreraController;
use App\Http\Controllers\EstudianteCarreraController;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\PeriodoLectivoController;
use App\Http\Controllers\ProyectoTitulacionController;
use App\Http\Controllers\SolicitudController;
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


Route::post('informe', [InformeController::class, 'store']);
Route::get('informe', [InformeController::class, 'index']);
Route::get('getStudents', [InformeController::class, 'obtenerEstudiantes']);

Route::post('fecha/{id}', [FechaConfiguracioneController::class, 'store']);
Route::get('fecha/{id}', [FechaConfiguracioneController::class, 'show']);
Route::post('nota/{id}', [ArchivosController::class, 'nota']);

Route::get('revisor', [RevisorController::class, 'index']);
Route::post('revisor/{id}', [RevisorController::class, 'update']);


Route::post('register', [AuthController::class, 'register']);
Route::post('registrar-docente', [AuthController::class, 'registrarDocente']);
Route::post('login', [AuthController::class, 'login']);
Route::resource('carreras', CarreraController::class);
Route::resource('estudiantes', EstudianteController::class);
Route::resource('estudiante-carrera', EstudianteCarreraController::class);
Route::get('estudiante-carrera/buscar-por-id-estudiante/{idEstudiante}', [EstudianteCarreraController::class, 'buscarPorIdEstudiante']);
Route::get('estudiante-carrera/buscar-por-id-docente/{idDocente}', [EstudianteCarreraController::class, 'buscarPorIdDocente']);
Route::resource('docente-carrera', DocenteCarreraController::class);
Route::get('docente-carrera/buscar-docente-id-carrera/{idCarrera}', [DocenteCarreraController::class, 'buscarDocentesPorIdCarrera']);
Route::resource('periodo-lectivo', PeriodoLectivoController::class);
Route::get('periodo-lectivo/buscar-periodo-lectivo-id-carrera/{idCarrera}', [PeriodoLectivoController::class, 'buscarPeriodosLectivoPorIdCarrera']);


Route::resource('carrera-requisito', CarreraRequisitoController::class);
Route::get('carrera-requisito/buscar-requisito-id-carrera/{idCarrera}', [CarreraRequisitoController::class, 'buscarRequisitosPorIdCarrera']);


Route::resource('carrera-requisito-solicitud', CarreraRequisitoSolicitudController::class);
Route::get('carrera-requisito-solicitud/buscar-requisito-carrera-solicitud-id-solicitud/{idSolicitud}', [CarreraRequisitoSolicitudController::class, 'buscarCarreraRequisitoPorIdSolicitud']);

Route::resource('solicitud', SolicitudController::class);
Route::get('solicitud/buscar-por-id-estudiante-carrera/{idEstudianteCarrera}', [SolicitudController::class, 'buscarSolicitudPorIdEstudianteCarrera']);
Route::resource('anteproyectos', AnteproyectoController::class);
Route::resource('proyectoTitulacion', ProyectoTitulacionController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
