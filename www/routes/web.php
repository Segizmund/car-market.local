<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Slider\SlideController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::get('/', [PageController::class, 'welcome']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
     Route::get('/', [AdminController::class, 'index'])->name('admin.dashboard');
    /*Route::resource('users', 'UserController');*/
     Route::get('users', [UserController::class, 'index'])->name('users.index');
     Route::get('users/create', [UserController::class, 'create'])->name('users.create');
     Route::post('users/store', [UserController::class, 'store'])->name('users.store');
     Route::get('users/{user}', [UserController::class, 'show'])->name('users.show');
     Route::get('users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
     Route::put('users/{user}', [UserController::class, 'update'])->name('users.update');
     Route::delete('users/{user}', [UserController::class, 'destroy'])->name('users.destroy');


    Route::get('/slides', [SlideController::class, 'index'])->name('slides.index');
    Route::get('/slides/create', [SlideController::class, 'create'])->name('slides.create');
    Route::get('/slides/{slide}/edit', [SlideController::class, 'edit'])->name('slides.edit');
    Route::post('/slides', [SlideController::class, 'store'])->name('slides.store');
    Route::delete('/slides/{slide}', [SlideController::class, 'destroy'])->name('slides.destroy');
});


require __DIR__.'/auth.php';
