<?php

namespace App\Filament\Resources\Files\Pages;

use App\Filament\Resources\Files\FilesResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditFiles extends EditRecord
{
    protected static string $resource = FilesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
