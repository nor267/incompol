<?php

namespace App\Filament\Resources\Portefolios;

use App\Filament\Resources\Portefolios\Pages\CreatePortefolio;
use App\Filament\Resources\Portefolios\Pages\EditPortefolio;
use App\Filament\Resources\Portefolios\Pages\ListPortefolios;
use App\Filament\Resources\Portefolios\RelationManagers\CategoryRelationManager;
use App\Filament\Resources\Portefolios\RelationManagers\ImagesRelationManager;
use App\Filament\Resources\Portefolios\Schemas\PortefolioForm;
use App\Filament\Resources\Portefolios\Tables\PortefoliosTable;
use App\Models\Portefolio;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;


class PortefolioResource extends Resource
{
    protected static ?string $model = Portefolio::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Wallet;

    protected static UnitEnum|string|null $navigationGroup = 'Edição de páginas';

    public static function form(Schema $schema): Schema
    {
        return PortefolioForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PortefoliosTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [CategoryRelationManager::class];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPortefolios::route('/'),
            'create' => CreatePortefolio::route('/create'),
            'edit' => EditPortefolio::route('/{record}/edit'),
        ];
    }

    public static function getModelLabel(): string
    {
        return "Portefólio";
    }

    public static function getPluralModelLabel(): string
    {
        return "Portefólios";
    }
}
