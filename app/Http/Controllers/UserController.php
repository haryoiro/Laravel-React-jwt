<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAllUsers() {
        $users = User::all();
        return response()->json(['users' => $users]);
    }

    public function getByUserId (User $user) {
        return response()->json(['user' => $user]);
    }
}
