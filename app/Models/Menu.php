<?php

namespace App\Models;

use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use HasTranslations;
    use SoftDeletes;

    public $table = "menus";

    protected $translatable = [
        'name',
    ];

    protected $casts = [
        'name' => 'array',
    ];

    protected $fillable = [
        'name',
        'name_pt',
        'visible',
    ];

    public $timestamps = true;
}
