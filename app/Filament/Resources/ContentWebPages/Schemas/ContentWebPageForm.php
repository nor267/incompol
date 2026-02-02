<?php

namespace App\Filament\Resources\ContentWebPages\Schemas;

use AbdulmajeedJamaan\FilamentTranslatableTabs\TranslatableTabs;
use App\Models\ContentWebPage;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Repeater\TableColumn;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Toggle;

class ContentWebPageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()
                    ->schema([
                        Section::make('Definições')
                            ->schema([
                                Grid::make()->schema(
                                    [
                                        Toggle::make('visible')
                                            ->label('Visível Português')
                                            ->onColor('success')
                                            ->offColor('danger')
                                            ->onIcon('heroicon-m-check')
                                            ->offIcon('heroicon-m-x-mark')
                                            ->helperText('Página em português visível ou escondida')
                                            ->default(true),

                                        Toggle::make('visible_en')
                                            ->label('Visível Inglês')
                                            ->onColor('success')
                                            ->offColor('danger')
                                            ->onIcon('heroicon-m-check')
                                            ->offIcon('heroicon-m-x-mark')
                                            ->helperText('Página em inglês visível ou escondida')
                                            ->default(true),
                                    ]
                                )

                            ]),
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('name_menu')
                                    ->required()
                                    ->label('Nome da página no menu')
                                    ->maxLength(100)
                                    ->hint('Máximo 100 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('name')
                                    ->required()
                                    ->label('Nome')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ]),
                                RichEditor::make('slogan')
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('description')
                                    ->label('Conteúdo')
                                    ->required()
                                    ->columnSpanFull(),
                            ])->visible(fn($get) => $get('id') !== 1),

                        FileUpload::make('banner_video')
                            ->label('Banner Video')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 25MB')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(25600)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 25MB.',
                            ])
                            ->previewable()
                            ->columnSpanFull()
                            ->visible(fn($get) => $get('id') === 1), //home

                        FileUpload::make('banner_video_mobile')
                            ->label('Banner Video Mobile')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 25mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(25600)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 25MB.',
                            ])
                            ->previewable()
                            ->columnSpanFull()
                            ->visible(fn($get) => $get('id') === 1), //home

                        FileUpload::make('second_image')
                            ->label('Banner Imagem')
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
                            ->visible(function ($get) {
                                //expertise
                                return $get('id') === 3 || $get('id') === 5 || $get('id') === 7;
                            }),
                    ])
                    ->columns(1)
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2]),

                /** HOME */
                Section::make('Expertise')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_1_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_1_slogan')
                                    ->required()
                                    ->maxLength(50)
                                    ->label('Slogan')
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),

                                RichEditor::make('section_2_title')
                                    ->required()
                                    ->label('Título 1')
                                    ->maxLength(100)
                                    ->hint('Máximo 100 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_2_text')
                                    ->required()
                                    ->label('Texto 1')
                                    ->toolbarButtons([]),
                            ]),
                        FileUpload::make('section_2_media')
                            ->label('Video 1')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable(),
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_3_title')
                                    ->required()
                                    ->label('Título 2')
                                    ->maxLength(100)
                                    ->hint('Máximo 100 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_3_text')
                                    ->required()
                                    ->label('Texto 2')
                                    ->toolbarButtons([]),
                            ]),
                        FileUpload::make('section_3_media')
                            ->label('Video 2')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable(),
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_4_title')
                                    ->required()
                                    ->label('Título 3')
                                    ->maxLength(100)
                                    ->hint('Máximo 100 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_4_slogan')
                                    ->required()
                                    ->label('Texto 3')
                                    ->toolbarButtons([]),

                            ]),
                        FileUpload::make('section_4_media')
                            ->label('Video 3')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable(),

                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 1),

                Section::make('Banner')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_5_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(100)
                                    ->hint('Máximo 100 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_5_slogan')
                                    ->required()
                                    ->maxLength(50)
                                    ->label('Slogan')
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                            ])->columnSpanFull(),
                        FileUpload::make('section_5_media')
                            ->label('Banner Imagem')
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
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 1),
                Section::make('Company Overview')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_6_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_6_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                            ])
                            ->columnSpanFull(),

                        Repeater::make('overviewIcons')
                            ->relationship('overviewIcons')
                            ->schema([
                                FileUpload::make('icon')
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
                                    ->previewable(),
                                TranslatableTabs::make()
                                    ->schema([
                                        RichEditor::make('first_title')
                                            ->label('Título')
                                            ->columnSpanFull()
                                            ->toolbarButtons([
                                                ['italic', 'underline'],
                                                ['undo', 'redo'],
                                            ]),
                                        MarkdownEditor::make('second_title')
                                            ->label('Segundo título')
                                            ->columnSpanFull()
                                            ->toolbarButtons([]),
                                        RichEditor::make('text')
                                            ->label('Texto')
                                            ->columnSpanFull()
                                            ->toolbarButtons([
                                                ['italic', 'underline'],
                                                ['undo', 'redo'],
                                            ]),
                                    ]),
                            ])
                            ->collapsible()
                            ->addable(true)
                            ->deletable(false)
                            ->label('Setores')
                            ->columnSpanFull()
                            ->reorderableWithButtons()
                            ->orderColumn('order')
                            ->grid(2),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 1),

                Section::make('Segundo Banner')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_7_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_7_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),

                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 1),
                Section::make('Shape the Future')
                    ->schema([
                        FileUpload::make('section_8_media')
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
                            ->columnSpanFull()
                            ->previewable(),
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_8_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_8_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_8_text')
                                    ->required()
                                    ->label('Botão')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),

                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 1),
                /*** SECTIONS ABOUT US */
                Section::make('Company Overview')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_1_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_1_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                            ])
                            ->visible(fn($get) => $get('id') !== 1)
                            ->columnSpanFull(),
                        Grid::make()
                            ->schema([
                                FileUpload::make('banner_video')
                                    ->label('Banner Video')
                                    ->disk('public')
                                    ->directory('uploads/videos')
                                    ->downloadable()
                                    ->openable()
                                    ->rules(['mimetypes:video/mp4'])
                                    ->hint('Máximo de 15mb')
                                    ->acceptedFileTypes(['video/mp4'])
                                    ->helperText('Apenas vídeos MP4 são permitidos.')
                                    ->maxSize(15360)
                                    ->validationMessages([
                                        'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                        'max' => 'O vídeo não pode exceder 15mb.',
                                    ])
                                    ->previewable(),

                                FileUpload::make('second_image')
                                    ->label('Banner Imagem')
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
                                    ->previewable(),
                            ])->columnSpanFull(),
                        Repeater::make('overviewIcons')
                            ->relationship('overviewIcons')
                            ->schema([
                                TranslatableTabs::make()
                                    ->schema([
                                        RichEditor::make('first_title')
                                            ->label('Título')
                                            ->columnSpanFull()
                                            ->toolbarButtons([
                                                ['italic', 'underline'],
                                                ['undo', 'redo'],
                                            ]),

                                        MarkdownEditor::make('second_title')
                                            ->label('Segundo título')
                                            ->columnSpanFull()
                                            ->toolbarButtons([]),

                                        RichEditor::make('text')
                                            ->required()
                                            ->label('Texto')
                                            ->maxLength(100)
                                            ->hint('Máximo 100 caracteres')
                                            ->toolbarButtons([]),
                                    ]),
                            ])
                            ->collapsible()
                            ->addable(false)
                            ->deletable(false)
                            ->label('Icons')
                            ->columnSpanFull()
                            ->reorderableWithButtons()
                            ->orderColumn('order')
                            ->grid(2),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 2),

                Section::make('History')
                    ->schema([
                        FileUpload::make('section_2_media')
                            ->label('Banner Imagem')
                            ->disk('public')
                            ->directory('uploads/images')
                            ->required()
                            ->downloadable()
                            ->image()
                            ->openable()
                            ->maxSize(2048) // 1 MB
                            ->acceptedFileTypes(['image/jpeg', 'image/webp'])
                            ->helperText('Máximo de 2MB por imagem. Apenas JPG ou WEBP são permitidos.')
                            ->validationMessages([
                                'mimes' => 'A imagem deve ser do tipo JPG ou WEBP.',
                                'max' => 'A imagem não pode exceder 2MB.',
                            ])
                            ->previewable()
                            ->columnSpanFull(),
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_2_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_2_slogan')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                            ])
                            ->visible(fn($get) => $get('id') !== 1)
                            ->columnSpanFull(),

                        Repeater::make('História')
                            ->relationship('overviewHistory')

                            ->table([
                                TableColumn::make('Ano'),
                                TableColumn::make('Descrição'),
                            ])
                            ->schema([
                                TextInput::make('year')
                                    ->required(),
                                MarkdownEditor::make('text')
                                    ->required()
                                    ->toolbarButtons(['bold', 'italic'])
                                    ->translatableTabs(),
                            ])

                            ->columnSpanFull()
                            ->orderColumn('order')
                            ->collapsible()
                            ->addable(false)
                            ->deletable(false),


                    ])
                    ->columns(2)
                    ->collapsed(true)
                    ->collapsible()
                    ->visible(fn($get) => $get('id') === 2)
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2]),

                Section::make('Certificações')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_3_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_3_slogan')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                            ])
                            ->visible(fn($get) => $get('id') !== 1)
                            ->columnSpanFull(),

                        Repeater::make('Certificações')
                            ->relationship('certifications')
                            ->schema([
                                FileUpload::make('icon')
                                    ->label('Icon ')
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
                                TextInput::make('title')
                                    ->required()
                                    ->translatableTabs(),
                                RichEditor::make('description')
                                    ->translatableTabs(),
                            ])

                            ->columnSpanFull()
                            ->addable(false)
                            ->deletable(false)
                            ->orderColumn('order')
                            ->collapsible(),


                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->visible(fn($get) => $get('id') === 2)
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2]),

                Section::make('Portefólio')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_4_title')
                                    ->required()
                                    ->label('Título')
                                    ->toolbarButtons(['italic'])
                                    ->columnSpanFull(),
                                RichEditor::make('section_4_slogan')
                                    ->toolbarButtons(['bold', 'italic'])
                                    ->required()
                                    ->label('Slogan')
                                    ->columnSpanFull(),
                                RichEditor::make('section_4_text')
                                    ->toolbarButtons([])
                                    ->required()
                                    ->label('Botão')
                                    ->columnSpanFull()
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->visible(fn($get) => $get('id') === 2)
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2]),
                Section::make('Shape the Future')
                    ->schema([
                        FileUpload::make('section_5_media')
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
                            ->columnSpanFull()
                            ->previewable(),
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_5_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_5_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_5_text')
                                    ->required()
                                    ->label('Botão')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),

                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 2),


                /*** SECTIONS EXPERTISE */
                Section::make('Tecnologias')
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_1_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_1_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_1_text')
                                    ->required()
                                    ->label('Texto')
                                    ->toolbarButtons([]),
                            ])
                            ->columnSpanFull(),
                        Repeater::make('overviewIcons')
                            ->relationship('overviewIcons')
                            ->schema([
                                FileUpload::make('icon')
                                    ->label('Video')
                                    ->disk('public')
                                    ->directory('uploads/videos')
                                    ->downloadable()
                                    ->openable()
                                    ->rules(['mimetypes:video/mp4'])
                                    ->hint('Máximo de 25Mb')
                                    ->acceptedFileTypes(['video/mp4'])
                                    ->helperText('Apenas vídeos MP4 são permitidos.')
                                    ->maxSize(25600)
                                    ->validationMessages([
                                        'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                        'max' => 'O vídeo não pode exceder 25Mb.',
                                    ])
                                    ->previewable()
                                    ->columnSpanFull(),
                                TranslatableTabs::make()
                                    ->schema([
                                        RichEditor::make('first_title')
                                            ->label('Título')
                                            ->columnSpanFull()
                                            ->maxLength(50)
                                            ->toolbarButtons([
                                                ['italic', 'underline'],
                                                ['undo', 'redo'],
                                            ]),

                                        RichEditor::make('text')
                                            ->label('Texto')
                                            ->columnSpanFull()
                                            ->hint('Máximo 100 caracteres')
                                            ->toolbarButtons([
                                                ['italic', 'underline', 'bold'],
                                                ['undo', 'redo'],
                                            ]),
                                    ]),


                            ])
                            ->collapsible()
                            ->addable(false)
                            ->deletable(false)
                            ->label('Icons')
                            ->columnSpanFull()
                            ->reorderableWithButtons()
                            ->orderColumn('order')
                            ->grid(2),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 3),

                Section::make('Equipamento')
                    ->schema([
                        FileUpload::make('section_2_media_1')
                            ->label('Video 1')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable()
                            ->columnSpanFull(),

                        FileUpload::make('section_2_media')
                            ->label('Video ')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable()
                            ->columnSpanFull(),
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_2_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_2_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_2_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull(),
                            ])
                            ->columnSpanFull(),
                        Repeater::make('equipments')
                            ->relationship('equipments')
                            ->schema([
                                TranslatableTabs::make()
                                    ->schema([
                                        TextInput::make('title')
                                            ->label('Título')
                                            ->required()
                                            ->maxLength(50),
                                        RichEditor::make('description')
                                            ->label('Descrição')
                                            ->columnSpanFull()
                                            ->required()
                                            ->toolbarButtons([
                                                ['italic', 'underline', 'bold'],
                                                ['undo', 'redo'],
                                            ]),
                                    ]),


                            ])
                            ->collapsible()
                            ->addable(false)
                            ->deletable(false)
                            ->label('Equipamentos')
                            ->columnSpanFull()
                            ->reorderableWithButtons()
                            ->orderColumn('order')
                            ->grid(2),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 3),


                Section::make('Engenharia expertise')
                    ->schema([
                        FileUpload::make('section_3_media')
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
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('section_3_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres')
                                    ->toolbarButtons([]),
                                RichEditor::make('section_3_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_3_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull(),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 3),

                Section::make('Crafting')
                    ->schema([
                        FileUpload::make('section_4_media')
                            ->label('Video')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable()
                            ->columnSpanFull(),
                        FileUpload::make('section_4_media_1')
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
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_4_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_4_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_4_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull(),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 3),

                Section::make('Certificações')
                    ->schema([
                        Grid::make()->schema([
                            FileUpload::make('section_5_media')
                                ->label('Video')
                                ->disk('public')
                                ->directory('uploads/videos')
                                ->downloadable()
                                ->openable()
                                ->rules(['mimetypes:video/mp4'])
                                ->hint('Máximo de 15mb')
                                ->acceptedFileTypes(['video/mp4'])
                                ->helperText('Apenas vídeos MP4 são permitidos.')
                                ->maxSize(15360)
                                ->validationMessages([
                                    'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                    'max' => 'O vídeo não pode exceder 15mb.',
                                ])
                                ->previewable(),

                            FileUpload::make('section_5_media_1')
                                ->label('Video 2')
                                ->disk('public')
                                ->directory('uploads/videos')
                                ->downloadable()
                                ->openable()
                                ->rules(['mimetypes:video/mp4'])
                                ->hint('Máximo de 15mb')
                                ->acceptedFileTypes(['video/mp4'])
                                ->helperText('Apenas vídeos MP4 são permitidos.')
                                ->maxSize(15360)
                                ->validationMessages([
                                    'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                    'max' => 'O vídeo não pode exceder 15mb.',
                                ])
                                ->previewable(),
                        ])->columnSpanFull(),


                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_5_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_5_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_5_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull(),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 3),

                Section::make('Laboratório')
                    ->schema([
                        Grid::make()->schema([
                            FileUpload::make('section_6_media')
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
                                ->previewable(),

                            FileUpload::make('section_6_media_1')
                                ->label('Video 2')
                                ->disk('public')
                                ->directory('uploads/videos')
                                ->downloadable()
                                ->openable()
                                ->rules(['mimetypes:video/mp4'])
                                ->hint('Máximo de 15mb')
                                ->acceptedFileTypes(['video/mp4'])
                                ->helperText('Apenas vídeos MP4 são permitidos.')
                                ->maxSize(15360)
                                ->validationMessages([
                                    'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                    'max' => 'O vídeo não pode exceder 15mb.',
                                ])
                                ->previewable(),
                        ])->columnSpanFull(),


                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_6_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_6_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_6_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull(),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 3),

                /*** PORTEFOLIO ***/
                Section::make('Produtos')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_2_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_2_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 4),

                Section::make('Clientes')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_3_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_3_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_3_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline', 'bold'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 4),

                Section::make('Parceiros')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_4_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_4_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                            ])
                            ->columnSpanFull(),
                        Repeater::make('overviewIcons')
                            ->relationship('overviewIcons')
                            ->schema([
                                FileUpload::make('icon')
                                    ->label('Banner Imagem')
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
                                    ->previewable(),
                            ])
                            ->collapsible()
                            ->addable(false)
                            ->deletable(false)
                            ->label('Parceiros')
                            ->columnSpanFull()
                            ->reorderableWithButtons()
                            ->orderColumn('order')
                            ->grid(2),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 4),
                Section::make('Mapa')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_5_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_5_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                            ])
                            ->columnSpanFull(),
                        FileUpload::make('section_5_media')
                            ->label('Mapa Video')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/webm'])
                            ->hint('Máximo de 1mb')
                            ->acceptedFileTypes(['video/webm'])
                            ->helperText('Apenas vídeos Webm são permitidos.')
                            ->maxSize(1024)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo Webm.',
                                'max' => 'O vídeo não pode exceder 1mb.',
                            ])
                            ->previewable()
                            ->columnSpanFull(), //home 
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 4),

                /**PEOPLE */
                Section::make('Recursos Humanos')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_1_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_1_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_2_title')
                                    ->required()
                                    ->label('Número de empregados')
                                    ->columnSpanFull()
                                    ->toolbarButtons([]),

                                RichEditor::make('section_2_slogan')
                                    ->required()
                                    ->label('Texto')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_3_title')
                                    ->required()
                                    ->label('Número de engenheiros')
                                    ->columnSpanFull()
                                    ->toolbarButtons([]),

                                RichEditor::make('section_3_slogan')
                                    ->required()
                                    ->label('Texto')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_4_title')
                                    ->required()
                                    ->label('Número de técnicos')
                                    ->columnSpanFull()
                                    ->toolbarButtons([]),

                                RichEditor::make('section_4_slogan')
                                    ->required()
                                    ->label('Texto')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 5),

                Section::make('Contratação')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_5_title')
                                    ->required()
                                    ->label('Título')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_6_title')
                                    ->required()
                                    ->label('Segundo título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_6_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_6_text')
                                    ->required()
                                    ->label('Texto da imagem')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                            ])
                            ->columnSpanFull(),
                        FileUpload::make('section_6_media')
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
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 5),
                Section::make('Código de conduta')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_7_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                                RichEditor::make('section_7_title')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(50)
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_7_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline', 'bold'],
                                        ['undo', 'redo'],
                                    ]),



                            ])
                            ->columnSpanFull(),
                        FileUpload::make('section_7_media')
                            ->label('Pdf')
                            ->disk('public')
                            ->directory('uploads/pdf')
                            ->required()
                            ->downloadable()
                            ->openable()
                            ->acceptedFileTypes(['application/pdf'])
                            ->validationMessages([
                                'mimes' => 'Só aceitos ficheiros do tipo pdf',
                            ])
                            ->previewable()
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 5),


                /** SUSTENTABILIDADE */
                Section::make('Banner')
                    ->schema([
                        FileUpload::make('second_image')
                            ->label('Banner Imagem')
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
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_1_title')
                                    ->required()
                                    ->label('Título da imagem')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 6),

                Section::make('Sustentabilidade')
                    ->schema([
                        FileUpload::make('second_image')
                            ->label('Banner Imagem')
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
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_2_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_2_title')
                                    ->required()
                                    ->label('Título')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_2_text')
                                    ->required()
                                    ->label('Título')
                                    ->columnSpanFull()
                            ])
                            ->columnSpanFull(),

                        FileUpload::make('section_2_media')
                            ->label('Video')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable()
                            ->columnSpanFull(),

                        FileUpload::make('section_2_media_1')
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
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 6),

                Section::make('Metas')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_3_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_3_title')
                                    ->required()
                                    ->label('Título')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),
                            ])
                            ->columnSpanFull(),

                        Repeater::make('overviewIcons')
                            ->relationship('overviewIcons')
                            ->schema([
                                FileUpload::make('icon')
                                    ->label('Banner Imagem')
                                    ->disk('public')
                                    ->directory('uploads/images')
                                    ->required()
                                    ->downloadable()
                                    ->image()
                                    ->openable()
                                    ->maxSize(1024) // 1 MB
                                    ->acceptedFileTypes(['image/svg+xml'])
                                    ->helperText('Máximo de 1MB por imagem. Apenas SVG são permitidos.')
                                    ->validationMessages([
                                        'mimes' => 'A imagem deve ser do tipo SVG.',
                                        'max' => 'A imagem não pode exceder 1MB.',
                                    ])
                                    ->previewable(),
                                TranslatableTabs::make()
                                    ->schema([
                                        RichEditor::make('first_title')
                                            ->label('Título')
                                            ->required()
                                            ->columnSpanFull()
                                            ->toolbarButtons([]),

                                        RichEditor::make('text')
                                            ->required()
                                            ->label('Texto')
                                            ->maxLength(250)
                                            ->hint('Máximo 250 caracteres')
                                            ->toolbarButtons(['bold']),
                                    ]),
                            ])
                            ->collapsible()
                            ->addable(false)
                            ->deletable(false)
                            ->label('Metas')
                            ->columnSpanFull()
                            ->reorderableWithButtons()
                            ->orderColumn('order')
                            ->grid(2),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 6),

                Section::make('Certificação')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_4_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_4_title')
                                    ->required()
                                    ->label('Título')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_4_text')
                                    ->required()
                                    ->label('Texto')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline', 'bold'],
                                        ['undo', 'redo'],
                                    ]),
                            ])
                            ->columnSpanFull(),
                        FileUpload::make('section_4_media')
                            ->label('Video')
                            ->disk('public')
                            ->directory('uploads/videos')
                            ->downloadable()
                            ->openable()
                            ->rules(['mimetypes:video/mp4'])
                            ->hint('Máximo de 15mb')
                            ->acceptedFileTypes(['video/mp4'])
                            ->helperText('Apenas vídeos MP4 são permitidos.')
                            ->maxSize(15360)
                            ->validationMessages([
                                'mimetypes' => 'O arquivo deve ser um vídeo MP4.',
                                'max' => 'O vídeo não pode exceder 15mb.',
                            ])
                            ->previewable()
                            ->columnSpanFull(),

                        FileUpload::make('section_4_media_1')
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
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 6),

                /** CONTACTS */
                Section::make('Contactos')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_1_title')
                                    ->required()
                                    ->label('Título da sede')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_1_slogan')
                                    ->required()
                                    ->label('Morada da sede')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ]),

                                RichEditor::make('section_2_title')
                                    ->required()
                                    ->label('Título Contactos')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline', 'bold'],
                                        ['undo', 'redo'],
                                    ]),
                                RichEditor::make('section_2_text')
                                    ->required()
                                    ->label('Contactos')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline', 'bold'],
                                        ['undo', 'redo'],
                                    ]),
                            ])
                            ->columnSpanFull(),

                        FileUpload::make('section_2_media')
                            ->label('Banner Imagem')
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
                        /** outra instalação */
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_3_title')
                                    ->required()
                                    ->label('Título da sede')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_3_text')
                                    ->required()
                                    ->label('Morada da sede')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ]),

                                RichEditor::make('section_4_title')
                                    ->required()
                                    ->label('Título Contactos')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline', 'bold'],
                                        ['undo', 'redo'],
                                    ]),
                                RichEditor::make('section_4_text')
                                    ->required()
                                    ->label('Contactos')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline', 'bold'],
                                        ['undo', 'redo'],
                                    ]),
                            ])
                            ->columnSpanFull(),

                        FileUpload::make('section_4_media')
                            ->label('Banner Imagem')
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
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 7),

                Section::make('Formulário')
                    ->schema([
                        TranslatableTabs::make()
                            ->schema([
                                RichEditor::make('section_5_slogan')
                                    ->required()
                                    ->label('Slogan')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_5_title')
                                    ->required()
                                    ->label('Título')
                                    ->columnSpanFull()
                                    ->maxLength(50)
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ])
                                    ->hint('Máximo 50 caracteres'),

                                RichEditor::make('section_5_text')
                                    ->required()
                                    ->label('Contactos')
                                    ->columnSpanFull()
                                    ->toolbarButtons([
                                        ['italic', 'underline'],
                                        ['undo', 'redo'],
                                    ]),

                                RichEditor::make('section_6_title')
                                    ->required()
                                    ->label('Link linkedin')
                                    ->columnSpanFull()
                                    ->toolbarButtons([]),
                            ])
                            ->columnSpanFull(),
                    ])
                    ->columns(2)
                    ->collapsible()
                    ->collapsed()
                    ->columnSpan(['lg' => fn(?ContentWebPage $record) => $record === null ? 3 : 2])
                    ->visible(fn($get) => $get('id') == 7),

            ])
            ->columns(2);
    }
}
