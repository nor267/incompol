<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portefolio extends Model
{
    public $table = "portefolio";

    protected $casts = [
        'name' => 'array',
    ];

    protected $fillable = [
        'parent_id',
        'name',
        'image',
    ];

    public $timestamps = true;

    public function category()
    {
        return $this->hasMany(PortefolioSubCategory::class);
    }
}
