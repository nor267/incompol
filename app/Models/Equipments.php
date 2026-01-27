<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Equipments extends Model
{
    use HasTranslations;

    public $table = "content_web_pages_equipments";

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
    ];

    protected $fillable = [
        'title',
        'description',
        'content_web_page_id',
        'order'
    ];
}
