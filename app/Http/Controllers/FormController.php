<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\ContactForm;
use App\Models\News;
use Illuminate\Http\Request;
use Nette\Utils\Json;

class FormController extends Controller
{
    public function contact_form(ContactRequest $request)
    {
        ContactForm::create([
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "message" => $request->message,
            "terms" => $request->terms_conditions,
            "status" => "new"
        ]);
    }
}
