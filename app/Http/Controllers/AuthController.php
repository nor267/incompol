<?php

namespace App\Http\Controllers;

use App\Mail\PasswordChanged;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function reset_password(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'password' => 'required|min:8|confirmed',
            'email' => 'required'
        ]);

        // Find the password reset record
        $reset = DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->first();

        if (!$reset) {
            return response()->json(['erros' => true, 'message' => 'Link expired']);
        }

        if (!Hash::check($request->token, $reset->token)) {
            return response()->json(['erros' => true, 'message' => 'Link expired']);
        }

        if (Carbon::parse($reset->created_at)->addMinutes(60 * 5)->isPast()) {
            return response()->json(['erros' => true, 'message' => 'Link expired']);
        }

        $customer = Client::where('email', $request->email)->first();

        // Update password
        $customer->forceFill([
            'password' => Hash::make($request->password)
        ])->setRememberToken(Str::random(60));

        $customer->save();

        event(new PasswordReset($customer));

        // Delete the used reset token
        DB::table('password_reset_tokens')->where('email', $request->email)->delete();

        Mail::to($customer->email)->send(new PasswordChanged($customer->name));

        return response()->json(['erros' => false, 'message' => 'ok']);
    }

    /**
     * Autenticação do utilizador
     */
    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:8',
            'username' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['erros' => true, 'message_pt' => 'Tem de preencher os dois campos.', 'message_en' => 'You need to fill everything.']);
        }

        $username = $request->input('username');
        $password = $request->input('password');

        $user = Client::where('username', $username)->where('active', true)->first();

        if (!$user->hasVerifiedEmail()) {
            return response()->json(['erros' => true, 'message_pt' => 'Precisa de verificar o email. Por favor contacte o administrador', 'message_en' => 'You need to verify your email. Contact your administrator.']);
        }

        if ($user && Hash::check($password, $user->password)) {
            Auth::guard('client')->login($user);
            $token = $user->createToken('auth_token')->plainTextToken;
            session()->regenerate();

            // return view("login.login");
            return response()->json(['erros' => false, 'message' => '', 'token' => $token, 'client' => [
                'id' => $user->id,

            ]]);
        }

        return response()->json(['erros' => true, 'message_en' => 'Invalid credentials', 'message_pt' => 'Credenciais inválidas']);
    }

    public function logout(Request $request)
    {
        $token = str_replace('Bearer ', '', $request->header('Authorization'));

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken) {
            return response()->json(['message' => 'Invalid token'], 401);
        }

        $accessToken->delete();
    }
}
