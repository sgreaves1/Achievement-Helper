const requestPromise = require('request-promise');

let xboxUid = 'xxxx';
let auth = 'xxxx';

let url = 'https://xboxapi.com/v2/';
let getProfiles = '/profile';
let getGamercard = '/gamercard';


async function getXboxProfile() {

    let options = {
        uri: url + xboxUid + getProfiles,
            headers: {
            'X-AUTH': auth
        }
    };

    return JSON.parse(await requestPromise(options));
}

async function getXboxGamercard() {
    let options = {
        uri: url + xboxUid + getGamercard,
        headers: {
            'X-AUTH': auth
        }
    };

    return JSON.parse(await requestPromise(options))
}

module.exports = {getXboxProfile, getXboxGamercard}