<?php

namespace App\Filament\Resources\ContactJobs\Pages;

use App\Filament\Resources\ContactJobs\ContactJobResource;
use Filament\Resources\Pages\CreateRecord;

class CreateContactJob extends CreateRecord
{
    protected static string $resource = ContactJobResource::class;
}
