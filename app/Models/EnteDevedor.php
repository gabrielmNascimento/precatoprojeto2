<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnteDevedor extends Model
{
    use HasFactory;

     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'ente_devedor';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'ente_devedor_id';
}
