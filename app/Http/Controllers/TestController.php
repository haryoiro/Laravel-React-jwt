<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function hello()
    {
        return response()->json([
            'message' => 'hello'
        ]);
    }

    public function echo(Request $request)
    {
        return response()->json([
            'message' => $request->input('message')
        ]);
    }
}
