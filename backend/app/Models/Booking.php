<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'topic',
        'reason',
        'start_time',
    ];

    public function scopeFilter($query, Request $filters)
    {
        ray($filters)->green();
        if($filters['search'] ?? false){
            $query->where('topic', 'like', '%' . $filters['search'] . '%')
                ->orWhere('reason', 'like', '%' . $filters['search'])
                ->orWhere('start_time', 'like', '%' . $filters['search']);
        };
    }


}
