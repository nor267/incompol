<?php

namespace App\Filament\Resources\Settings;

use App\Filament\Resources\Settings\Pages\CreateSettings;
use App\Filament\Resources\Settings\Pages\EditSettings;
use App\Filament\Resources\Settings\Pages\ListSettings;
use App\Filament\Resources\Settings\Schemas\SettingsForm;
use App\Filament\Resources\Settings\Tables\SettingsTable;
use App\Models\Settings;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class SettingsResource extends Resource
{
    protected static ?string $model = Settings::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Cog6Tooth;

    protected static UnitEnum|string|null $navigationGroup = 'Definições';

    protected static ?string $recordTitleAttribute = 'Definições';

    protected static ?string $navigationLabel = 'Definições';

    public static function form(Schema $schema): Schema
    {
        return SettingsForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SettingsTable::configure($table);
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
            'index' => ListSettings::route('/'),
        ];
    }
    public static function getModelLabel(): string
    {
        return "Definição";
    }

    public static function getPluralModelLabel(): string
    {
        return "Definições";
    }
}
