<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSolicitudsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicituds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('fecha_creacion');
            $table->string('estado');
            $table->date('fecha_envio')->nullable(true);
            $table->bigInteger('estudiante_carrera_id')->unsigned();
            $table->foreign('estudiante_carrera_id')
                ->references('id')
                ->on('estudiante_carreras')
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
        Schema::dropIfExists('solicituds');
    }
}
