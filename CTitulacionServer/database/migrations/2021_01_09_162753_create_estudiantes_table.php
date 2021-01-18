<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstudiantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estudiantes', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_ingreso'); // fecha de ingreso al proceso
            $table->boolean('actualizar_datos');
            $table->string('nombre')->nullable(true);
            $table->string('apellido')->nullable(true);
            $table->string('correo')->nullable(true);
            $table->string('telefono')->nullable(true);
            $table->string('celular')->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estudiantes');
    }
}
