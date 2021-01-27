<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRevisoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('revisores', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('revisor_id');

            $table->timestamps();

            $table->foreign('student_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
                
            $table->foreign('revisor_id')
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
        Schema::dropIfExists('revisores');
    }
}
