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
            $table->date('fecha');
            $table->integer('duracion');
            $table->string('motivo');
            $table->string('observacion');
            
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
