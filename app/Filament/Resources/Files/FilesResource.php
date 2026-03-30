<?php

namespace App\Filament\Resources\Files;

use App\Filament\Resources\Files\Pages\CreateFiles;
use App\Filament\Resources\Files\Pages\EditFiles;
use App\Filament\Resources\Files\Pages\ListFiles;
use App\Filament\Resources\Files\Schemas\FilesForm;
use App\Filament\Resources\Files\Tables\FilesTable;
use App\Models\Files;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class FilesResource extends Resource
{
    protected static ?string $model = Files::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::DocumentDuplicate;

    protected static UnitEnum|string|null $navigationGroup = 'Área de parceiros';


    public static function form(Schema $schema): Schema
    {
        return FilesForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return FilesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListFiles::route('/'),
            'create' => CreateFiles::route('/create'),
            'edit' => EditFiles::route('/{record}/edit'),
        ];
    }

    public static function getModelLabel(): string
    {
        return "Ficheiro";
    }

    public static function getPluralModelLabel(): string
    {
        return "Ficheiros";
    }
}
