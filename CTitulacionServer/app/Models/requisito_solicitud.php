<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class requisito_solicitud extends Model
{
    protected $table = 'requisito_solicituds';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'cumple', 'carrera_requisito_id', 'solicitud_id', 'evidencia_id'];
    public $timestamps = false;

    public function carreraRequisito()
    {
        return $this->belongsTo(carrera_requisito::class);
    }

    public function solicitud()
    {
        return $this->belongsTo(solicitud::class);
    }

    public function evidencia()
    {
        return $this->belongsTo(evidencia::class);
    }
}
