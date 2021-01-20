<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class estudiante_carrera extends Model
{
    protected $table = 'estudiante_carreras';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'carrera_id', 'estudiante_id', 'modalidad', 'fecha_comienzo', 'fecha_final'];
    public $timestamps = false;

    public function carrera()
    {
        return $this->belongsTo(carrera::class);
    }

    public function estudiante()
    {
        return $this->belongsTo(estudiante::class);
    }

    public function solicitudes()
    {
        return $this->hasMany(solicitud::class);
    }
}
