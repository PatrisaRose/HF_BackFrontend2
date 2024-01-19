<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalok;
use Illuminate\Http\Request;

class FelhasznalokController extends Controller
{
    public function index(){
        $felhasznaloks = response()->json(Felhasznalok::all());
        return $felhasznaloks;
    }

    public function show($id){
        $felhasznalok = response()->json(Felhasznalok::find($id));
        return $felhasznalok;
    }

    public function store(Request $request){
        $felhasznalok = new Felhasznalok();
        $felhasznalok->nev = $request->nev;
        $felhasznalok->email = $request->email;
        $felhasznalok->szul_hely = $request->szul_hely;
        $felhasznalok->szul_ev = $request -> szul_ev;
        $felhasznalok->save();
    }

    public function update(Request $request, $id){
        $felhasznalok = Felhasznalok::find($id);
        $felhasznalok->nev = $request->nev;
        $felhasznalok->email = $request->email;
        $felhasznalok->szul_hely = $request->szul_hely;
        $felhasznalok->szul_ev = $request -> szul_ev;
        $felhasznalok->save();
    }

    public function destroy($id){
        Felhasznalok::find($id)->delete();
    }
}

