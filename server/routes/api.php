<?php

use App\Http\Controllers\Api\GenderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(GenderController::class)->group(function () {
    route::get('/loadGenders', 'loadGenders');
    Route::post('/storeGender', 'storedGender');
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
