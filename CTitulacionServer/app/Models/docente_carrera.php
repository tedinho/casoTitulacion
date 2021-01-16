<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class docente_carrera extends Model
{
    protected $table = 'docente_carreras';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'usuario_id', 'carrera_id'];
    public $timestamps = false;
    public function usuario()
    {
        return $this->belongsTo(User::class);
    }
}
