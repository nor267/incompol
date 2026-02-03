<?php

namespace App\Filament\Resources\Portefolios\Pages;

use App\Filament\Resources\Portefolios\PortefolioResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPortefolios extends ListRecords
{
    protected static string $resource = PortefolioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
