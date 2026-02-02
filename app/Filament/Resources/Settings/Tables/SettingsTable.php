<?php

namespace App\Filament\Resources\Settings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\TextInputColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class SettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Definição'),

                TextColumn::make('description')
                    ->label('Descrição'),

                ToggleColumn::make('value')
                    ->label('Estado')
                    ->onColor('success')
                    ->offColor('danger')
                    ->onIcon('heroicon-m-check')
                    ->offIcon('heroicon-m-x-mark'),
            ])
            ->filters([
                //
            ])
            ->recordActions([])
            ->toolbarActions([]);
    }
}
