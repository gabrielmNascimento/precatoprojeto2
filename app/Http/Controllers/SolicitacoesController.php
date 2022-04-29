<?php

namespace App\Http\Controllers;

use App\Models\Solicitacoes;
use App\Http\Requests\StoreSolicitacoesRequest;
use App\Http\Requests\UpdateSolicitacoesRequest;

class SolicitacoesController extends Controller
{

    public function dashboard()
    {
        return Solicitacoes::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSolicitacoesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSolicitacoesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Solicitacoes  $solicitacoes
     * @return \Illuminate\Http\Response
     */
    public function show(Solicitacoes $solicitacoes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Solicitacoes  $solicitacoes
     * @return \Illuminate\Http\Response
     */
    public function edit(Solicitacoes $solicitacoes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSolicitacoesRequest  $request
     * @param  \App\Models\Solicitacoes  $solicitacoes
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSolicitacoesRequest $request, Solicitacoes $solicitacoes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Solicitacoes  $solicitacoes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Solicitacoes $solicitacoes)
    {
        //
    }
}
