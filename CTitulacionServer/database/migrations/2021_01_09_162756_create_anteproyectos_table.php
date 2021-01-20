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
            $table->string('observacion');
            $table->bigInteger('id_solicitud')->unsigned();
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
