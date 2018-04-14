/**
 * Common Error
 * @apiDefine CommonError
 * @apiErrorExample Error:
 * HTTP/1.1 200 Ok
{
    "statusMessage": "error",
    "statusCode": 500,
    "data": null
}
 */

/**
 * Unauthorize Error
 * @apiDefine UnauthorizeError
 * @apiErrorExample Unauthorize:
 * HTTP/1.1 200 Ok
{
    "statusMessage": "unauthorize",
    "statusCode": 400,
    "data": null
}
 */