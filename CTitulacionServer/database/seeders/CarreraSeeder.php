<?php

namespace Database\Seeders;

use App\Models\carrera;
use Illuminate\Database\Seeder;

class CarreraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $carrera = new carrera();
        $carrera->nombre = "Desarrollo de Software";
        $carrera->codigo = "DS";
        $carrera->tipo_carrera = "Tecnológico Superior";
        $carrera->estado = "A";
        $carrera->opcion_graduacion = "Complexivo y Proyecto de Titulación";
        $carrera->id_coordinador = 1;
        $carrera->save();

        $carrera = new carrera();
        $carrera->nombre = "Marketing";
        $carrera->codigo = "MK";
        $carrera->tipo_carrera = "Tecnológico Superior";
        $carrera->estado = "A";
        $carrera->opcion_graduacion = "Proyecto de Titulación";
        $carrera->id_coordinador = 1;
        $carrera->save();
    }
}
