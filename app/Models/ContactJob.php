<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactJob extends Model
{

    public $table = "recruitment";

    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'terms',
        'status',
        'cv_file'
    ];

    protected $casts = [
        'email' => 'encrypted',
        'phone' => 'encrypted',
        'message' => 'encrypted'
    ];

    public $timestamps = true;
}
