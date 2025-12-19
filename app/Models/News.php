<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    public $timestamps = true;

    use SoftDeletes;

    public $table = "news";

    protected $fillable = [
        'title',
        'banner_image',
        'date',
        'description'
    ];
}
