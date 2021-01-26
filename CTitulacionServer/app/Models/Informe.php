<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Informe extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo', 'cuerpo', 'observacion', 'user_id', 'revisor_email'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
