<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemaAnteproyecto extends Model
{
    protected $table = 'tema_anteproyectos';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre', 'solicitud_id', 'evidencia_id', 'estado', 'observacion'];
    public $timestamps = false;

    public function evidencia()
    {
        return $this->belongsTo(Evidencia::class);
    }

    public function solicitud()
    {
        return $this->belongsTo(solicitud::class);
    }
}
