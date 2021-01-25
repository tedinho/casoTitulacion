<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FechaConfiguracione extends Model
{
    use HasFactory;

    protected $fillable = [
        'aceptacionInforme', 'fecha', 'user_id'
    ];
}
