const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

const swaggerAutogen = require('swagger-autogen');
const endpointsFiles = ['./index.js']


app.use(
  '/api-docs',
  swaggerUi.serve,  
  swaggerUi.setup(swaggerDocument),
  swaggerAutogen(swaggerDocument, endpointsFiles)
);

 app.get("/soma", function (req, res, next) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b); 
    soma = a + b;
    console.log(soma)
    res.send(soma.toString());
});

/**
 * @api {get} /users Get Users
 * @apiName GetUsers
 * @apiGroup Users
 *
 *
 * @apiSuccess (200) {string} users
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "users"
 *     }
 *
 * @apiError (500) Error Internal-Server-Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 */

app.get("/subtracao", function (req, res, next) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b); 
    subtracao = a - b;
    console.log(subtracao)
    res.send(subtracao.toString());
});

app.get("/multiplicacao", function (req, res, next) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b); 
    multiplicacao = a * b;
    console.log(multiplicacao)
    res.send(multiplicacao.toString());
});

app.get("/divisao", function (req, res, next) {
    // #swagger.description = 'Divisao.'
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b); 
    divisao = a / b;
    console.log(divisao)
    res.send(divisao.toString());
});
  

app.listen(3000, () => {
  console.log("server listening on port 3000");
});