<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{

    use SoftDeletes;

    public $table = "menus";

    protected $fillable = [
        'name',
        'name_pt',
        'visible',
    ];

    public $timestamps = true;
}
