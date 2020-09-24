<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')
// ->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::get('/user',function (Request $request) {
//     $users = App\User::all();
//     return response()->json(['users' => $users]);
// });
Route::get('/user', 'UserController@getAllUsers');
Route::get('/user/{user}', 'UserController@getByUserId');

Route::get('/hello', 'TestController@hello');
Route::post('/echo', 'TestController@echo');


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function () {
    Route::post('/register', 'AuthController@register');
    Route::post('/login', 'AuthController@login')->name('login');
    Route::post('/logout', 'AuthController@logout');
    Route::get('/refresh', 'AuthController@refresh');
    Route::get('/me', 'AuthController@me');
});