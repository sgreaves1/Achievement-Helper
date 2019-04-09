const express = require('express');
const router = express.Router();
const HttpStatus = require('literal-http-status');
const xboxAPI = require('../API/xboxAPI');

router.get('/profile', async function (request, response) {
   response.status(HttpStatus['OK']).json(await xboxAPI.getXboxProfile());
});

router.get('/gamercard', async function (request, response) {
    response.status(HttpStatus['OK']).json(await xboxAPI.getXboxGamercard());
});

router.get('/presence', async function (request, response) {
    response.status(HttpStatus['OK']).json(await xboxAPI.getXboxPresence());
});

module.exports = router;