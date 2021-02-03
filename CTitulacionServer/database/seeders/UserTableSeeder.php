<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {

                $user = new User();
                $user->password = bcrypt("12345678");
                $user->name = "Administrador";
                $user->email = "admin@yavirac.edu.ec";
                $user->save();
                $user->roles()->attach(Role::where('name', 'admin')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 1";
                $user->email = "a1@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 2";
                $user->email = "a2@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 3";
                $user->email = "a3@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 4";
                $user->email = "a4@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 5";
                $user->email = "a5@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 6";
                $user->email = "a6@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 7";
                $user->email = "a7@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 8";
                $user->email = "a8@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());


                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 9";
                $user->email = "a9@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 10";
                $user->email = "a10@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 11";
                $user->email = "a11@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 12";
                $user->email = "a12@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 13";
                $user->email = "a13@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 14";
                $user->email = "a41@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Alumno Numero 15";
                $user->email = "a15@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());

                /* CREACION DE USUARIOS CON ROL DE REVISOR*/

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Revisor Numero 1";
                $user->email = "r1@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'revisor')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Revisor Numero 2";
                $user->email = "r2@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'revisor')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Revisor Numero 3";
                $user->email = "r3@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'revisor')->first());
                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Revisor Numero 4";
                $user->email = "r4@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'revisor')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Revisor Numero 5";
                $user->email = "r5@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'revisor')->first());

                $user = new User();
                $user->password = bcrypt("123");
                $user->name = "Revisor Numero 5";
                $user->email = "admin@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'admin')->first());

                $user = new User();
                $user->password = bcrypt("12345678");
                $user->name = "Director Numero 1";
                $user->email = "d1@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'teacher')->first());

                $user = new User();
                $user->password = bcrypt("12345678");
                $user->name = "Director Numero 2";
                $user->email = "d2@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'teacher')->first());

                $user = new User();
                $user->password = bcrypt("12345678");
                $user->name = "Director Numero 3";
                $user->email = "d3@mail.com";
                $user->save();
                $user->roles()->attach(Role::where('name', 'teacher')->first());
        }
}
