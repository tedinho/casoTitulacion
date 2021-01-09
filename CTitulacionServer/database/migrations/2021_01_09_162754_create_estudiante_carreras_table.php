<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstudianteCarrerasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estudiante_carreras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('estudiante_id')->unsigned();
            $table->foreign('estudiante_id')
                ->references('id')
                ->on('estudiantes')
                ->onDelete('cascade');
            $table->bigInteger('carrera_id')->unsigned();
            $table->foreign('carrera_id')
                    ->references('id')
                    ->on('carreras')
                    ->onDelete('cascade');
            $table->date('fecha_comienzo');
            $table->date('fecha_final');
            $table->string('modalidad');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estudiante_carreras');
    }
}
