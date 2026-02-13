<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortefolioImage extends Model
{
    public $table = "portefolio_images";

    protected $casts = [
        'text' => 'array',
    ];
    protected $fillable = [
        'portefolio_sub_category_id',
        'image',
        'order',
        'text'
    ];

    public $timestamps = true;

    public function portefolio()
    {
        return $this->hasOne(Portefolio::class);
    }
}
