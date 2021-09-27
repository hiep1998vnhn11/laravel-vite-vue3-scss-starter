<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
    if (config('app.env') == 'production') {
        $manifest = json_decode(file_get_contents(public_path('/manifest.json')), true);
        return view('index')->with([
            'manifest' => $manifest
        ]);
    }
    return view('index');
})->where('any', '(.*)');
