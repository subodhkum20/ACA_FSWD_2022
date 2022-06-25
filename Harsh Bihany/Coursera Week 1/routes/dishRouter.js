//USING EXPRESS ROUTER
//this file handles the REST API endpoints for dishes/ and dishes/dishId

const express = require('express');
const bodyParser = require('body-parser');

//declaration of a Express router
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

//which takes the endpoint as the parameter
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next(); //this allows the modified object into the subsequent methods called
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes!');
    });

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST not supported on /dishes/:dishId');
    })
    .put((req, res, next) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting dish: ' + req.params.dishId);
    });

//to export this file to other JS file
module.exports = dishRouter;