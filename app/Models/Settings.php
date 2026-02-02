<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    public $table = "website_settings";

    protected $fillable = [
        'key',
        'name',
        'value',
    ];

    public $timestamps = true;
}
