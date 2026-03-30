<?php

namespace App\Filament\Resources\Clients\RelationManagers;

use Filament\Actions\AssociateAction;
use Filament\Actions\AttachAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\DetachAction;
use Filament\Actions\DetachBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Forms\Components\Select;

class FilesRelationManager extends RelationManager
{
    protected static string $relationship = 'files';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('file_path')
                    ->previewable()
                    ->openable()
                    ->downloadable()
                    ->disk('public')
                    ->directory('uploads/clients')
                    ->acceptedFileTypes(['application/pdf'])
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
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('file_path')
            ->columns([
                TextColumn::make('file_path')
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                CreateAction::make()
                    ->label('Adicionar'),
                AttachAction::make()
                    ->recordSelectSearchColumns(['file_path'])
                    ->multiple()
                    ->recordSelect(
                        fn(Select $select) => $select->placeholder('Selecione um ficheiro'),
                    )
                    ->label('Associar ficheiros')
                    ->preloadRecordSelect(),
            ])
            ->recordActions([
                EditAction::make(),
                DetachAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DetachBulkAction::make(),
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
