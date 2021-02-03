<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProyectoTitulacionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proyecto_titulacions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->date('fecha_prorroga');
            $table->bigInteger('anteproyecto_id')->unsigned();
            $table->foreign('anteproyecto_id')
                ->references('id')
                ->on('anteproyectos')
                ->onDelete('cascade');
            $table->bigInteger('evidencia_id')->unsigned()->nullable(true);
            $table->foreign('evidencia_id')
                ->references('id')
                ->on('evidencias')
                ->onDelete('cascade');
            $table->string('estado_aceptacion');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proyecto_titulacions');
    }
}
