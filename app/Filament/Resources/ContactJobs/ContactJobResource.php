<?php

namespace App\Filament\Resources\ContactJobs;

use App\Filament\Resources\ContactJobs\Pages\CreateContactJob;
use App\Filament\Resources\ContactJobs\Pages\EditContactJob;
use App\Filament\Resources\ContactJobs\Pages\ListContactJobs;
use App\Filament\Resources\ContactJobs\Schemas\ContactJobForm;
use App\Filament\Resources\ContactJobs\Tables\ContactJobsTable;
use App\Models\ContactJob;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class ContactJobResource extends Resource
{
    protected static ?string $model = ContactJob::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::FolderOpen;

    protected static UnitEnum|string|null $navigationGroup = 'Contactos';

    protected static ?string $navigationLabel = 'Candidaturas';

    public static function form(Schema $schema): Schema
    {
        return ContactJobForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ContactJobsTable::configure($table);
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
            'index' => ListContactJobs::route('/'),
            'edit' => EditContactJob::route('/{record}/edit'),
        ];
    }

    public static function getModelLabel(): string
    {
        return "Candidatura";
    }

    public static function getPluralModelLabel(): string
    {
        return "Candidaturas";
    }
}
