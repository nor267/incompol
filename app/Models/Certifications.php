<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Certifications extends Model
{
    use HasTranslations;

    public $table = "content_web_pages_certifications";

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
    ];

    protected $fillable = [
        'title',
        'description',
        'icon',
        'content_web_page_id',
        'order'
    ];
}
