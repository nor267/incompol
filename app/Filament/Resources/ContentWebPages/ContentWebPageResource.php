<?php

namespace App\Filament\Resources\ContentWebPages;

use App\Filament\Resources\ContentWebPages\Pages\CreateContentWebPage;
use App\Filament\Resources\ContentWebPages\Pages\EditContentWebPage;
use App\Filament\Resources\ContentWebPages\Pages\ListContentWebPages;
use App\Filament\Resources\ContentWebPages\Schemas\ContentWebPageForm;
use App\Filament\Resources\ContentWebPages\Tables\ContentWebPagesTable;
use App\Models\ContentWebPage;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class ContentWebPageResource extends Resource
{
    protected static ?string $model = ContentWebPage::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Bookmark;

    protected static ?string $recordTitleAttribute = 'páginas';

    protected static ?string $navigationLabel = 'Páginas';

    protected static UnitEnum|string|null $navigationGroup = 'Edição de páginas';

    public static function form(Schema $schema): Schema
    {
        return ContentWebPageForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ContentWebPagesTable::configure($table);
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
            'index' => ListContentWebPages::route('/'),
            'create' => CreateContentWebPage::route('/create'),
            'edit' => EditContentWebPage::route('/{record}/edit'),
        ];
    }

    public static function getModelLabel(): string
    {
        return "Página";
    }

    public static function getPluralModelLabel(): string
    {
        return "Páginas";
    }
}
