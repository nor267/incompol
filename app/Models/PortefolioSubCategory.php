<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortefolioSubCategory extends Model
{
    public $table = "portefolio_sub_categories";

    protected $casts = [
        'name' => 'array',
        'text' => 'array',
        'second_text' => 'array',
    ];

    protected $fillable = [
        'name_backoffice',
        'name',
        'image',
        'text',
        'second_text',
    ];

    public $timestamps = true;

    public function portefolio()
    {
        return $this->hasOne(Portefolio::class);
    }

    public function images()
    {
        return $this->hasMany(PortefolioImage::class);
    }
}
