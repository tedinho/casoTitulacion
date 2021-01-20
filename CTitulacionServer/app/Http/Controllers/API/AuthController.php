<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
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
        $pass = $input['password'];
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $user->roles()->attach(Role::where('name', 'teacher')->first());
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;

        $to_name = $input['name'];
        $to_email = $input['email'];

        $data = array('nombre' => $input['name'], "correo" => $input['email'], 'pass' => $pass);

        Mail::send('mailDocenteUsuario', $data, function ($message) use ($to_name, $to_email, $input) {
            $message->to($to_email, $to_name)->subject('Datos de Cuenta');
            $message->from('jajajanova97@gmail.com', 'Anthony Casanova');
        });
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
