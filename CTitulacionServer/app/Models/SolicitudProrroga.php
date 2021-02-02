<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolicitudProrroga extends Model
{

    public $timestamps = false;
    protected $table = 'solicitud_prorrogas';
    protected $primaryKey = 'id';
    
    protected $fillable = [
        'fecha',
        'proyecto_titulacions_id',
        'evidencia_id',
        'duracion',
        'motivo',
        'observacion',
        'estado',
        'intentos',
        'motivo_desaprobado'
    ];

 
}
