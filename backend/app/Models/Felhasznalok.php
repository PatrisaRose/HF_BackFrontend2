<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Felhasznalok extends Model
{
    use HasFactory;

    public $primaryKey='felh_id';

    protected $fillable = [
        'nev',
        'email',
        'szul_hely',
        'szul_ev'
    ];
}
