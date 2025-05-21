<?php

namespace App\Providers;

use App\Models\MenuItem;
use Inertia\Inertia;
use Illuminate\Support\Facades\Vite;
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
        Vite::prefetch(concurrency: 3);
        Inertia::share('menu', function () {
            // Не отправляем menu в админку
            if (str_starts_with(request()->path(), 'admin/')) {
                return null;
            }
            return MenuItem::orderBy('order')->get(['id', 'title', 'url']);
        });
    }
}
