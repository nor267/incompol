<?php

namespace App\Filament\Resources\ContactJobs\Pages;

use App\Filament\Resources\ContactJobs\ContactJobResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditContactJob extends EditRecord
{
    protected static string $resource = ContactJobResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
