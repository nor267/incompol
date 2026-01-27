<?php

namespace App\Filament\Resources\Jobs\Schemas;

use AbdulmajeedJamaan\FilamentTranslatableTabs\TranslatableTabs;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class JobForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Notícia')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                TextInput::make('title')
                                    ->hint('Máximo 50 caracteres')
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->required(true),
                                RichEditor::make('description')
                                    ->label('Descrição')
                                    ->required(true),
                            ]),
                        FileUpload::make('banner_image')
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
                            ]),
                    ])->columnSpan(2),

                Group::make()
                    ->schema([
                        Section::make('Outros')
                            ->schema([
                                DatePicker::make('date')
                                    ->label('Data'),
                                Toggle::make('visible')
                                    ->label('Visível')
                                    ->onColor('success')
                                    ->offColor('danger')
                                    ->onIcon('heroicon-m-check')
                                    ->offIcon('heroicon-m-x-mark')
                                    ->helperText('Anúncio visível ou escondido')
                                    ->default(true),
                            ]),
                    ]),
            ])->columns(3);
    }
}
