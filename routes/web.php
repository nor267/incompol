<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post("/authenticate", [AuthController::class, "authenticate"]);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
