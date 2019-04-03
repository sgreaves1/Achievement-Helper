const express = require('express');
const router = express.Router();
const nconf = require('nconf');
const HttpStatus = require('literal-http-status');
const { name, version } = require('../package.json');

router.get('/profile', function (request, result) {
    result.status(HttpStatus['OK']).send({personaname: 'Sam'});
});

module.exports = router;