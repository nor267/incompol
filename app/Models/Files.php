<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Files extends Model
{
    public $table = "files";

    protected $fillable = [
        'file_path',
        'order',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'id'
    ];

    public $timestamps = true;

    public function clients()
    {
        return $this->belongsToMany(Client::class);
    }
}
