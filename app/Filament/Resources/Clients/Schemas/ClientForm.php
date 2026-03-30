<?php

namespace App\Filament\Resources\Clients\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\ToggleColumn;

class ClientForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextInput::make('name')
                        ->label('Nome'),
                    TextInput::make('email')
                        ->unique()
                        ->label('Email'),
                    TextInput::make('morada')
                        ->label('Morada Completa'),
                    TextInput::make('phone')
                        ->label('Telefone/Telemóvel'),
                    TextInput::make('password')
                        ->label('Palavra-passe')
                        ->visibleOn('create'),


                ])->columnSpanFull()

            ]);
    }
}
