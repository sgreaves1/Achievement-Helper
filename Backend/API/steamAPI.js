const requestPromise = require('request-promise');

let key = 'xxxx';
let steamId = 'xxxx';

let url = 'http://api.steampowered.com/';
let getprofiles = 'ISteamUser/GetPlayerSummaries/v0002/?key='+key+'&steamids='+steamId;


async function getSteamProfile() {
    let requestURL = url + getprofiles;
    let playerSummary = await requestPromise(requestURL);

    let profiles = JSON.parse(playerSummary)['response']['players'];

    if (profiles.length > 0)
        return profiles[0];
    else
        return null;
}

module.exports = {getSteamProfile};