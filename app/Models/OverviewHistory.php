<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class OverviewHistory extends Model
{
    use HasTranslations;

    public $table = "content_web_pages_history";

    protected $casts = [
        'text' => 'array',
    ];

    public $translatable = [
        'text',
    ];

    protected $fillable = [
        'year',
        'text',
        'order',
    ];

    public $timestamps = true;

    public function page()
    {
        return $this->hasOne(ContentWebPage::class);
    }
}
