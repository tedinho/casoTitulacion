<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;


class AuthController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $input = $request->json()->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $user->roles()->attach(Role::where('name', 'admin')->first());
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return $this->sendResponse($success, 'Usuario creado exitosamente.');
    }

    public function registrarDocente(Request $request)
    {
        $input = $request->json()->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $user->roles()->attach(Role::where('name', 'teacher')->first());
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return $user;
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            $success['name'] =  $user->name;
            $success['id'] =  $user->id;
            $success['rol'] = Auth::user()->roles->first()->description;
            $success['email'] =  $user->email;
            return $this->sendResponse($success, 'User login successfully.');
        } else {
            return $this->sendError('No autorizado.', ['error' => 'Error o contraseña incorrectas']);
        }
    }
}
