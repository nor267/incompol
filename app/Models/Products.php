<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Products extends Model
{
    use HasTranslations;

    public $table = "content_web_pages_products";

    protected $casts = [
        'name' => 'array',
    ];

    protected $fillable = [
        'id_pai',
        'name',
        'media',
        'order',
    ];

    public $timestamps = true;
}
