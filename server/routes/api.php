<?php

use App\Http\Controllers\Api\GenderController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(GenderController::class)->group(function () {
    route::get('/loadGenders', 'loadGenders');
    route::get('/getGender/{genderId}', 'getGender');
    Route::post('/storeGender', 'storedGender');
    Route::put('/updateGender/{gender}', 'updateGender');
    Route::put('/destroyGender/{gender}', 'destroyGender');
});

Route::controller(UserController::class)->group(function () {
    Route::post('/storeUser', 'storeUser');
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
