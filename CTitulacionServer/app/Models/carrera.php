<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carrera extends Model
{
    protected $table = 'carreras';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre', 'codigo', 'tipo_carrera' , 'estado', 'id_coordinador'];
    public $timestamps = false;
}
