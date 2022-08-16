<?php

use App\Http\Controllers\BookingsController;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:api'])->post('/booking/create', [BookingsController::class, 'store'])->name('bookings.api');

Route::middleware(['auth:api'])->get('/bookings', function (Request $request){
    return Booking::latest()->filter($request)->get();
})->name('bookings.api');

Route::middleware(['auth:api'])->get('/bookings/{id}', function ($id){
    return Booking::find($id);
})->name('bookings.api');


