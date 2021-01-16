<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class periodo_lectivo extends Model
{
    protected $table = 'periodo_lectivos';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre', 'fecha_inicio', 'fecha_fin', 'carrera_id'];
    public $timestamps = false;
}
