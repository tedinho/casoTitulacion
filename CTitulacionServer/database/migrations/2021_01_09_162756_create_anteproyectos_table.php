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
            // $table->bigInteger('id_solicitud')->unsigned();
            $table->unsignedBigInteger('user_id');

            $table->foreign('user_id')
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
        Schema::dropIfExists('anteproyectos');
    }
}
