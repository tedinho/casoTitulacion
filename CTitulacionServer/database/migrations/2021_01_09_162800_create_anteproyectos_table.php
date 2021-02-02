<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnteproyectosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anteproyectos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('estado');
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->string('observacion')->nullable(true);
            $table->bigInteger('tema_ante_proyecto_id')->unsigned();
            $table->foreign('tema_ante_proyecto_id')
                ->references('id')
                ->on('tema_anteproyectos')
                ->onDelete('cascade');
            $table->bigInteger('evidencia_id')->unsigned()->nullable(true);
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
        Schema::dropIfExists('anteproyectos');
    }
}
