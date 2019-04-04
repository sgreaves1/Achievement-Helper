const express = require('express');
const router = express.Router();
const nconf = require('nconf');
const HttpStatus = require('literal-http-status');
const steamAPI = require('../data/steamAPI');
const rp = require('request-promise');

let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=xxxx&steamids=xxxx';

router.get('/profile', async function (request, response) {

    let playerSummary = await rp(url);

    let profiles = JSON.parse(playerSummary)['response']['players'];

    if (profiles.length > 0)
        response.status(HttpStatus['OK']).send(profiles[0]);
    else
        response.status(HttpStatus['Internal Server Error']).send(error);
});





module.exports = router;