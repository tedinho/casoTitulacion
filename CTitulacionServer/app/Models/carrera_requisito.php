<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carrera_requisito extends Model
{
    protected $table = 'carrera_requisitos';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre', 'descripccion', 'numero_horas', 'carrera_id'];
    public $timestamps = false;
}
