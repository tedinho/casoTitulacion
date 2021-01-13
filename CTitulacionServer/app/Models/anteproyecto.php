<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class anteproyecto extends Model
{
    protected $table = 'anteproyectos';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'estado', 'fecha_inicio', 'fecha_fin', 'id_solicitud'];
    public $timestamps = false;
}
