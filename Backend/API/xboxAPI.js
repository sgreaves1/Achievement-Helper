const requestPromise = require('request-promise');

let xboxUid = 'xxxx';

let url = 'https://xboxapi.com/v2/';
let getProfiles = '/profile'


async function getXboxProfile() {

    let options = {
        uri: url + xboxUid + getProfiles,
            headers: {
            'X-AUTH': 'xxxx'
        }
    };

    return JSON.parse(await requestPromise(options));
}

module.exports = {getXboxProfile}