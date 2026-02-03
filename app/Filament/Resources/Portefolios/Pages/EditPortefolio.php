<?php

namespace App\Filament\Resources\Portefolios\Pages;

use App\Filament\Resources\Portefolios\PortefolioResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPortefolio extends EditRecord
{
    protected static string $resource = PortefolioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
