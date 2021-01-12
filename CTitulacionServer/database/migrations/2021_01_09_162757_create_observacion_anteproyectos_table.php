<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObservacionAnteproyectosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('observacion_anteproyectos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('observacion');
            $table->date('fecha');
            $table->bigInteger('id_anteproyecto')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('observacion_anteproyectos');
    }
}
