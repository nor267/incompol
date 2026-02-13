<?php

namespace App\Filament\Resources\Portefolios\RelationManagers;

use AbdulmajeedJamaan\FilamentTranslatableTabs\TranslatableTabs;
use App\Models\PortefolioSubCategory;
use Filament\Actions\AssociateAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\DissociateAction;
use Filament\Actions\DissociateBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class CategoryRelationManager extends RelationManager
{
    protected static string $relationship = 'category';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()
                    ->schema([
                        TranslatableTabs::make('anyLabel')
                            ->schema([
                                RichEditor::make('name')
                                    ->required()
                                    ->label('Título')
                                    ->maxLength(100)
                                    ->hint('Máximo 100 caracteres')
                                    ->toolbarButtons([]),

                                RichEditor::make('second_text')
                                    ->required()
                                    ->label('Segundo Título')
                                    ->toolbarButtons([]),

                                RichEditor::make('text')
                                    ->required()
                                    ->label('Texto'),
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
                    ->columnSpan(['lg' => fn(?PortefolioSubCategory $record) => $record === null ? 3 : 2]),

                Section::make('Imagens')
                    ->schema([
                        Repeater::make('images')
                            ->relationship('images')
                            ->schema([
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

                                RichEditor::make('text')
                                    ->required()
                                    ->label('Texto')
                                    ->toolbarButtons([])
                                    ->translatableTabs(),

                            ])
                            ->collapsible()
                            ->addable(true)
                            ->deletable(true)
                            ->label('Galeria de Imagens')
                            ->columnSpanFull()
                            ->reorderableWithButtons()
                            ->orderColumn('order')

                    ])->columnSpanFull()
                    ->columns(1)
                    ->columnSpan(['lg' => fn(?PortefolioSubCategory $record) => $record === null ? 3 : 2]),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('category')
            ->columns([
                ImageColumn::make('image')
                    ->disk('public')
                    ->label('Imagem'),
                TextColumn::make('name_backoffice')
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->headerActions([

                CreateAction::make(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([]);
    }

    public static function getModelLabel(): string
    {
        return "Sub Categoria";
    }

    public static function getPluralModelLabel(): string
    {
        return "Sub Categorias";
    }
}
