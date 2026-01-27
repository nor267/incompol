<?php

namespace App\Providers;

use AbdulmajeedJamaan\FilamentTranslatableTabs\TranslatableTabs;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        TranslatableTabs::configureUsing(function (TranslatableTabs $component) {
            $component
                ->localesLabels([
                    'pt' => __('locales.pt'),
                    'en' => __('locales.en'),
                ])
                ->addDirectionByLocale()
                ->addEmptyBadgeWhenAllFieldsAreEmpty(emptyLabel: __('locales.empty'))
                ->addSetActiveTabThatHasValue()
                ->locales(['pt', 'en']);
        });
    }
}
