<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

/**
* @OA\Get(
*    tags={"Test"},
*    path="/api/test",
*    description="Returns a simple Ok message for API Connectivity test.",
*    @OA\Response(
*       response=200,
*       description="API Communication Ok, You're ready to go",
*         @OA\JsonContent(
*            type="object",
*              @OA\Property(
*                 property="code",
*                 type="number",
*                 description="Result Code"
*              ),
*              @OA\Property(
*                 property="message",
*                 type="string",
*                 description="Result message"
*              )
*         )
*    ),
*    @OA\Response(response="404", description="Não encontrado")
* )
*/

class RedirectController extends BaseController
{
    public function index(Request $request){
        return view('redirect');
    }
}
