<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {
        $users = User::latest()->paginate(10);
        return Inertia::render('Admin/Users/AllUsers', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('Admin/Users/createUser');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['required'],
            'role' => ['required']
        ]);

       $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'role' => $validatedData['role'],
        ]);

         $user->remember_token = Str::random(60);
         $user->save();

        return redirect()->route('users.index')->with('message', 'Пользователь создан');
    }

    public function show(User $user)
    {
        return Inertia::render('admin.users.show', compact('user'));
    }

    public function edit(User $user)
    {
        return Inertia::render('Admin/Users/editUser', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $validatedData = $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['nullable'],
             'role' => ['required'],
        ]);
        if (array_key_exists('password', $validatedData)) {
            if ($validatedData['password'] !== '') {
                $validatedData['password'] = Hash::make($validatedData['password']);
            }
        }

        $user->update($validatedData);

        return redirect()->route('users.index')->with('message', 'Пользователь обновлен');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index')->with('message', 'Пользователь удален');
    }
}
