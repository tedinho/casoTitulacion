<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directore extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'director_id',
    ];
}
