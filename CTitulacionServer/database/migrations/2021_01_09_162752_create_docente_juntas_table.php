<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocenteJuntasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('docente_juntas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('junta_academica_id')->unsigned();
            $table->foreign('junta_academica_id')
                ->references('id')
                ->on('junta_academicas')
                ->onDelete('cascade');
            $table->bigInteger('docente_carrera_id')->unsigned();
            $table->foreign('docente_carrera_id')
                    ->references('id')
                    ->on('docente_carreras')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('docente_juntas');
    }
}
