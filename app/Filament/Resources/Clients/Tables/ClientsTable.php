<?php

namespace App\Filament\Resources\Clients\Tables;

use App\Models\Client;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class ClientsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nome'),
                TextColumn::make('email')
                    ->label('Email'),
                TextColumn::make('phone')
                    ->label('Contacto'),
                TextColumn::make('email_verified_at')
                    ->dateTime()
                    ->label('Email verificado em'),
                TextColumn::make('created_at')
                    ->date()
                    ->label('Criado em'),
                ToggleColumn::make('active')
                    ->label('Conta Ativa')
                    ->onColor('success')
                    ->offColor('danger')
                    ->onIcon('heroicon-m-check')
                    ->offIcon('heroicon-m-x-mark')
                    ->default(true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                ActionGroup::make([
                    Action::make('Reenviar email verificação')
                        ->action(function (Client $user): void {
                            if (! $user->hasVerifiedEmail()) {
                                $user->sendEmailVerificationNotification();
                            }
                        }),
                    Action::make('Enviar email mudar password')
                        ->action(function (Client $user): void {
                            $user->sendEmailResetPassword();
                        }),
                ]),


            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
