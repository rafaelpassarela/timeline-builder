<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
* @OA\OpenApi(
*     security={{"bearerAuth": {}}},
* )
*
* @OA\Info(
*   title="Timeline Builder API",
*   description="Endpoint mapping for Timeline Builder App.",
*   version="2.0",
*   @OA\Contact(
*     email="contact@mrrafael.ca"
*   )
* )
*
* @OA\ExternalDocumentation(
*     description="Timeline Builder API - External Documentation",
*     url="http://localhost/todo"
* )
*
* @OA\Server(
*     description="Server",
*     url=L5_SWAGGER_CONST_HOST
* )
*
* @OA\Components(
*     @OA\SecurityScheme(
*         securityScheme="bearerAuth",
*         type="http",
*         scheme="bearer",
*     ),
*     @OA\Attachable
* )
*
*/

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
