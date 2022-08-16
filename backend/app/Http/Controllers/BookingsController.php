<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingsController extends Controller
{
    //
    public function store(Request $request){

        $request->validate([
            'topic' => 'required|string',
            'reason' => 'required|string',
            'start_time' => 'required|date',
        ]);

        return Booking::create([
            'topic' => $request->topic,
            'reason' => $request->reason,
            'start_time' => $request->start_time,
        ]);

    }
}
