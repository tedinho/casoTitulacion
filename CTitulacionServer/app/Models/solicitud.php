<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class solicitud extends Model
{
    protected $table = 'solicituds';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'fecha_creacion', 'estado', 'fecha_envio', 'estudiante_carrera_id', 'observacion'];
    public $timestamps = false;

    public function requisitos()
    {
        return $this->hasMany(requisito_solicitud::class);
    }

    public function estudiante_carrera()
    {
        return $this->belongsTo(estudiante_carrera::class);
    }
}
