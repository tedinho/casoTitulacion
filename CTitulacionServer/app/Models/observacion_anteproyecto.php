<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class observacion_anteproyecto extends Model
{
    protected $table = 'observacion_anteproyectos';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'estado', 'tema', 'user_id'];
    public $timestamps = false;
}
