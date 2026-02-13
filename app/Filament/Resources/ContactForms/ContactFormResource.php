<?php

namespace App\Filament\Resources\ContactForms;

use App\Filament\Resources\ContactForms\Pages\CreateContactForm;
use App\Filament\Resources\ContactForms\Pages\EditContactForm;
use App\Filament\Resources\ContactForms\Pages\ListContactForms;
use App\Filament\Resources\ContactForms\Schemas\ContactFormForm;
use App\Filament\Resources\ContactForms\Tables\ContactFormsTable;
use App\Models\ContactForm;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use UnitEnum;

class ContactFormResource extends Resource
{
    protected static ?string $model = ContactForm::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Phone;

    protected static UnitEnum|string|null $navigationGroup = 'Contactos';

    protected static ?string $navigationLabel = 'Pedidos de contacto';

    public static function form(Schema $schema): Schema

    {
        return ContactFormForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ContactFormsTable::configure($table);
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
            'index' => ListContactForms::route('/'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }


    public static function getModelLabel(): string
    {
        return "Contacto";
    }

    public static function getPluralModelLabel(): string
    {
        return "Contactos";
    }
}
