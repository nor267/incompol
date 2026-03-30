<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\VerificationController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



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

/**
 * Obtém toda a informação de categoria de portefolio
 */
Route::post("/get-portefolio", [PagesController::class, "get_portfolio"]);

/*** PROFILE AND AUTHENTICATION */
Route::post("/documents", [ClientController::class, "get_documents"]);
Route::post("/logout", [AuthController::class, "logout"]);



/***
 * 
 * GUARDAR INFO NA DB
 */

/***
 * Guardar a mensagem enviado pelo formulário de contacto
 * 
 */
Route::post('/contact', [FormController::class, 'contact_form'])->middleware('throttle:3,5');

Route::post('/job', [FormController::class, 'contact_job'])->middleware('throttle:6,5');


/*** VERIFICAÇÃO DE EMAIL */
Route::get('/email/verify/{id}/{hash}', [VerificationController::class, "__invoke"])->name('verification.verify');

//TODO: fazer
Route::get('/', [VerificationController::class, function () {
    return "you need to verify your email";
}])->name('verification.notice');


/** MODIFICAÇÃO DE PASSWORD */
Route::post('/confirm-password', [AuthController::class, 'reset_password'])->name('reset-password');
