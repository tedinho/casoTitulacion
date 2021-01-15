<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evidencia extends Model
{
    use HasFactory;

    protected $fillable = [
        'ruta_archivo', 'tipo_archivo', 'nota_archivo', 'user_id', 'nombre_archivo'
    ];
}
