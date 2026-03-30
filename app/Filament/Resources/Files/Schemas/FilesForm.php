<?php

namespace App\Filament\Resources\Files\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Schema;

class FilesForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('file_path')
                    ->previewable()
                    ->openable()
                    ->downloadable()
                    ->disk('public')
                    ->directory('uploads/clients')
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
}
