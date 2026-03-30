<?php

namespace App\Filament\Resources\Files\Tables;

use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class FilesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('file_path')
                    ->label('Nome')
            ])
            ->filters([
                //
            ])
            ->headerActions([Action::make('Adicionar ficheiro')
                ->modalDescription('')
                ->icon('heroicon-o-paper-clip')
                ->schema([
                    FileUpload::make('file_path')
                        ->previewable()
                        ->openable()
                        ->downloadable()
                        ->directory('uploads/clients')
                        ->hint('')
                        ->disk('public')
                        ->label('Ficheiro')
                        ->preserveFilenames(true)
                        ->columnSpanFull()
                        ->maxSize(10240)
                        ->acceptedFileTypes(['application/pdf'])
                        ->helperText('Máximo de 10MB por ficheiro. Apenas PDF é permitido.')
                        ->validationMessages([
                            'mimes' => 'O ficheiro deve ser do tipo PDF.',
                            'max' => 'O ficheiro não pode exceder 10MB.',
                        ]),

                ]),])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make()
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
