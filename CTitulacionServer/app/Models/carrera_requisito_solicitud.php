<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carrera_requisito_solicitud extends Model
{
    protected $table = 'carrera_requisito_solicituds';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'cumple', 'requisito_id', 'solicitud_id', 'evidencia_id'];
    public $timestamps = false;

    public function requisito()
    {
        return $this->belongsTo(carrera_requisito::class);
    }

    public function evidencia()
    {
        return $this->belongsTo(Evidencia::class);
    }
}
