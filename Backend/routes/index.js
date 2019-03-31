const express = require('express');
const router = express.Router();
const nconf = require('nconf');
const HttpStatus = require('literal-http-status');
const { name, version } = require('../package.json');

router.get('/', function (req, res) {
    res.status(HttpStatus['OK']).json({
    });
});

router.get('/liveness', function (request, response) {
    response.status(HttpStatus['OK']).send({we: 'are doing it live'});
});

router.get('/readiness', function (request, response) {
    response.status(HttpStatus['OK']).json();
});

router.get('/version', function (request, response) {
    response.status(HttpStatus['OK']).send({title: name, version : version});
});

module.exports = router;