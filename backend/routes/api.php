<?php

use App\Http\Controllers\FelhasznalokController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('felhasznaloks', [FelhasznalokController::class , 'index']);
Route::get('felhasznaloks/{id}', [FelhasznalokController::class , 'show']);
Route::post('felhasznaloks', [FelhasznalokController::class , 'store']);
Route::put('felhasznaloks/{id}', [FelhasznalokController::class , 'update']);
Route::delete('felhasznaloks/{id}', [FelhasznalokController::class , 'destroy']);
