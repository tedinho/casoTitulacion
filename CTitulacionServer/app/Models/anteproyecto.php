<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class anteproyecto extends Model
{
    protected $table = 'anteproyectos';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'estado', 'fecha_inicio', 'fecha_fin', 'observacion', 'tema_anteproyecto_id', 'evidencia_id', 'revisor_id'];
    public $timestamps = false;

    public function evidencia()
    {
        return $this->belongsTo(Evidencia::class);
    }

    public function temaAnteproyecto()
    {
        return $this->belongsTo(TemaAnteproyecto::class);
    }
}
