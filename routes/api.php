<?php

use App\Http\Controllers\PagesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


/**
 * 
 * get a page
 */
Route::post("/get-page", [PagesController::class, 'get_page']);
/**
 * get icons
 */
Route::post("/get-icons", [PagesController::class, 'get_icons']);

/**
 * get news
 */
Route::post("/get-news", [PagesController::class, "get_news"]);

/**
 * get history
 */
Route::post("/get-history", [PagesController::class, "get_history"]);

/**
 * get certifications
 */
Route::post("/get-certification", [PagesController::class, "get_certification"]);


/**
 * get equipments
 */
Route::post("/get-equipment", [PagesController::class, "get_equipment"]);
