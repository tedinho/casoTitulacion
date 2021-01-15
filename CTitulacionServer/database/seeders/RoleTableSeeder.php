<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role();
        $role->name = 'admin';
        $role->description = 'Administrator';
        $role->save();
        
        $role = new Role();
        $role->name = 'student';
        $role->description = 'Estudiante';
        $role->save();
        
        $role = new Role();
        $role->name = 'revisor';
        $role->description = 'Revisor';
        $role->save();

        $role = new Role();
        $role->name = 'tutor';
        $role->description = 'Tutor';
        $role->save();

        //Si se requiere mas roles se colocan aqui
    }
}
