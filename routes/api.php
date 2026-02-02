<?php

use App\Http\Controllers\FormController;
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

/**
 * obtém todas as páginas ativas de acordo com língua
 */
Route::post("/get-pages", [PagesController::class, "get_all_pages"]);

/**
 * Obtém as definições de contratação do backoffice
 */
Route::post("/get-settings", [PagesController::class, "get_settings"]);


Route::post("/get-jobs", [PagesController::class, "get_jobs"]);



/***
 * 
 * GUARDAR INFO NA DB
 */

/***
 * Guardar a mensagem enviado pelo formulário de contacto
 * 
 */
Route::post('/contact', [FormController::class, 'contact_form']);

Route::post('/job', [FormController::class, 'contact_job']);
