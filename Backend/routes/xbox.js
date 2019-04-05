const express = require('express');
const router = express.Router();
const HttpStatus = require('literal-http-status');
const xboxAPI = require('../API/xboxAPI');

router.get('/profile', async function (request, response) {
   response.status(HttpStatus['OK']).json(await xboxAPI.getXboxProfile());
});

module.exports = router;