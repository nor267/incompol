<?php

namespace App\Models;

use App\Mail\ResetPassword;
use App\Mail\VerifyEmail;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use Laravel\Pail\File;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable implements MustVerifyEmail, CanResetPassword
{
    use Notifiable, HasApiTokens;

    public $table = "clients";


    protected $fillable = [
        'name',
        'email',
        'morada',
        'phone',
        'fax',
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'updated_at',
        'email_verified_at',
        'created_at',
        'active'
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function sendEmailVerificationNotification()
    {
        $verifyUrl = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(60),
            ['id' => $this->id, 'hash' => sha1($this->email)]
        );

        Mail::to($this->email)->send(new VerifyEmail($this->name, $verifyUrl));
    }

    public function sendEmailResetPassword()
    {
        $token = Str::random(60);

        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $this->email],
            [
                'token' => Hash::make($token),
                'created_at' => Carbon::now(),
            ]
        );

        Mail::to($this->email)->send(new ResetPassword($this->name, env('APP_URL') . '/reset-password/' . $token));
    }

    public $timestamps = true;

    public function files()
    {
        return $this->belongsToMany(Files::class);
    }
}
