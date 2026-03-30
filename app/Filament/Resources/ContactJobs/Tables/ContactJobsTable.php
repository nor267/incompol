<?php

namespace App\Filament\Resources\ContactJobs\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ContactJobsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nome')
                    ->searchable(),

                TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),

                TextColumn::make('phone')
                    ->label('Contacto')
                    ->searchable(),
                SelectColumn::make('status')
                    ->label('Estado')
                    ->options(['new' => 'Novo', 'responded' => 'Respondido', 'pending' => 'Pendente', 'interviewed' => 'Entrevistado', 'cancelled' => 'Terminado'])
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([

                ViewAction::make()
                    ->schema([
                        TextInput::make('name')
                            ->label('Nome')
                            ->disabled(),
                        TextInput::make('email')
                            ->label('Email')
                            ->disabled(),
                        TextInput::make('phone')
                            ->label('Contacto')
                            ->disabled(),
                        TextInput::make('message')
                            ->label('Mensagem')
                            ->disabled(),
                        FileUpload::make('cv_file')
                            ->previewable()
                            ->openable()
                            ->downloadable()
                            ->disk('public')
                            ->label('Currículo')

                    ]),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),

                ]),
            ]);
    }
}
