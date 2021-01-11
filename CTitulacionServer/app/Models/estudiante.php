<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class estudiante extends Model
{
    protected $table = 'estudiantes';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'fecha_ingreso', 'actualizar_datos', 'nombre', 'apellido', 'correo', 'telefono', 'celular'];
    public $timestamps = false;
}
