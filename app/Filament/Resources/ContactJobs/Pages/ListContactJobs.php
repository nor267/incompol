<?php

namespace App\Filament\Resources\ContactJobs\Pages;

use App\Filament\Resources\ContactJobs\ContactJobResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListContactJobs extends ListRecords
{
    protected static string $resource = ContactJobResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
