<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class OverviewIcons extends Model
{
    use HasTranslations;

    public $table = "content_web_pages_icons";

    protected $casts = [
        'text' => 'array',
        'first_title' => 'array',
        'second_title' => 'array',
    ];

    protected $fillable = [
        'icon',
        'second_title',
        'text',
        'content_web_pages_id',
        'order',
        'first_title'
    ];

    public $timestamps = true;

    public function page()
    {
        return $this->hasOne(ContentWebPage::class);
    }
}
