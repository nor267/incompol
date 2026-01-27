<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContentWebPagesKeys extends Model
{

    protected $table = 'content_web_pages_keys';

    protected $fillable = ['content_web_page_id', 'key', 'content'];

    public function page()
    {
        return $this->belongsTo(ContentWebPage::class);
    }

    public function keyValues()
    {
        return $this->hasMany(ContentWebPage::class);
    }
}
