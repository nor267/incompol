<?php

namespace App\Filament\Resources\Files\Pages;

use App\Filament\Resources\Files\FilesResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListFiles extends ListRecords
{
    protected static string $resource = FilesResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
