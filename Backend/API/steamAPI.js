const requestPromise = require('request-promise');
const nconf = require('nconf');

let key = nconf.get('STEAM_KEY');
let steamId = 'xxxx';

let url = 'http://api.steampowered.com/';
let getProfiles = 'ISteamUser/GetPlayerSummaries/v0002/?key='+key+'&steamids='+steamId;

async function getSteamProfile() {
    let profiles = JSON.parse(await requestPromise(url + getProfiles))['response']['players'];
    return profiles[0];
}

module.exports = {getSteamProfile};