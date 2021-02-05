<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDirectorTitulacionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('director_titulacions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('proyecto_titulacions_id')->unsigned();
            $table->foreign('proyecto_titulacions_id')
                ->references('id')
                ->on('proyecto_titulacions')
                ->onDelete('cascade');
            $table->bigInteger('docente_carreras_id')->unsigned();
            $table->foreign('docente_carreras_id')
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
        Schema::dropIfExists('director_titulacions');
    }
}
