<?php

use App\Http\Controllers\AnteproyectoController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ArchivosController;
use App\Http\Controllers\API\DirectoresController;
use App\Http\Controllers\API\FechaConfiguracioneController;
use App\Http\Controllers\API\InformeController;
use App\Http\Controllers\API\RevisorController;
use App\Http\Controllers\CarreraController;
use App\Http\Controllers\CarreraRequisitoController;
use App\Http\Controllers\CarreraRequisitoSolicitudController;
use App\Http\Controllers\DocenteCarreraController;
use App\Http\Controllers\EstudianteCarreraController;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\EvidenciaCarreraController;
use App\Http\Controllers\EvidenciaController;
use App\Http\Controllers\PeriodoLectivoController;
use App\Http\Controllers\ProyectoTitulacionController;
use App\Http\Controllers\ObservacionAnteproyectoController;
use App\Http\Controllers\SolicitudController;
use App\Http\Controllers\SolicitudProrrogaController;
use App\Http\Controllers\TemaAnteproyectoController;
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

Route::get('directores', [DirectoresController::class, 'index']);


Route::post('informe', [InformeController::class, 'store']);
Route::get('informe', [InformeController::class, 'index']);
Route::get('informe/{id}', [InformeController::class, 'show']);
Route::get('informemail/{email}', [InformeController::class, 'obtenerInformeEmail']);

Route::get('getStudents', [InformeController::class, 'obtenerEstudiantes']);
Route::get('obtEstudia/{email}', [RevisorController::class, 'obtenerEstudiantesId']);

Route::post('fecha/{id}', [FechaConfiguracioneController::class, 'store']);
Route::get('fecha/{id}', [FechaConfiguracioneController::class, 'show']);
Route::post('nota/{id}', [ArchivosController::class, 'nota']);

Route::get('revisor', [RevisorController::class, 'index']);
Route::get('fusion/{id}', [RevisorController::class, 'Fusion']);
Route::get('obtenerEstu/{id}', [RevisorController::class, 'obtenerEstu']);

Route::get('getEstudiante', [RevisorController::class, 'ObtenerEstudiantes']);
Route::get('getRevisor', [RevisorController::class, 'ObtenerRevisores']);
Route::post('revisorsave', [RevisorController::class, 'store']);
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
Route::get('docente-carrera/buscar-docente-id-docente/{idUsuario}', [DocenteCarreraController::class, 'buscarDocentesCarreraPorIdDocente']);
Route::resource('periodo-lectivo', PeriodoLectivoController::class);
Route::get('periodo-lectivo/buscar-periodo-lectivo-id-carrera/{idCarrera}', [PeriodoLectivoController::class, 'buscarPeriodosLectivoPorIdCarrera']);

Route::resource('evidencia-carrera', EvidenciaCarreraController::class);
Route::get('evidencia-carrera/buscar-evidencia-por-id-carrera/{idCarrera}', [EvidenciaCarreraController::class, 'buscarEvidenciasPorIdCarrera']);


Route::resource('carrera-requisito', CarreraRequisitoController::class);
Route::get('carrera-requisito/buscar-requisito-id-carrera/{idCarrera}', [CarreraRequisitoController::class, 'buscarRequisitosPorIdCarrera']);


Route::resource('carrera-requisito-solicitud', CarreraRequisitoSolicitudController::class);
Route::get('carrera-requisito-solicitud/buscar-requisito-carrera-solicitud-id-solicitud/{idSolicitud}', [CarreraRequisitoSolicitudController::class, 'buscarCarreraRequisitoPorIdSolicitud']);

Route::resource('solicitud', SolicitudController::class);
Route::get('solicitud/buscar-por-id-estudiante-carrera/{idEstudianteCarrera}', [SolicitudController::class, 'buscarSolicitudPorIdEstudianteCarrera']);
Route::resource('anteproyectos', AnteproyectoController::class);
Route::resource('temaAnteproyectos', ObservacionAnteproyectoController::class);
Route::get('getEstudiantes', [AnteproyectoController::class, 'obtenerEstudiantes']);
Route::resource('proyectoTitulacion', ProyectoTitulacionController::class);

Route::resource("solicitudProrroga", SolicitudProrrogaController::class);

Route::resource('tema-anteproyecto', TemaAnteproyectoController::class);
Route::get('tema-anteproyecto/buscar-por-id-solicitud/{idSolicitud}', [TemaAnteproyectoController::class, 'buscarTemaAnteproyectoPorIdSolicitud']);
Route::get('tema-anteproyecto/buscar-por-aprobar-id-carrera/{idCarrera}', [TemaAnteproyectoController::class, 'buscarTemaAnteproyectoPorIdCarrera']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
