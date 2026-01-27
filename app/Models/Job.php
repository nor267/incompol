<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Job extends Model
{
    use HasTranslations;
    use SoftDeletes;

    public $table = "job_posts";

    protected $casts = [
        'title' => 'array',
        'description' => 'array'
    ];

    protected $fillable = [
        'date',
        'title',
        'description',
        'banner_image',
        'visible'
    ];

    public $timestamps = true;
}
