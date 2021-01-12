<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ArchivosController;
use App\Http\Controllers\CarreraController;
use App\Http\Controllers\AnteproyectoController;
use App\Http\Controllers\ObservacionAnteproyectoController;
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



Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::resource('carreras', CarreraController::class);
Route::resource('anteproyectos', AnteproyectoController::class);
Route::resource('observacionAnteproyecto', ObservacionAnteproyectoController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
