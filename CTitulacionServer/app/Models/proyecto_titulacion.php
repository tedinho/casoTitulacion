<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class proyecto_titulacion extends Model
{
    use HasFactory;
    protected $table = 'proyecto_titulacions';
    protected $primaryKey = 'id';
    protected $fillable = [ 'id', 'fecha', 'asunto'];
    public $timestamps = false;
}
