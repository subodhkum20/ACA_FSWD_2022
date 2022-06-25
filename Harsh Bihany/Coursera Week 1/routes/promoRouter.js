const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the details of all promos!');
    })
    .post((req, res, next) => {
        res.end('Will add into the directory the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promos');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promos\' details');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send the details of the promo: ' + req.params.promoId + 'to you!');
    })
    .post((req, res, next) => {
        res.end('POST not supported on /promos/:promoId');
    })
    .put((req, res, next) => {
        res.write('Updating the promo: ' + req.params.promoId + '\n');
        res.end('Will update the promo: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting the promo\'s details: ' + req.params.promoId);
    });

module.exports = promoRouter;

