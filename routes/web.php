<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\AppController;
Route::get('/{vue_capture?}', [AppController::class,'index'])
    #->middleware(['speed'])
    ->where('vue_capture', '[\/\w\.\,\-]*');
