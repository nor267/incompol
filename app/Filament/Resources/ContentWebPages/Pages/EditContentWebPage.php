<?php

namespace App\Filament\Resources\ContentWebPages\Pages;

use App\Filament\Resources\ContentWebPages\ContentWebPageResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditContentWebPage extends EditRecord
{
    protected static string $resource = ContentWebPageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
