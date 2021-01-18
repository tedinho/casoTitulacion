<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class solicitud extends Model
{
    protected $table = 'solicituds';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'fecha_creacion', 'estado', 'fecha_envio', 'estudiante_carrera_id'];
    public $timestamps = false;
}
