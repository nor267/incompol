<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Files;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class ClientController extends Controller
{
    public function get_documents(Request $request)
    {
        $token = str_replace('Bearer ', '', $request->header('Authorization'));

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }

        $user = $accessToken->tokenable;


        $files = Client::where([
            'id' => $user->id
        ])->with('files')->whereHas('files')->first();


        return response()->json(['files' => $files]);
    }
}
