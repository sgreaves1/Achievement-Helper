const express = require('express');
const router = express.Router();
const HttpStatus = require('literal-http-status');
const steamAPI = require('../API/steamAPI');

router.get('/profile', async function (request, response) {
    response.status(HttpStatus['OK']).json(await steamAPI.getSteamProfile());
});

module.exports = router;