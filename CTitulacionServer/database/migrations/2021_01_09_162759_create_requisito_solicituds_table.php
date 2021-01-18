<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisitoSolicitudsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisito_solicituds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->boolean('cumple');
            $table->bigInteger('carrera_requisito_id')->unsigned();
            $table->foreign('carrera_requisito_id')
                ->references('id')
                ->on('carrera_requisito')
                ->onDelete('cascade');
            $table->bigInteger('solicitud_id')->unsigned();
            $table->foreign('solicitud_id')
                ->references('id')
                ->on('solicituds')
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
        Schema::dropIfExists('requisito_solicituds');
    }
}
