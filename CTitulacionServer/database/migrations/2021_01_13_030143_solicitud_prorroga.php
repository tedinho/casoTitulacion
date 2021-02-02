<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SolicitudProrroga extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicitud_prorrogas', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->bigInteger('proyecto_titulacions_id')->unsigned()->nullable(true);
            $table->foreign('proyecto_titulacions_id')
                ->references('id')
                ->on('proyecto_titulacions')
                ->onDelete('cascade');
            $table->bigInteger('evidencia_id')->unsigned()->nullable(true);
            $table->foreign('evidencia_id')
                ->references('id')
                ->on('evidencias')
                ->onDelete('cascade');
            $table->date('fecha');
            $table->integer('duracion');
            $table->string('motivo');
            $table->string('observacion');
            $table->boolean('estado');
            $table->integer('intentos');
            $table->string('motivo_desaprobado')->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('solicitudes_prorrogas');
    }
}
