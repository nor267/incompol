<?php

namespace App\Filament\Resources\Clients\Pages;

use App\Filament\Resources\Clients\ClientResource;
use Filament\Resources\Pages\CreateRecord;

class CreateClient extends CreateRecord
{
    protected static string $resource = ClientResource::class;

    protected function afterCreate(): void
    {
        $this->record->createToken('auth_token')->plainTextToken;

        if (!$this->record->hasVerifiedEmail()) {
            $this->record->sendEmailVerificationNotification();
        }
    }
}
