<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class evidencia_carrera extends Model
{
    protected $table = 'evidencia_carreras';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre', 'carrera_id', 'evidencia_id'];
    public $timestamps = false;

    public function evidencia()
    {
        return $this->belongsTo(Evidencia::class);
    }
}
