<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class ContentWebPage extends Model
{
    use HasTranslations;

    public $table = "content_web_pages";

    protected $casts = [
        'slogan' => 'array',
        'description' => 'array',
        'name' => 'array',
        'section_1_title' => 'array',
        'section_1_slogan' => 'array',
        'section_2_title' => 'array',
        'section_2_slogan' => 'array',
        'section_2_text' => 'array',
        'section_3_title' => 'array',
        'section_3_slogan' => 'array',
        'section_3_text' => 'array',
        'section_4_title' => 'array',
        'section_4_slogan' => 'array',
        'section_4_text' => 'array',
        'section_5_title' => 'array',
        'section_5_slogan' => 'array',
        'section_5_text' => 'array',
        'section_6_title' => 'array',
        'section_6_slogan' => 'array',
        'section_6_text' => 'array',
        'section_7_title' => 'array',
        'section_7_slogan' => 'array',
        'section_7_text' => 'array',
        'section_8_title' => 'array',
        'section_8_slogan' => 'array',
        'section_8_text' => 'array',
    ];

    protected $fillable = [
        'name',
        'name_backoffice',
        'slug',
        'language_id',
        'visible',
        'banner_video',
        'slogan',
        'description',
        'second_image',
        'section_1_title',
        'section_1_slogan',
        'section_2_title',
        'section_2_slogan',
        'section_2_text',
        'section_2_media',
        'section_2_media_1',
        'section_3_title',
        'section_3_slogan',
        'section_3_media',
        'section_3_text',
        'section_4_title',
        'section_4_slogan',
        'section_4_text',
        'section_4_media',
        'section_4_media_1',
        'section_5_title',
        'section_5_slogan',
        'section_5_text',
        'section_5_media',
        'section_5_media_1',
        'section_6_title',
        'section_6_slogan',
        'section_6_text',
        'section_6_media',
        'section_6_media_1',
        'section_7_title',
        'section_7_slogan',
        'section_7_text',
        'section_7_media',
        'section_7_media_1',
        'section_8_title',
        'section_8_slogan',
        'section_8_text',
        'section_8_media',
        'section_8_media_1',
    ];

    public function overviewIcons()
    {
        return $this->hasMany(OverviewIcons::class);
    }

    public function overviewHistory()
    {
        return $this->hasMany(OverviewHistory::class);
    }

    public function certifications()
    {
        return $this->hasMany(Certifications::class);
    }

    public function equipments()
    {
        return $this->hasMany(Equipments::class);
    }

    public $timestamps = true;
}
