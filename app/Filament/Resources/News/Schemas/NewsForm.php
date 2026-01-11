<?php

namespace App\Filament\Resources\News\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class NewsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Notícia')
                    ->schema([
                        TextInput::make('title')
                            ->hint('Máximo 50 caracteres')
                            ->label('Título da notícia')
                            ->maxLength(50)
                            ->required(true),

                        FileUpload::make('file_path')
                            ->label('Banner da notícia')
                            ->disk('public')
                            ->directory('uploads/images')
                            ->required()
                            ->downloadable()
                            ->image()
                            ->openable()
                            ->maxSize(1024) // 1 MB
                            ->rules([
                                ''
                            ])
                            ->acceptedFileTypes(['image/jpeg', 'image/webp'])
                            ->helperText('Máximo de 1MB por imagem. Apenas JPG ou WEBP são permitidos.')
                            ->validationMessages([
                                'mimes' => 'A imagem deve ser do tipo JPG ou WEBP.',
                                'max' => 'A imagem não pode exceder 1MB.',
                            ]),
                        MarkdownEditor::make('description')
                            ->label('Descrição')
                            ->required(true),

                    ])->columnSpan(2),


                Group::make()
                    ->schema([

                        Section::make('Outros')
                            ->schema([
                                DatePicker::make('wedding_date')
                                    ->label('Data da notícia')
                                    ->required(true),
                                Toggle::make('visible')
                                    ->label('Visível')
                                    ->helperText('Notícia visível ou escondida')
                                    ->default(true),
                            ]),
                    ]),
            ])->columns(3);
    }
}
