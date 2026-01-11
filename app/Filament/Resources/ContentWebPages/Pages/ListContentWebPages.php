<?php

namespace App\Filament\Resources\ContentWebPages\Pages;

use App\Filament\Resources\ContentWebPages\ContentWebPageResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListContentWebPages extends ListRecords
{
    protected static string $resource = ContentWebPageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
