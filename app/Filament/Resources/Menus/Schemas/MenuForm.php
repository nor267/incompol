<?php

namespace App\Filament\Resources\Menus\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class MenuForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Menu')
                    ->schema([
                        TextInput::make('name')
                            ->label('Nome'),

                        TextInput::make('name_pt')
                            ->label('Nome pt'),

                        Toggle::make('visible')
                            ->default(false)
                            ->label('Visível')
                    ])
                    ->columns(2)
                    ->columnSpanFull(),
            ]);
    }
}
