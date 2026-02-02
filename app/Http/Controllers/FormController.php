<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Requests\JobRequest;
use App\Mail\Contact;
use App\Mail\Job;
use App\Models\ContactForm;
use App\Models\ContactJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;

class FormController extends Controller
{
    public function contact_form(ContactRequest $request)
    {
        $response = Http::asForm()->post(
            'https://www.google.com/recaptcha/api/siteverify',
            [
                'secret' => env('RECAPTCHA_SECRET_KEY'),
                'response' => $request->captcha_token,
                'remoteip' => $request->ip(),
            ]
        );

        if (! $response->json('success')) {
            return response()->json([
                'message' => 'reCAPTCHA verification failed'
            ], 422);
        }

        ContactForm::create([
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "message" => $request->message,
            "terms" => $request->terms_conditions,
            "status" => "new"
        ]);

        Mail::to(env("EMAIL_ADMIN"))->send(new Contact(
            (string) $request->name,
            (string) $request->email,
            (string) $request->phone,
            (string) $request->message
        ));
    }

    public function contact_job(JobRequest $request)
    {
        // $response = Http::asForm()->post(
        //     'https://www.google.com/recaptcha/api/siteverify',
        //     [
        //         'secret' => env('RECAPTCHA_SECRET_KEY'),
        //         'response' => $request->captcha_token,
        //         'remoteip' => $request->ip(),
        //     ]
        // );

        // if (! $response->json('success')) {
        //     return response()->json([
        //         'message' => 'reCAPTCHA verification failed'
        //     ], 422);
        // }

        $path = $request->file('file')->store('cvs', 'public');

        ContactJob::create([
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "message" => $request->message,
            "terms" => $request->terms_conditions == true ? 1 : 0,
            "status" => "new",
            "cv_file" => $path,
        ]);

        Mail::to("sofiarocha@nor267.com")->send(new Job(
            (string) $request->name,
            (string) $request->email,
            (string) $request->phone,
            (string) $request->message,
            env('APP_URL') . '/storage/' . $path
        ));
    }
}
