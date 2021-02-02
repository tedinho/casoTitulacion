<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarrerasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carreras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->string('tipo_carrera');
            $table->string('opcion_graduacion');
            $table->string('codigo');
            $table->string('estado');
            $table->bigInteger('id_coordinador')->nullable(true)->unsigned();
            $table->bigInteger('id_usuario_junta')->nullable(true)->unsigned();
            $table->foreign('id_usuario_junta')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->bigInteger('id_usuario_titulacion')->nullable(true)->unsigned();
            $table->foreign('id_usuario_titulacion')
                ->references('id')
                ->on('users')
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
        Schema::dropIfExists('carreras');
    }
}
