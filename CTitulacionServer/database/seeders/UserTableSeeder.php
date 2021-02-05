<?php

namespace Database\Seeders;

use App\Models\estudiante;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;

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
                $user->password = bcrypt("anthony1998");
                $user->name = "Anthony Casanova";
                $user->email = "asv.casanova@yavirac.edu.ec";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());
                $est = new estudiante();
                $est->id = $user->id;
                $est->fecha_ingreso = "2021-01-01";
                $est->actualizar_datos = true;
                $est->nombre = "Anthony";
                $est->apellido = "Casanova";
                $est->correo = "asv.casanova@yavirac.edu.ec";
                $est->telefono = "0998768515";
                $est->celular = "2623291";
                $est->save();

                $user = new User();
                $user->password = bcrypt("steve123");
                $user->name = "Steve Carvajal";
                $user->email = "sjz.carvajal@yavirac.edu.ec";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());
                $est = new estudiante();
                $est->id = $user->id;
                $est->fecha_ingreso = "2021-01-01";
                $est->actualizar_datos = true;
                $est->nombre = "Steve";
                $est->apellido = "Carvajal";
                $est->correo = "sjz.carvajal@yavirac.edu.ec";
                $est->telefono = "0987563214";
                $est->celular = "215264489";
                $est->save();


                $user = new User();
                $user->password = bcrypt("jacob123");
                $user->name = "Jacob Cumbal";
                $user->email = "jip.cumbal@yavirac.edu.ec";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());
                $est = new estudiante();
                $est->id = $user->id;
                $est->fecha_ingreso = "2021-01-01";
                $est->actualizar_datos = true;
                $est->nombre = "Jacob";
                $est->apellido = "Cumbal";
                $est->correo = "jip.cumbal@yavirac.edu.ec";
                $est->telefono = "0987563214";
                $est->celular = "215264489";
                $est->save();


                $user = new User();
                $user->password = bcrypt("juan123");
                $user->name = "Juan Carvajal";
                $user->email = "jdd.carvajal@yavirac.edu.ec";
                $user->save();
                $user->roles()->attach(Role::where('name', 'student')->first());
                $est = new estudiante();
                $est->id = $user->id;
                $est->fecha_ingreso = "2021-01-01";
                $est->actualizar_datos = true;
                $est->nombre = "Juan";
                $est->apellido = "Carvajal";
                $est->correo = "jdd.carvajal@yavirac.edu.ec";
                $est->telefono = "0987563214";
                $est->celular = "215264489";
                $est->save();

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
        }
}
