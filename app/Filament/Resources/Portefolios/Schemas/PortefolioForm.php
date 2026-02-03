<?php

namespace App\Filament\Resources\Portefolios\Schemas;

use AbdulmajeedJamaan\FilamentTranslatableTabs\TranslatableTabs;
use App\Models\ContentWebPage;
use App\Models\Portefolio;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PortefolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Portefólio')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('name')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 100 caracteres')
                                    ->toolbarButtons([]),
                            ]),
                        FileUpload::make('image')
                            ->label('Imagem')
                            ->disk('public')
                            ->directory('uploads/images')
                            ->required()
                            ->downloadable()
                            ->image()
                            ->openable()
                            ->maxSize(1024) // 1 MB
                            ->acceptedFileTypes(['image/jpeg', 'image/webp'])
                            ->helperText('Máximo de 1MB por imagem. Apenas JPG ou WEBP são permitidos.')
                            ->validationMessages([
                                'mimes' => 'A imagem deve ser do tipo JPG ou WEBP.',
                                'max' => 'A imagem não pode exceder 1MB.',
                            ])
                            ->previewable()
                            ->columnSpanFull(),


                    ])
                    ->columns(1)
                    ->columnSpan(['lg' => fn(?Portefolio $record) => $record === null ? 3 : 2]),
            ]);
    }
}
