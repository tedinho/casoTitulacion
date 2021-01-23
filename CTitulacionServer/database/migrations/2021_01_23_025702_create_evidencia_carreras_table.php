<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvidenciaCarrerasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evidencia_carreras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->bigInteger('carrera_id')->unsigned();
            $table->foreign('carrera_id')
                ->references('id')
                ->on('carreras')
                ->onDelete('cascade');
            $table->bigInteger('evidencia_id')->unsigned();
            $table->foreign('evidencia_id')
                ->references('id')
                ->on('evidencias')
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
        Schema::dropIfExists('evidencia_carreras');
    }
}
