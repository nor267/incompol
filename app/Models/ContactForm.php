<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactForm extends Model
{
    use SoftDeletes;

    public $table = "contact_form";

    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'terms',
        'status'
    ];

    public $timestamps = true;
}
