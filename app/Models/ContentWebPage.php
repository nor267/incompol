<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContentWebPage extends Model
{
    public $table = "content_web_pages";

    protected $fillable = [
        'name',
        'slug',
        'language_id',
        'visible'
    ];

    public $timestamps = true;
}
