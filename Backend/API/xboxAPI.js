const requestPromise = require('request-promise');

let xboxUid = 'xxxx';
let auth = 'xxxx';

let url = 'https://xboxapi.com/v2/';
let getProfiles = '/profile';
let getGamercard = '/gamercard';
let getPresence = '/presence';
let getTitleHistory = '/title-history';


// async function getXboxProfile() {
//
//     let options = {
//         uri: url + xboxUid + getProfiles,
//             headers: {
//             'X-AUTH': auth
//         }
//     };
//
//     return JSON.parse(await requestPromise(options));
// }

async function getXboxProfile() {

    return {
        "id": 2533274811841399,
        "hostId": 2533274811841399,
        "Gamertag": "Samgplay",
        "GameDisplayName": "Samgplay",
        "AppDisplayName": "Samgplay",
        "Gamerscore": 72882,
        "GameDisplayPicRaw": "http://images-eds.xboxlive.com/image?url=rwljod2fPqLqGP3DBV9F_yK9iuxAt3_MH6tcOnQXTc9IeVtfjqtpaqaCuFR7qE5hzCJKP9_3HXYmTUlm.2m390b.6g6U6CNhYDy6zR5VyLA-&background=0xababab&format=png",
        "AppDisplayPicRaw": "http://images-eds.xboxlive.com/image?url=rwljod2fPqLqGP3DBV9F_yK9iuxAt3_MH6tcOnQXTc9IeVtfjqtpaqaCuFR7qE5hzCJKP9_3HXYmTUlm.2m390b.6g6U6CNhYDy6zR5VyLA-&background=0xababab&format=png",
        "AccountTier": "Silver",
        "XboxOneRep": "GoodPlayer",
        "PreferredColor": "http://dlassets.xboxlive.com/public/content/ppl/colors/00007.json",
        "TenureLevel": 0,
        "isSponsoredUser": false
    }
}

// async function getXboxGamercard() {
//     let options = {
//         uri: url + xboxUid + getGamercard,
//         headers: {
//             'X-AUTH': auth
//         }
//     };
//
//     return JSON.parse(await requestPromise(options))
// }

async function getXboxGamercard() {
    return {
        "gamertag": "Samgplay",
        "name": "",
        "location": "",
        "bio": "",
        "gamerscore": 72892,
        "tier": "Silver",
        "motto": "",
        "avatarBodyImagePath": "http://avatar.xboxlive.com/avatar/Samgplay/avatar-body.png",
        "gamerpicSmallImagePath": "http://avatar.xboxlive.com/avatar/Samgplay/avatarpic-s.png",
        "gamerpicLargeImagePath": "http://avatar.xboxlive.com/avatar/Samgplay/avatarpic-l.png",
        "gamerpicSmallSslImagePath": "https://avatar-ssl.xboxlive.com/avatar/Samgplay/avatarpic-s.png",
        "gamerpicLargeSslImagePath": "https://avatar-ssl.xboxlive.com/avatar/Samgplay/avatarpic-l.png",
        "avatarManifest": "AAAAAAAAAAAAAAAAABAAAAMcAAPByPEJoZyy4AAIAAADLQADwcjxCaGcsuAAIAAAAzgAA8HI8QmhnLLgAACAAALqAAPByPEJoZyy4D+AAAAAAAAAAAAAAAAAAAAAACAAAqIAA8HI8QmhnLLgAAAAAAAAAAAAAAAAAAAAAAAAQAACbwADwcjxCaGcsuAAAAAAAAAAAAAAAAAAAAAAAAEAAALWAAHByPEJoZyy4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+Opdv8NDQ3/78KL/3J/Nf8NDQ3/blCk/w0NDf9mvNz/ZrzcAAAAAgAAAAHByPEJoZyy4AACAAAAAAAAAAAAAAAAAAAAAAABAAIAA8HI8QmhnLLgAAEAAAAAAAAAAAAAAAAAAAAAAAQBzgADwcjxCaGcsuAABAAAAAAAAAAAAAAAAAAAAAABAADMAAHByPEJoZyy4AEAAAAAAAAAAAAAAAAAAAAAAAAgADQAAcHI8QmhnLLgACAAAAAAAAAAAAAAAAAAAAAAEAAAAZHjzbkHeUVBCNQQAAAAAAAAAAAAAAAAAAAAAAAACABgAAHByPEJoZyy4AAIAAAAAAAAAAAAAAAAAAAAAAIAANwAAcHI8QmhnLLgAgAAAAAAAAAAAAAAAAAAAAAAABBs2gKhxJNV+VhYCDYAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAA0AAHByPEJoZyy4AAgAAAAAAAAAAAAAAAAAAAAAAAQAKkAAcHI8QmhnLLgABAAAAAAAAAAAAAAAAAAAAAAAAgAYAABwcjxCaGcsuAACAAAAAAAAAAAAAAAAAAAAAAABAHOAAPByPEJoZyy4AAEAAAAAAAAAAAAAAAAAADgAADk+spUbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
    }
}

// async function getXboxPresence() {
//     let options = {
//         uri: url + xboxUid + getPresence,
//         headers: {
//             'X-AUTH': auth
//         }
//     };
//
//     return JSON.parse(await requestPromise(options))
// }

async function getXboxPresence() {
    return {
        "xuid": 2533274811841399,
        "state": "Offline",
        "lastSeen": {
            "deviceType": "XboxOne",
            "titleId": 750323071,
            "titleName": "Home",
            "timestamp": "2019-04-07T16:35:34.7272491Z"
        }
    }
}

// async function getXboxTitleHistory() {
//     let options = {
//         uri: url + xboxUid + getTitleHistory,
//         headers: {
//             'X-AUTH': auth
//         }
//     };
//
//     return JSON.parse(await requestPromise(options))
// }

async function getXboxTitleHistory() {

    return {
        "xuid": "2533274811841399",
        "titles": [
        {
            "titleId": "219630713",
            "pfn": null,
            "bingId": "9a924f64-6ac5-4380-b249-8162269c15cc",
            "serviceConfigId": "1370999b-fca2-4c53-8ec5-73493bcb67e5",
            "windowsPhoneProductId": null,
            "name": "Halo 5: Guardians",
            "type": "Game",
            "devices": [
                "XboxOne"
            ],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3iwhfsLKcwJ5hbLyqE50RXcTqU01RfBj1oHvnGRk523Mehf2PHPktzLWSYkinOyEV0.kAk6.VkFeX9cq9tTXZMlcJ9JouNUDvMYfiGCR797MC17NDqKAzoPgRK41Rmzs1I-",
            "mediaItemType": "Application",
            "modernTitleId": "219630713",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 5,
                "totalAchievements": 0,
                "currentGamerscore": 60,
                "totalGamerscore": 1250,
                "progressPercentage": 5,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3iwhfsLKcwJ5hbLyqE50RXcTqU01RfBj1oHvnGRk523Mehf2PHPktzLWSYkinOyEV0.kAk6.VkFeX9cq9tTXZMlcJ9JouNUDvMYfiGCR797MC17NDqKAzoPgRK41Rmzs1I-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3jfDXdxbpFUgPyJXbGAaC22czzq2.0WXUhpX_4KCEDTTszh1rXTn1PWfBfGck4twIkT1jzbA3cfYvECgz5urP00fseGfsbOXvpq05SxrYJ1RuUjjQX3K_plhrX8Ot3UgB0-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3jeBCPMZZh7Ts0ypmOBU8.uxRjpv2nAyIuLZlocrmVm7syPWi4L379HznmZK3YZRAMr2WoWDsGfd3zZX6MsUq.C0Jur8akknxmLXQtMT5dSDCD57.gsBEcah.4kao6Z_VA-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3i9LupdNWYhvfw1VUErN.WXX2Y2xsGcg_xkVULesznlAWvLro4rSO5pQV8ZV0G9gZusmg5zzzJgzbiXlB36iwuP.E5OEZohAfgRr1kh0Sl4X9HLdCiLExGV6XXQya587sM-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3hi7I6kfBMD9KNChtfE78W8rg6WbzL3rAipD1kltfwenNQHY9INJKeKRYk3s19yNMn7ySuRR.s3nDnJbK3cmr1KHPYiEXLyzb0mOpWktMpJPKMcp0gyS9pxDB8b4OebnF8-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3gGJD6bp_ZL6TG8SUJaDo_uCTBnNDcWk82nmMi_yMywrEiuTJc646KPPA81qIaOyAqNSoPKQDCaKmrjRBg7TQudYsFdCADWVbziGN0oVQjsNyfu2YnRwxAwHhAaYuxeLZI-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3jZ0aWnjRb43Bln5FbKlmM6fzuFoC1cITpk7W67cdLxFBbvs.CCr0AT0SzQvLq.aUGJA1_rBgrIEwSlzoy66FopvSVp6ZmcGOKsIH6Pgjodot2B7aPFjvk8j.yXZR7kjqM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3jAdvYbuJze_P8otDS4l3QWHLaVeyW985cwneXwVw9DVyRuXzmQcUvxgFjj2sZCmYss3PDEDBCyRQMaiZ_vmNVKl4DUdVFuuDugINlrVGIzjTrMZ45q6ku.DOUst6ZLOkA-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3gDjYBAn02AdmuB4sKbFIADHmCB.6_bJ71tymRAnBYCyvdqINTJEeQrPn76t5excsnTT5NUlAIgyVHEoKCsiG3RVeMv02UGB_9ZgnSWEC4fO8ZaaspE.7kmcGWqtu80I_Q-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3isQqzBba1jwlw.eDhdYyZs6pdG.d9NibdAvrx9I803PErVPc0iyQuYL4hOSaIC7FfB7flnWoENl2WvsopTBJFF6FRY.x3A.vh9.Eq59Zn136L7gEApnoGBJX51nl4AgrY-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3irnLpWMAMTsruKn60WnYTKVf2gWyQ7pwwMySatJWCdpAVLTGeH1QJRYLaMg6Gwx4IaFgP2kYSKug_WsdaNoR_A22tDBH2gqh72i7ItJqEeXArwaU6Qa.sB95h6SQPCGss-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3gtfg9di8EYwcXfIiQfk7YJ45cpzU9pl7HF2icXBgzFutIWwdRlgVARpNdk_niOVioFhY5QtHs_Y1FtXEdiprfzqNstBnkKQmv0AGOd1OdEgMNBFelmouYUsnKeXLHeOjc-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-04-09T19:22:23.0753306Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "1144039928",
            "pfn": "Microsoft.ShadowPack_8wekyb3d8bbwe",
            "bingId": "f33009f4-14ff-4821-94e3-c3573c868c2e",
            "serviceConfigId": "77290100-225e-4768-9373-98164430a9f8",
            "windowsPhoneProductId": "a202dc6e-e97a-4861-8dd6-ad3fcbc3149d",
            "name": "Halo: The Master Chief Collection",
            "type": "Game",
            "devices": [
                "XboxOne"
            ],
            "displayImage": "http://store-images.s-microsoft.com/image/apps.2532.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.ae207961-2235-4820-aad8-f070b8cf1906",
            "mediaItemType": "Application",
            "modernTitleId": "1144039928",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 12,
                "totalAchievements": 0,
                "currentGamerscore": 85,
                "totalGamerscore": 6000,
                "progressPercentage": 1,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.50497.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.59de7947-8d2d-4fc5-85eb-82307ab6b915",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.8912.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.873f96d0-f2ac-44f7-81d6-cbaa5709b188",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.53030.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.f3c5cfb7-22f5-419a-be42-f30936c5a8b7",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.7277.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.f8c714ea-9e32-41b0-b92e-e08fd589d9ca",
                    "type": "Poster"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.28631.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.741537c8-15c2-4a0a-acae-127e5d42261b",
                    "type": "SuperHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.2532.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.ae207961-2235-4820-aad8-f070b8cf1906",
                    "type": "BoxArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.30595.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.178b6aa2-6aa2-4e5f-be70-9d87fa0fbc4a",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.4788.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.6f68e52b-b77a-4473-916e-bfaafde33be7",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.45380.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.9a794512-0799-4611-bc2c-7ea1828d180a",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.12261.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.16013ab1-09fe-4f86-9863-3edcfcbece1f",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.64341.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.c2fb5f54-0f58-4f00-bbb0-4bc78d00b1ed",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.12698.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.c1bfea92-681c-4b0b-b3d7-18aced1074a5",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.6112.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.bb86bdc2-7087-47f2-9aa2-53351d175fe0",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.13778.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.9775a5e3-d5a0-4cdc-9d4a-a10ed94b3fc4",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.61921.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.f35a4966-4451-4ee6-8626-2efa61270d54",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.25407.68546154403749555.3f166bda-e4c4-4b51-829c-ff4f7d715475.e3a5836e-9ec5-437c-9a65-e8f12f430cdf",
                    "type": "Screenshot"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-04-07T15:03:15.8555646Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "226054795",
            "pfn": null,
            "bingId": null,
            "serviceConfigId": "36af0100-de22-4f2a-9a2b-7b090d79528b",
            "windowsPhoneProductId": null,
            "name": "MONSTER HUNTER: WORLD™",
            "type": "Game",
            "devices": [],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mNhSYNMksr5dwKHIP9TPYSxWzvB9EnFIGC4ga1kMoitTXr8CAPYHQxFenfeOOllsUtTFlNvYq2K7TzWNeJ7w_76qkszp1MDDEA1mvRf0QNtLWVuTMQqn5E4ifUjEGgHPG4-",
            "mediaItemType": "Application",
            "modernTitleId": "226054795",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 4,
                "totalAchievements": 0,
                "currentGamerscore": 40,
                "totalGamerscore": 1000,
                "progressPercentage": 4,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mNhSYNMksr5dwKHIP9TPYSxWzvB9EnFIGC4ga1kMoitTXr8CAPYHQxFenfeOOllsUtTFlNvYq2K7TzWNeJ7w_76qkszp1MDDEA1mvRf0QNtLWVuTMQqn5E4ifUjEGgHPG4-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mP3DlIc3faoyd9CWMqYkVcGY4quCliNpB9mZQRhslZhcWffVKYMGyksGDTK4G_m7i6x13Uk4elg8VmbgOJee36gKCi0_pzl611OQsHxmH5z7AyXgQK1Ppa3YMp5KNm6jjo-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mNxHxZnX9qO02w35310y59GVl2BT.oKzVm5qSePBC3KCnEDdH_rAeLwUQaA2Nt3iIlyigC3Y4.KClOr2IBY77i43aRTyaCKo1RB4naqnbFJVcSQHB2rPn9slmwILZkVTUc-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPpcT_JYi1Pe3IQUqBr7TucaNKSkUxxArT397kajJY1qUFYM9GJgtZwaaMki0xNW5ZffpdPPnXSu_uFt6OFM9mMK1ECx3P9MmgxGpof2GElmWKIiE6TRk68JVl1hsWvN7Y-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mOMzmqta337fNdJxq8W83HZzpLASCoFfmsMHytyTr7sjgbYCKIPbQvdG8dfWGmcj1NlMGyfhLfzQF8a3fLdqrnDrf2tFGWplvwdn6ZTWA64qEeCWzF3F2XdyEwSxGfYMUk-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mNX8hX1NXLAlss7b_vU2kpsOple7gBOY7xUbaOUfVjo3L7xF3i.ATwDAyzCFZgbdCpyb2KtuAkXsxYUcaBWWEliNTAH77.TxFd9.26anJzCUoMvYOfEm.Vu26bUbLyqq6g-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mNzdiZA005oVFkbzAY.QTNPgn1wKCrJNil5BgqfrvlRM9uR34C0Fvxv.WL5lbEUZOY_WFDnzuP8SbpC9Qz55yxXxwX3oIisH_JzCkaA66AlbgUfQa1wlwfb3ejUvJDyXYM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPTUzER.uKcPMaqvSokCTL1qdP29Cmnmezq7C9HFdiQrJN1yA7ms4K.9d0A52b2u.anOCCoxg4GOzr7.nXTm4c5Oy763ip3etoAuGijZh5JUNi.0Al7eEndyNI60c3o9.o-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mOeideSy5FRoR1vhNI.vFpKyG8l6gS5Ydtg7fZGAqzCsSctrGZPGeHb9kHSohK34F8WldmxLgTV47_MdoWY1g1pMhSEaj1YkWrdM6onJIwgsZ.dmb7nh8uJXvrK7QuYq_U-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPJGm3aAvBWOqfAtfYhl_dM9QtJ7P0cHoE8CJuKXkDD2_RZZI6_bkHaL0vV0wG5rijGGFN4OkW2mc2Aui2Fs8lhVAUadN2cX4s7hofohSjENPf0Y0Pz2nrmQx7.Mp1wBjA-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPXSKvPrcsi2_KrsrZHSYP0Af1UBMmMS_ZSOrOMo2E0umEgt_O39Sq0aRvhatJaUp4s1ICAsYwPJIa0VdrcfTwzvyctHxqs2rUFPXkK.uNB_ozo_cRj_9N1J9Su73KfhPY-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mOTDoKHdNE8vCMlfLRWbmmz..A7xZHPW_6j3FO_MMcRp_UsvnOKytsyrUlqqJfrmG3EPMiZcuU.YUMUaKFJaq3oOu7BhSe.3CnD9L0qboqSGfhL0ZbP_OEgV1IfZ_WCqlQ-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mMJfa44WiEID96kMiYeJnXTNMN9y_ObBSGKo6HZ38IFM5083ejKMoDHOWm20_0.BJhgfDfhRkhpluU.Oe3Kzoy0k8Tdw2M5uVGzLh33S3ugIvYJhPKN4ydjiqNOvr5LwIQ-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPhMp.EX9MQjmylDQVBVZIWgCaMNtWnrUZeYA9GsjaWCkukUZV.dBYZSIfQaZQBGs_0sNbLlWsyDkqyUZYF4ff1h_JXUaITOsSekEaQeu3TbpN2IDNU4ftct2z4clxOAXM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mMH1iu6J0w9g9mNd_wwvV.4RdB_4elnmPeVSJL.VOLhG_IvcNZD3C6UDKsOS_XmJnJvoDA0YFjeAvg9WaVbIsp.hUPJ5lPpQQ.0hAYZ_z1IyYNViDvJFhEnQifYvz95i04-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPJUHEjldypS4pv.6Tc9KhoRTZuYM0jKVzVH8mbUttTCy7qIBSxlLruswIll_qRVzl3zU1iDBgxk_JtlRDKvXI1AFSEPY_lYK7I96rgHc5Xtv3PopgBMtsuMRBtWwOlwnc-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mMdChrQFfpfKh1ewwP_ihS1.l.W0wc32k_dy0r4FtfJWGaASVfbgnqvH8Vuad5L0t6V1w1X8zdotByrLQRyc5dREXNQtkMN7F33prPdXaPr0ArM52JGzWSCaqijbLhXQK8-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mNC6EI5mp1hecTnvi3NVNVtT5pKS9gCpr0tqZ7RmZvxdQNjVXADoWcdRWfQhs_6T0.MHvTW3K7KXBRJai7MBweWB3m6TNn9NV4NJ53wGS8jCbgZofxu6fTUciYkoVVZ3Hw-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPAAOtl88Sb2HeLNccx2tCwUzbypiPDlZ8e.lLz25XWB3L9KR8NPriq2N5UhqA1VRJMlmlcso7VQLcI7WDuYbsOWRm4iNK3RMUlqvRbWIWTjz6vQee9zFSh_U9DFoffg50-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPGpFcjrPxKe08xGjIkKCDpc83Ft5JY.7yKISnph82OfT0ObQB8jYkSAm_hfsoElKx_EZ7z7azruDxhN1CPXuC_VA3cJRYUT859.ZyarNJQAxDiQY5lyXRfgZd_ZPwtYro-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mN45MnDHhT1KLU4I4KBvphfodS7z1DBeBBegSSif033oej2be6zzeMhQaugXdJudwUau0.QNgLlGyzAhAni0N5V3NN6Nc.TOk1yr1GHCrR7NBX9VTK_giPimoP0jAPsn5E-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mPudwTSTCJ.iODP_uDXbE1jVN5snCkQLJ8OkoDbpwaDLFL2.4KFay1y0PvLi55bCYso4IgSIyaU_BqlGyngjp.H7fwWWrNpjpMQ0e4qKYzSFYxWuTvJWPntFw8txdWFmoA-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcU3EWF.rF02bJq3LB9LIVA_LXepm.kCPOQ4_cKJrT3mOgS5yQ6V.61vG2RNFh8r24Kw1JCN0FW1UpEmft5NwInb6BOACSn2sBoREsGXf0kChzk3_FEI.s0MMcnksretBHl1gr5S6JCiw28u6q1sENA88tzULWe3r0Jkbpao7HjLM-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-31T15:41:21.6674904Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "1667928394",
            "pfn": "Microsoft.HoganThreshold_8wekyb3d8bbwe",
            "bingId": null,
            "serviceConfigId": "e7c70100-92e8-4a04-8b33-b9f8636a914a",
            "windowsPhoneProductId": "60fa69de-fdf9-4ed2-a824-8597c4a22427",
            "name": "Halo Wars 2",
            "type": "Game",
            "devices": [
                "PC"
            ],
            "displayImage": "http://store-images.s-microsoft.com/image/apps.7936.13510798886375954.4688894c-dc6a-463c-8168-663e9c98fa5b.f4f639b4-e921-41f7-b7d7-68cbdace89c9",
            "mediaItemType": "Application",
            "modernTitleId": "1667928394",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 1,
                "totalAchievements": 0,
                "currentGamerscore": 10,
                "totalGamerscore": 1750,
                "progressPercentage": 1,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.7936.13510798886375954.4688894c-dc6a-463c-8168-663e9c98fa5b.f4f639b4-e921-41f7-b7d7-68cbdace89c9",
                    "type": "Logo"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.6988.13510798886375954.7fab3417-408f-452b-bb10-612182e7a5ee.5708d7dd-59ab-411a-b732-5de746c6ee4c",
                    "type": "BoxArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.33041.13510798886375954.2f2c326f-7be5-4e16-b060-2912c2727d0f.660cd93b-5a9b-450a-a68f-5ac5d5b5b5ac",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.18533.13510798886375954.c9fa583c-ca30-4890-83bf-82ee83af7358.32e2c7aa-f855-4b55-a822-eba67e734cec",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.25463.13510798886375954.07e17537-da95-4e91-a3df-1dedc0c43980.826f0089-fd4a-4931-a4e3-bdf7abe9d9db",
                    "type": "SuperHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.53461.13510798886375954.2bd17aeb-ccc6-4036-989d-32d2eba17cb4.5d2d8045-b64c-414b-be60-78bc5c7e85f2",
                    "type": "Poster"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.54808.13510798886375954.9e2089bd-0c01-404f-a424-7accd6f4aeff.618e8379-f489-4544-bc4f-188e755ae43a",
                    "type": "Hero"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.10666.13510798886375954.cb568a46-f0a7-437a-a184-a2826173c2e3.10036a0f-df6a-4359-9f5a-98669e4eede0",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.18861.13510798886375954.a173d772-ab17-41dd-8861-c169306f4cc6.b1284183-309d-45e5-b3f3-8286d4fc3dce",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.25376.13510798886375954.bb737ce1-6d18-4678-a248-40992219afd9.86d58ede-c5e0-4a0d-847f-dc0c05951c00",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.27251.13510798886375954.ca589b1a-f8cb-4ceb-a676-a4a2e68f8333.19ddd839-23a9-4c35-b54e-83f3dd0f771a",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.17319.13510798886375954.8c5fe08e-a116-4149-993c-b4f387f924ff.683b3eec-aa0d-4e6d-8f04-134530e99a75",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.8499.13510798886375954.ceaf2b97-9f3f-4706-bcd8-83208288fd12.8ccb756d-0a1c-49e2-9b77-b61b88db0f10",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.20930.13510798886375954.74e2e7b9-b56e-404a-9116-624e9e000ea9.43b6ef06-2d87-4623-947e-2ea69d70d1f0",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.51727.13510798886375954.b79533b7-e703-493e-aae3-5397ab9389e9.7c421b8f-9b48-462e-ab0f-f9e5cb176955",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.29582.13510798886375954.2f6fb57f-e0e5-4d8d-8161-973b19e70a18.bd81b4e1-e40f-45e8-9cc9-4db95640367d",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.50530.13510798886375954.2e04d8b1-0792-4702-a1a0-35bd935f310f.9d2c907d-e1f4-4813-b702-225be976b278",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.12339.13510798886375954.d3c9e22c-d841-442b-9539-20a9e64ec9f0.386460ac-871c-4bc9-aa2c-e75f61db3e9f",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.56207.13510798886375954.235a5f07-8604-4a01-81c1-514beae4229e.277d138f-9fae-4175-a8f3-42934d9ca32c",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.26822.13510798886375954.6f5f7758-3bf0-4a74-913c-221706331abf.f5caa890-f27a-4855-af86-9bf0d648331d",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.43051.13510798886375954.30b36962-190a-4472-9a21-720c87506f5b.e0da7770-5a37-4098-80af-2c372ebd90c1",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.47160.13510798886375954.f93a0656-4df2-49b2-8e7b-f0942d8d67bd.dd844acb-5e45-4dfd-855a-b4e885f39c3d",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.64145.13510798886375954.bab7e529-4ca4-4305-a5ec-bc35939f7558.1b6a1a16-ddeb-47d6-be54-6013d1667568",
                    "type": "Screenshot"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-31T15:12:10.3940554Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "1717071867",
            "pfn": "Ubisoft.ZombiUNext_ngz4m417e0mpw",
            "bingId": "76dabebe-8595-4899-9a30-bfe78f4a7da5",
            "serviceConfigId": "8bb90100-5964-4d0a-945e-e82366586ffb",
            "windowsPhoneProductId": "d9bf6b0c-5f50-41d9-8804-a8f0d167d83b",
            "name": "ZOMBI",
            "type": "Game",
            "devices": [
                "XboxOne"
            ],
            "displayImage": "http://store-images.s-microsoft.com/image/apps.22569.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.db2245b5-785a-4d27-893c-b6f2db9202ab",
            "mediaItemType": "Application",
            "modernTitleId": "1717071867",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 2,
                "totalAchievements": 0,
                "currentGamerscore": 20,
                "totalGamerscore": 1000,
                "progressPercentage": 2,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.39856.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.5b916eae-2596-4b19-a165-31ae5aff49c8",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.22569.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.db2245b5-785a-4d27-893c-b6f2db9202ab",
                    "type": "BoxArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.46352.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.eeaa4082-ee9a-4539-8cb9-a23cf5987176",
                    "type": "SuperHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.3917.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.786d2a56-5832-4ad6-bceb-209631d15dfc",
                    "type": "Poster"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.52271.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.b7879eb8-8fbc-4bb8-8fcc-155a6344029c",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.25166.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.608d3867-6784-468f-a08d-a225840243f1",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.36476.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.11f35f96-2fdc-4682-a272-c47b65b63037",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.52464.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.5d1a0c6a-4622-4d09-ad59-3d31c90836b4",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.40482.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.4ca18f0d-1de5-4a34-89a4-1ce9cbfa46d6",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.43893.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.6bca1e07-4334-4485-9904-f2b86a2fdd50",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.28183.68822110586088769.01809b29-a049-4674-9458-ee60f902269d.ca6a8c3c-9638-419f-9145-7bdbd3a34308",
                    "type": "Screenshot"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-23T17:30:10.0190575Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "175227487",
            "pfn": null,
            "bingId": null,
            "serviceConfigId": "00220100-c7c2-4e25-9d3f-fac70a71c25f",
            "windowsPhoneProductId": null,
            "name": "Apex Legends™",
            "type": "Game",
            "devices": [],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS69yslpJCNcUhVQ9J2b3TihKBIQmw7TycUeVOf1P21vcGG8k0xCbKgaTD6JJurx.oJhNNs5f5m4Va8dwfG2T6.yLUS2J5blRax.ZIeb.38c.5jWIYXYYunrEA9Er.HL_i28-",
            "mediaItemType": "Application",
            "modernTitleId": "175227487",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 2,
                "totalAchievements": 0,
                "currentGamerscore": 150,
                "totalGamerscore": 1000,
                "progressPercentage": 15,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS69yslpJCNcUhVQ9J2b3TihKBIQmw7TycUeVOf1P21vcGG8k0xCbKgaTD6JJurx.oJhNNs5f5m4Va8dwfG2T6.yLUS2J5blRax.ZIeb.38c.5jWIYXYYunrEA9Er.HL_i28-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6.zfegN8Dd_lHwXSBPXR0i8zwEPhNPQji7UJ.ulmD50p2emHbcCpgOUy37INocHMgYMLaN_gzODtWOtMNXqpXyEyX5AlTd2zZfxEtq9Qz8oI2nE3wkxxkyUWwgyfkunCKE-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS687XnEB.xY7brAwluj5WCIdVTArTIWShMaKuumcHD2KPYuydn4ljT2OQnk1qAbmx_jDi1.6bGOICZNbNx_3Q0rIu.8HI79FrWRzzfdv2kFEc3kpK2ypjAoVsqHQrixQYqU-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6.Yz3I.LeoRuXa3guXUwpSG4Z8wRJgp.4bFWANZVn4vQPJ7zP_tqsWyE4GPIuzk2.2CiKtRxN5W1yid8hv8m24mXTdQMI8QAIkfNMaWekhix8xIuAkBx2kBcaTXTiBq5WI-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS69Qfgsbki0WCoaNGnO_AiNKWn.ghwBy0YV5NnuzdXZnk.1n8KsLK3Q8DWuXF77Y0YLXn_fH_RgHFASytBda9qnMtseSbflaevtay8Xh2ezn1gxn7qF795ISkILveQJj7fI-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6_EUHKu4F950_p_0U8.wLeIJ6aHtcBElMPbvYV_XXcQBY3zBPymBkX8QHBI0z95dU.OkI1CSzN1aJSvJL8ovAKX8vwpepwjsLEQbUbz9Ly8sV_U4f_y97KdExx2ubm3Z8I-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6_Ny0W61WoUylklIkC_RwBS_14dI46uhRf89Uj4gXUjzB2glUGcyg9MmV2avhgJtJ_a_CYtf21nzjGA5b.Bi58NroHoIQxMa2VlrCdl79elsjjXhG6U6D0eAzEruCNlYJU-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6_Vn68jk3skBGP4_2TmTyoGLZa3t7d0ebIzL1usACkxSQ1E.Ea6RCN2hOg832E5pcYU37BgqwarpcjT_S1Ypn0nAzPRyYwJe5QnNinLTG0W5a0TRvDpjXX1zehSYn3MzSI-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS69hOWJ53841IC5lMt.gOkC86UXvd50ybhVi6bGecRRLBJq9s4x1NbpysbDxpmTTtpWJfPrNxwH1Tk9e4Khbqqf2CW18fD3k80_TQpeJ_CSSqKftyBd41BnGGyyqQTrIhAQ-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS68yEm0cfW3wsQbKQqrRDD7qgV8TYiuzxogk0x6L9oryQWoqiEKIcbSEADmhOUE_YfhcoLkZBoDbZLwtn7_0Tpr5BdLMbY9DHQLDoGVPBLxQ00flL25uLNr3eC1hUJ.Y6Ug-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6.QLQm469YWwa1fU3V93iXBkVO4iL8EKykoEstmihpxtyLcEjZKna1EGGq79hwy_ObmO6NjfMN3ASpEwpqgt6bV0pv8kK3SZNeETLoW9oijWMRX89ODxL6i.73XFPdOTXQ-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6.WRDVYbgE8AKH2JAzxOvKrxredo8N4epGNVmVHf3mB33m1BYh2NtkLXqVfueaJReTGqwuuccIKpL3tTn5Giaj96VpUfiRoRBLByHWvG9l7sdUxzG5j9NgLSlnB4TK_ZSU-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS68G8FEwqbpJ9sQGwiOOS_7rSqaMYb3TJOO2zRBFkUC3GQHxZZ.v4Pnq5f_gQqabHuM8wwgDuMU325yc_XLKTh1PqWbDQEWITsOdUT2Kg3ijNNtNs2P4kBsa_yCnaS8RCN0-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6_.jjRu7cFtYXBRaVZfoEpPicLIK8gGo2qQWlr.xNU1xX1alAtO0kzehChMZA5gqAnI05hJrFwnNjVq8S9K2Z3CW9H5d9dHbIbRLyusHVuasH5aaEPhVrFArmtwsakVM5Q-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS6.RRGGStDiBiZnjxso6GOmgV95cRL3tnGGe6cipzMRtBB2DRAec86r7_ZV1nwgmySpikeHCEnsBPZ6mKM4lB86cpeiP9vhLmBZ5H6CQnc4u3UFEzwbOwrWzCQV543pbksk-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcNTZ_6mJP6QbYJIteVBU9bLL.gcL85Ir7WobxhcXdS693c8CJaZ8Cdyt09pQXWl2uPHd2AoiNeNggMxQXKno5lkN23iNxsY8FGPxbNrC9WWmNKrPpESZ_y9_sWIqAl0O5R1ZUQurSgHbeN3ynhPv3bkka.NDTjAiGckPoVBLIJXo-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-23T17:29:35.3933502Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "346683864",
            "pfn": null,
            "bingId": "a279b8cf-9baf-4278-89d3-66adeda328a5",
            "serviceConfigId": "7e510100-2b7a-4ca2-b775-46ff14a9f9d8",
            "windowsPhoneProductId": null,
            "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition",
            "type": "Game",
            "devices": [
                "XboxOne"
            ],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvWq3jwKYeL9Rj7Tp1MUsxT4o7wUe.2PqtaQjLVwybE7VKT_Kd6daqiGl9Bn91RVcT75LztdzP_8EGt5CQiBWkW7Y2n4S.D.dmlk1olquR06SKD6x6U1zXKcfjQ1yqIo20-",
            "mediaItemType": "Application",
            "modernTitleId": "346683864",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 0,
                "totalAchievements": 0,
                "currentGamerscore": 0,
                "totalGamerscore": 1500,
                "progressPercentage": 0,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvWq3jwKYeL9Rj7Tp1MUsxT4o7wUe.2PqtaQjLVwybE7VKT_Kd6daqiGl9Bn91RVcT75LztdzP_8EGt5CQiBWkW7Y2n4S.D.dmlk1olquR06SKD6x6U1zXKcfjQ1yqIo20-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuaWjiXDFcFoUbxwSdefAeluyKqkNowi1anxh7cY5phjjBrna0_IzBKa4GEbu4ueLMuHIx_ZaCIoB6jbwe6ud2H0QISMfSi1ZncnFHoM9wokigHM0zZ6.InKS3Ib9La6Rc-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFsE86Ee7bwaAfXkKsoj53Z2PraOuyGR41o4lSZuja_qIOjqT65VzJKBbFXjce5HHuV47rAFMvFkoHJ9gDRcCQ9W7NQdc9BZLpABnqPs9bFUVASuOvYdcZ_sDWAWgHnQGZQ-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuGa5yaxXTXjvtnfyF0KHme1zsiz.fDaVEhnIhF6lk.Zx5sazVOTyldwAJie5XorW9I_q5TrnGF4iSrO_bWOcu7KDYzIdhUqpZW4dxuELRW5cjBVkjvyDnNJZZPsfminmc-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuUDNaxn37W0d45R_kf4vPtNdPerm13X1uQcbDzp.5IOqRyOxd3uRRxZAUSrAG6ts5rWs31rpZHNU8NptKVzSzTQYAoo3PnuFkZNl4RKzcWRNMZ0IoL22xNeNpuBMyNgu4-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvBi7VGJVA0uWRQPb6TqRRO5WH8r003C5xCtsYZywmWYnl.FH8AKW5ke0AUPPFw.YgvZvrVSK6wwArR0sjDh0jvXd9mpcvrAEZDG3qignxzuBwMzhgRM90LGMuJdCNZhdQ-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFtpEW31yftLZp03maIy2.var825gf3be_7EsVOTrUcJSssje3iAzmkPcoYNCH_dIiX8DUs.f6Yqggy9Z45vYRoXv_YYkR7uRiB9ze7giK3J93KLZ9NYBcyPS5ThS8wwPNE-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFurJbSRCCE779HqEKx.r8gabx6DmOkZ9qZ.Pw63n9UCVBn6hKZn1lA19agM2QAKY45FIQMV34WU.tFuwRAOmxugZZ5aLUMhPdMWVNh1S5gwI.xHPZ.NuQygGwsUyu2AZYY-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuOCllerytRgHCDfabW5Lj.D4pYvIkqHB7ZKks.rBb7UXMggsN.lkoaPvSdl4mbtjSWddxyHDzW8xlectlvZPESynxzXYReXaFdVYg.zJSlOouBPw2e753iBbN834uhtXM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFv8Nnvrr1TE.62fPCTa2XZKbB2wuAKjaA2CvlUS8MrUgLHnmDSIXthPgzUgJTYjy0oj5dsco1UZbll2Il2ntKaMR_J.85JeMdKpMAHSApbWpaLLk14kN9l_0OWgOsGmvwo-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFszlPTjzP9ezU0RoZ7YwvXCaEz9xllPCbJ754Y4IGAfxiDQxxZ6fIvjyItHBNV.4Gm15JttDYn4I8R9VXYvoZfmily0gebSr7iY0fhvA_CfaDC8FZPim_fyFrBaZaVPqoU-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuwjGwK15zjjtJfaVDHnzx2G5MUNe1pyDjYfyE0YvO9kx4DuPGEpGTcjLdgaraBQVVZ7F.V.yBfyWLLBpN7aohqOOBM3l3h7YM_q.S0qNROLrNwllfQhj89U9gN4kLZ.vw-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvyYVAZ8PNzEHBA53..zO3uYZYWrVAaVa1aCAUqJ7B4rOaGn8IKIIgHxvqSV35jch2G3CIkD0EVCvHynC2eJg3WtVp3UoPWhr4WiqFE0ODYcqond0uoR2LS3Y4P330t6qs-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuXOykwfROplhLBEyV8ICUzym7HGew93BAYr9uQvkpVaa88ix5iiVymC5ldh2vMQFC628RA1EZhtQBSKltzQMgphfTjjhVERBp3.n7KV_Eo0KJQyWqoSiyMx9Xe7g1nAqM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFu7mYyGRS4RsLQYJowYi5rlXEZ8epy74JQXOQv8Jq1cwHlf9HHH37akdbBNq1LVGKidrBb_YEtGXaCfbajpy6wpWmru7TXmrk0.C4Ic2c_QLIjyTsGG8dVe3nVdQ77KDwI-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFtGTTnS06OsFE2wFJvoevviUwIVvU2DGgUky9G.GaW12UNQnCPpID4wuiOV2VgvpglybGrxDCpM2YFZkXo0P9T2yqp0t8gnxOfO7kkQ78ht9aJLbjGbyFaJgMLmmAGKxrs-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-23T17:26:16.5142571Z",
                "visible": true,
                "canHide": true
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "682404126",
            "pfn": null,
            "bingId": null,
            "serviceConfigId": "88f80100-85f3-4620-b440-a2f128aca91e",
            "windowsPhoneProductId": null,
            "name": "Paladins",
            "type": "Game",
            "devices": [],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKTnSBn3C9LVO9gtvki.zIR2mZpsnINpcyFfrJ9aib9eu_LKMaYQ.LITd1EorhywbT1_JYAPVjy2zGegau1nQZABVzfdCT7AQl203waGUss2FR8E8pacVU7MUfG8_HYlds-",
            "mediaItemType": "Application",
            "modernTitleId": "682404126",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 3,
                "totalAchievements": 0,
                "currentGamerscore": 175,
                "totalGamerscore": 1205,
                "progressPercentage": 15,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKTnSBn3C9LVO9gtvki.zIR2mZpsnINpcyFfrJ9aib9eu_LKMaYQ.LITd1EorhywbT1_JYAPVjy2zGegau1nQZABVzfdCT7AQl203waGUss2FR8E8pacVU7MUfG8_HYlds-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaLncwy8DPDVxZe2rtxT8m41Bwynk2B0T_Pflbji9bujYQ3.a6x9e5yWDf7yxHHLeewZw0wc9rCqErwm4iisVqUtzaifuMctsK64bUwq8bpAo7yTO0W4U1WpZYi5UBKD6Wg-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKS3So5Fz80c.4W39behzy00lEOZvSPh3nxWUHAhdcs6QRVlGVAuIy5UqkNBjBz03YfAFvIPIfPKgn6LkYuYVYmSx7ZhP8ysa..vjjfHzbo1mTM3Qn59CjxTILHmiwSBso-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaLwOeW0IvOQ8upA03qx736AweWD1dkOWbBuDDqcIPUTFzVVd2rDvA6L1ECnS3dlQItXbdFxOMTzOeaGfvvpQUnO2JlD0gXm8PRtwI5ucqKt71pUBVplfJCbH4aK2kIQO88-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaIfPUd3epp_eSBM9DnnwK0ysaQX7TrvSbr3t8LixruuQ.Sxej_RjxRebr1.OwmefSdNtcPeJnnl14Vxb25J56zk4VO1bsofMNNvaKXqoh1kSz2TQORwGg7V1SDDNPX0mR0-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaIImj5z5C_HhYvKCkHTvPFpP4Nx_nkhmwwCD9oOaGmQzhWJwNvFb3YQs3FbWGVIUkLgjVN8GLAHBme8U4CP7rxyPjxtKanCeOAg2yHuRwApCL4fbtuAxA4WsbZWHq8pM0A-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKl1BFjY5YhByHriAMsKf_C3.NBnPotKKsTI9W5OgX.S.MJ94pjFyI0vvBAVrLY0I6ko94MO6s3cfthERMbM2_yj7nRild39HS13JkAE.AoFhwsibvwWgzdjQTDdw0JLQ4-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaL6unt7qFl89qKX9RWT7B4d.wK.HekWxlntIl1LZoiNVDl0Z3Y3OUeFXa99WhLpYwf1cnVKwXrBlOQ7UodAUtHtveJt2lDh6Mo1ztNr.m57fOfdq4xZ0lIWCQntVQTSmB8-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJQ1PCfvlEt9x6DpYTXLIU.jCYWhiyXNKcD4TcaRJ1x25g13ETBgpQWKKyPd8wKvtFob2oKhNFoJbvFxG6c81nYmiWWDQzFrb33st2UNKs2gBur7...41aUpWDLV5s_2QI-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJnYKW.Ow881jFeu2h2yAC27OuxGeP2_CYc04.LpIdSeS7mrNOR_Ui3__uI089iaXrxAgBrZle9wlFE8H1cFfZCt4tISouGwhzU7j44pe8BoX6nITHeof49axvrDt2ncHg-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaLZL9uwfKeD4Bs4tsctbyvWRNl7GltRIwg0NP2lP8netZd4LM83g0GZBKugiY13g_uI2O3tzO0Lo21yehyeJ5LutOPnCb4v0EWGCoxC9SYptpe85QRvrwQLbHBSOUAnkvI-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJaSgvAB8rTJRN.3iAJgEY1gl8dQax_8jvZefqpQ.EXdHRBaOxNXjGbl4O..BbMg0NOUaYf_dYFyUXWRt5rUlfBPFLQ1RrgxESxJ1Cdr6p4II8UrCvyeXf_NFICiJW6SIM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJW2y0ACqT2jFhSaaIrfXUaOvFwy0lYrJW8K3YglgE9DLuhD5kDQIi2Ikx6VX_7gQ.jo7t6OjhhWKudhaAv.T1aK8rwdnJZgx2RbksIhdFEqwGi8p58aj3aGTVGopxj_wE-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaI0MKcTWwQ41Mb_PE.pj9.s470KkrU16ojky4BQESku76_Gl.zCdhADzATV8XzBshQ0sBlaQSOAVUFzoIoUk8xMaMAFGGNZ0h1uRlftD6bdJYXyK2rBPfDJDTN9PR3Uebo-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJgVODyEeIuE8JdIbaauQ_kmsfBjhgrPOoLfZXHmKNjyuqVGcQFvNYLIwieUsVI37_BGp6qyHplZ4nOwWVN6VtUsPJHlqHRZe_.Lp4fGLjyZPj1XJu8zjLZHMJI9PIUk8M-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJAJEI0nVcQoLK_r7QIy59TJylQ1zMvUIn5lGv.rrbt_QAUBuhexZw7x5WRIW1VB.d_JGFQXX8Q8HQuvsfqOgVy0YU7rMzLnrmvNUKEhvE6o1OC1Ni62iu9izSsBJNFGmM-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKqrSM9eaNb0fm4YduiIxrMQPrBnm71tMmZrTX2KpB4zOi.GAYfH9nyUDaMBX5aI8cGXEtHuHzj.tIi4iG0sR_95wMZHgW.TpS.jv.uQCvRxhMEpSZ2Q35br1nWRPXNSeU-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-18T13:38:11.8974337Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "346683864",
            "pfn": null,
            "bingId": "a279b8cf-9baf-4278-89d3-66adeda328a5",
            "serviceConfigId": "7e510100-2b7a-4ca2-b775-46ff14a9f9d8",
            "windowsPhoneProductId": null,
            "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition",
            "type": "Game",
            "devices": [
                "XboxOne"
            ],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvWq3jwKYeL9Rj7Tp1MUsxT4o7wUe.2PqtaQjLVwybE7VKT_Kd6daqiGl9Bn91RVcT75LztdzP_8EGt5CQiBWkW7Y2n4S.D.dmlk1olquR06SKD6x6U1zXKcfjQ1yqIo20-",
            "mediaItemType": "Application",
            "modernTitleId": "346683864",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 0,
                "totalAchievements": 0,
                "currentGamerscore": 0,
                "totalGamerscore": 1500,
                "progressPercentage": 0,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvWq3jwKYeL9Rj7Tp1MUsxT4o7wUe.2PqtaQjLVwybE7VKT_Kd6daqiGl9Bn91RVcT75LztdzP_8EGt5CQiBWkW7Y2n4S.D.dmlk1olquR06SKD6x6U1zXKcfjQ1yqIo20-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuaWjiXDFcFoUbxwSdefAeluyKqkNowi1anxh7cY5phjjBrna0_IzBKa4GEbu4ueLMuHIx_ZaCIoB6jbwe6ud2H0QISMfSi1ZncnFHoM9wokigHM0zZ6.InKS3Ib9La6Rc-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFsE86Ee7bwaAfXkKsoj53Z2PraOuyGR41o4lSZuja_qIOjqT65VzJKBbFXjce5HHuV47rAFMvFkoHJ9gDRcCQ9W7NQdc9BZLpABnqPs9bFUVASuOvYdcZ_sDWAWgHnQGZQ-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuGa5yaxXTXjvtnfyF0KHme1zsiz.fDaVEhnIhF6lk.Zx5sazVOTyldwAJie5XorW9I_q5TrnGF4iSrO_bWOcu7KDYzIdhUqpZW4dxuELRW5cjBVkjvyDnNJZZPsfminmc-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuUDNaxn37W0d45R_kf4vPtNdPerm13X1uQcbDzp.5IOqRyOxd3uRRxZAUSrAG6ts5rWs31rpZHNU8NptKVzSzTQYAoo3PnuFkZNl4RKzcWRNMZ0IoL22xNeNpuBMyNgu4-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvBi7VGJVA0uWRQPb6TqRRO5WH8r003C5xCtsYZywmWYnl.FH8AKW5ke0AUPPFw.YgvZvrVSK6wwArR0sjDh0jvXd9mpcvrAEZDG3qignxzuBwMzhgRM90LGMuJdCNZhdQ-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFtpEW31yftLZp03maIy2.var825gf3be_7EsVOTrUcJSssje3iAzmkPcoYNCH_dIiX8DUs.f6Yqggy9Z45vYRoXv_YYkR7uRiB9ze7giK3J93KLZ9NYBcyPS5ThS8wwPNE-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFurJbSRCCE779HqEKx.r8gabx6DmOkZ9qZ.Pw63n9UCVBn6hKZn1lA19agM2QAKY45FIQMV34WU.tFuwRAOmxugZZ5aLUMhPdMWVNh1S5gwI.xHPZ.NuQygGwsUyu2AZYY-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuOCllerytRgHCDfabW5Lj.D4pYvIkqHB7ZKks.rBb7UXMggsN.lkoaPvSdl4mbtjSWddxyHDzW8xlectlvZPESynxzXYReXaFdVYg.zJSlOouBPw2e753iBbN834uhtXM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFv8Nnvrr1TE.62fPCTa2XZKbB2wuAKjaA2CvlUS8MrUgLHnmDSIXthPgzUgJTYjy0oj5dsco1UZbll2Il2ntKaMR_J.85JeMdKpMAHSApbWpaLLk14kN9l_0OWgOsGmvwo-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFszlPTjzP9ezU0RoZ7YwvXCaEz9xllPCbJ754Y4IGAfxiDQxxZ6fIvjyItHBNV.4Gm15JttDYn4I8R9VXYvoZfmily0gebSr7iY0fhvA_CfaDC8FZPim_fyFrBaZaVPqoU-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuwjGwK15zjjtJfaVDHnzx2G5MUNe1pyDjYfyE0YvO9kx4DuPGEpGTcjLdgaraBQVVZ7F.V.yBfyWLLBpN7aohqOOBM3l3h7YM_q.S0qNROLrNwllfQhj89U9gN4kLZ.vw-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFvyYVAZ8PNzEHBA53..zO3uYZYWrVAaVa1aCAUqJ7B4rOaGn8IKIIgHxvqSV35jch2G3CIkD0EVCvHynC2eJg3WtVp3UoPWhr4WiqFE0ODYcqond0uoR2LS3Y4P330t6qs-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFuXOykwfROplhLBEyV8ICUzym7HGew93BAYr9uQvkpVaa88ix5iiVymC5ldh2vMQFC628RA1EZhtQBSKltzQMgphfTjjhVERBp3.n7KV_Eo0KJQyWqoSiyMx9Xe7g1nAqM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFu7mYyGRS4RsLQYJowYi5rlXEZ8epy74JQXOQv8Jq1cwHlf9HHH37akdbBNq1LVGKidrBb_YEtGXaCfbajpy6wpWmru7TXmrk0.C4Ic2c_QLIjyTsGG8dVe3nVdQ77KDwI-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcsWJ38qXaVfy3AP7RbYh4Xpn4tLJv2WoveLnQvxRJBFtGTTnS06OsFE2wFJvoevviUwIVvU2DGgUky9G.GaW12UNQnCPpID4wuiOV2VgvpglybGrxDCpM2YFZkXo0P9T2yqp0t8gnxOfO7kkQ78ht9aJLbjGbyFaJgMLmmAGKxrs-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-23T17:26:16.5142571Z",
                "visible": true,
                "canHide": true
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "682404126",
            "pfn": null,
            "bingId": null,
            "serviceConfigId": "88f80100-85f3-4620-b440-a2f128aca91e",
            "windowsPhoneProductId": null,
            "name": "Paladins",
            "type": "Game",
            "devices": [],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKTnSBn3C9LVO9gtvki.zIR2mZpsnINpcyFfrJ9aib9eu_LKMaYQ.LITd1EorhywbT1_JYAPVjy2zGegau1nQZABVzfdCT7AQl203waGUss2FR8E8pacVU7MUfG8_HYlds-",
            "mediaItemType": "Application",
            "modernTitleId": "682404126",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 3,
                "totalAchievements": 0,
                "currentGamerscore": 175,
                "totalGamerscore": 1205,
                "progressPercentage": 15,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKTnSBn3C9LVO9gtvki.zIR2mZpsnINpcyFfrJ9aib9eu_LKMaYQ.LITd1EorhywbT1_JYAPVjy2zGegau1nQZABVzfdCT7AQl203waGUss2FR8E8pacVU7MUfG8_HYlds-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaLncwy8DPDVxZe2rtxT8m41Bwynk2B0T_Pflbji9bujYQ3.a6x9e5yWDf7yxHHLeewZw0wc9rCqErwm4iisVqUtzaifuMctsK64bUwq8bpAo7yTO0W4U1WpZYi5UBKD6Wg-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKS3So5Fz80c.4W39behzy00lEOZvSPh3nxWUHAhdcs6QRVlGVAuIy5UqkNBjBz03YfAFvIPIfPKgn6LkYuYVYmSx7ZhP8ysa..vjjfHzbo1mTM3Qn59CjxTILHmiwSBso-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaLwOeW0IvOQ8upA03qx736AweWD1dkOWbBuDDqcIPUTFzVVd2rDvA6L1ECnS3dlQItXbdFxOMTzOeaGfvvpQUnO2JlD0gXm8PRtwI5ucqKt71pUBVplfJCbH4aK2kIQO88-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaIfPUd3epp_eSBM9DnnwK0ysaQX7TrvSbr3t8LixruuQ.Sxej_RjxRebr1.OwmefSdNtcPeJnnl14Vxb25J56zk4VO1bsofMNNvaKXqoh1kSz2TQORwGg7V1SDDNPX0mR0-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaIImj5z5C_HhYvKCkHTvPFpP4Nx_nkhmwwCD9oOaGmQzhWJwNvFb3YQs3FbWGVIUkLgjVN8GLAHBme8U4CP7rxyPjxtKanCeOAg2yHuRwApCL4fbtuAxA4WsbZWHq8pM0A-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKl1BFjY5YhByHriAMsKf_C3.NBnPotKKsTI9W5OgX.S.MJ94pjFyI0vvBAVrLY0I6ko94MO6s3cfthERMbM2_yj7nRild39HS13JkAE.AoFhwsibvwWgzdjQTDdw0JLQ4-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaL6unt7qFl89qKX9RWT7B4d.wK.HekWxlntIl1LZoiNVDl0Z3Y3OUeFXa99WhLpYwf1cnVKwXrBlOQ7UodAUtHtveJt2lDh6Mo1ztNr.m57fOfdq4xZ0lIWCQntVQTSmB8-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJQ1PCfvlEt9x6DpYTXLIU.jCYWhiyXNKcD4TcaRJ1x25g13ETBgpQWKKyPd8wKvtFob2oKhNFoJbvFxG6c81nYmiWWDQzFrb33st2UNKs2gBur7...41aUpWDLV5s_2QI-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJnYKW.Ow881jFeu2h2yAC27OuxGeP2_CYc04.LpIdSeS7mrNOR_Ui3__uI089iaXrxAgBrZle9wlFE8H1cFfZCt4tISouGwhzU7j44pe8BoX6nITHeof49axvrDt2ncHg-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaLZL9uwfKeD4Bs4tsctbyvWRNl7GltRIwg0NP2lP8netZd4LM83g0GZBKugiY13g_uI2O3tzO0Lo21yehyeJ5LutOPnCb4v0EWGCoxC9SYptpe85QRvrwQLbHBSOUAnkvI-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJaSgvAB8rTJRN.3iAJgEY1gl8dQax_8jvZefqpQ.EXdHRBaOxNXjGbl4O..BbMg0NOUaYf_dYFyUXWRt5rUlfBPFLQ1RrgxESxJ1Cdr6p4II8UrCvyeXf_NFICiJW6SIM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJW2y0ACqT2jFhSaaIrfXUaOvFwy0lYrJW8K3YglgE9DLuhD5kDQIi2Ikx6VX_7gQ.jo7t6OjhhWKudhaAv.T1aK8rwdnJZgx2RbksIhdFEqwGi8p58aj3aGTVGopxj_wE-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaI0MKcTWwQ41Mb_PE.pj9.s470KkrU16ojky4BQESku76_Gl.zCdhADzATV8XzBshQ0sBlaQSOAVUFzoIoUk8xMaMAFGGNZ0h1uRlftD6bdJYXyK2rBPfDJDTN9PR3Uebo-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJgVODyEeIuE8JdIbaauQ_kmsfBjhgrPOoLfZXHmKNjyuqVGcQFvNYLIwieUsVI37_BGp6qyHplZ4nOwWVN6VtUsPJHlqHRZe_.Lp4fGLjyZPj1XJu8zjLZHMJI9PIUk8M-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaJAJEI0nVcQoLK_r7QIy59TJylQ1zMvUIn5lGv.rrbt_QAUBuhexZw7x5WRIW1VB.d_JGFQXX8Q8HQuvsfqOgVy0YU7rMzLnrmvNUKEhvE6o1OC1Ni62iu9izSsBJNFGmM-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxWEfW30Hcm4heyxwdrR6n_VPPZiIuufNlxw8LSxbhaKqrSM9eaNb0fm4YduiIxrMQPrBnm71tMmZrTX2KpB4zOi.GAYfH9nyUDaMBX5aI8cGXEtHuHzj.tIi4iG0sR_95wMZHgW.TpS.jv.uQCvRxhMEpSZ2Q35br1nWRPXNSeU-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-18T13:38:11.8974337Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "60633334",
            "pfn": "TelltaleGames.4acb7de6-cbc0-424f-94ad-5c0eed7bb04c_4p9dzwrngadje",
            "bingId": null,
            "serviceConfigId": "19cc0100-593c-414a-b461-a4cb039d30f6",
            "windowsPhoneProductId": "375f55c6-5473-4324-b96e-d2b27f834d27",
            "name": "7 Days to Die",
            "type": "Game",
            "devices": [
                "XboxOne"
            ],
            "displayImage": "http://store-images.s-microsoft.com/image/apps.50759.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.6c46b7d8-06fd-4959-8342-440580385ce9",
            "mediaItemType": "Application",
            "modernTitleId": "60633334",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 5,
                "totalAchievements": 0,
                "currentGamerscore": 65,
                "totalGamerscore": 1000,
                "progressPercentage": 6,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.58338.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.0754704a-ba5e-4b64-a675-86b8477d842e",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.21671.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.206e0882-2bf1-40e3-a2a5-0e5a6e2aceee",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.3460.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.a8a24e03-d10b-444e-baa0-660e41bbd9dd",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.11853.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.684d24de-ac43-4c06-839e-86a4acf10967",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.9873.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.e7b2d983-2e97-4789-af75-20b54213d527",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.63871.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.0dd8b5b9-daea-4e6e-924a-d43599636ed7",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.28856.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.b6546b0b-9563-4129-b79e-15bb4282048a",
                    "type": "Poster"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.21205.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.dfb75b7e-4f40-4461-a762-0911a780e985",
                    "type": "SuperHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.50759.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.6c46b7d8-06fd-4959-8342-440580385ce9",
                    "type": "BoxArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.47538.69802328231064156.03ff84cc-b6b1-4226-8e6c-545d183e5fbf.0cc8c36d-cbf6-45ce-bd3c-815999d63fd2",
                    "type": "FeaturePromotionalSquareArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-18T12:59:37.4495221Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "983730484",
            "pfn": "StudioWildcard.4558480580BB9_1w2mm55455e38",
            "bingId": "70e3ab21-a3ba-4946-82e9-df7b5a72e363",
            "serviceConfigId": "c1000100-ccd3-4685-bb6c-83ca3aa28934",
            "windowsPhoneProductId": "79b0adfb-64d0-4103-91c5-01d38c5ef8ef",
            "name": "ARK: Survival Evolved",
            "type": "Game",
            "devices": [
                "PC",
                "XboxOne"
            ],
            "displayImage": "http://store-images.s-microsoft.com/image/apps.52635.13510798887668935.4d491123-4e8b-4a93-a019-1d7b498162f8.1832d4d5-fefe-41f8-b123-ea9e193d14b9",
            "mediaItemType": "Application",
            "modernTitleId": "983730484",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 0,
                "totalAchievements": 0,
                "currentGamerscore": 0,
                "totalGamerscore": 1500,
                "progressPercentage": 0,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.39058.13510798887668935.9e41288f-2eb6-4189-b61c-7d369af28268.0d8a33cf-6e67-4b04-aacc-09afe1580163",
                    "type": "Logo"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.52635.13510798887668935.4d491123-4e8b-4a93-a019-1d7b498162f8.1832d4d5-fefe-41f8-b123-ea9e193d14b9",
                    "type": "Tile"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.54544.13510798887668935.30b57a87-fa32-45ed-adf9-ed9da55e76d2.2e46b6a4-399b-43c3-a58e-0d56337c12d3",
                    "type": "Tile"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.7304.13510798887668935.8419a390-dc24-4586-bf1a-505c247f987c.91cf2cca-2a56-40e8-bbb9-739bbe420cdd",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.7304.13510798887668935.8419a390-dc24-4586-bf1a-505c247f987c.91cf2cca-2a56-40e8-bbb9-739bbe420cdd",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.38775.13510798887668935.908010a7-d96d-46a1-a462-bf02b623c0a0.95a29573-eaf3-4021-8543-c9761cbda3af",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.557.13510798887668935.1e2740b1-d342-49f4-ab24-71edad2808b5.63dc9fab-548b-4c00-8948-01d9b572eed0",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.20862.13510798887668935.930902d1-bfa8-4fb8-b068-746268ae7648.1b64ba9a-0edc-46d0-8f47-3fcb4dcb64dd",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.20862.13510798887668935.930902d1-bfa8-4fb8-b068-746268ae7648.1b64ba9a-0edc-46d0-8f47-3fcb4dcb64dd",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.38775.13510798887668935.908010a7-d96d-46a1-a462-bf02b623c0a0.95a29573-eaf3-4021-8543-c9761cbda3af",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.557.13510798887668935.1e2740b1-d342-49f4-ab24-71edad2808b5.63dc9fab-548b-4c00-8948-01d9b572eed0",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.27107.13510798887668935.85a01cef-c067-4ffa-95cc-ca5403d7ab3e.50648f42-beed-40b8-aa42-57dca7b51b41",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.57630.13510798887668935.a81a07d7-b284-4c97-b63c-acec860a7890.46c8933b-5159-4403-9888-6083679d2446",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.57630.13510798887668935.a81a07d7-b284-4c97-b63c-acec860a7890.46c8933b-5159-4403-9888-6083679d2446",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.43276.13510798887668935.b5fa2d7c-ae15-40c1-b85a-7584c4ad4557.08806f4a-583c-4adc-9a8a-8487827d2a67",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.43276.13510798887668935.b5fa2d7c-ae15-40c1-b85a-7584c4ad4557.08806f4a-583c-4adc-9a8a-8487827d2a67",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.58939.13510798887668935.2808a54d-f270-46a2-b853-42e5bdc00f69.5c064352-3c64-4721-9942-8b5d6ccdd981",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.27107.13510798887668935.85a01cef-c067-4ffa-95cc-ca5403d7ab3e.50648f42-beed-40b8-aa42-57dca7b51b41",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.63040.13510798887668935.d25435bf-8add-4625-9198-32762741cfaf.9322a595-81d8-4013-9f4f-924c931ceba3",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.63040.13510798887668935.d25435bf-8add-4625-9198-32762741cfaf.9322a595-81d8-4013-9f4f-924c931ceba3",
                    "type": "Screenshot"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.18219.13510798887668935.466044eb-d4e8-4cab-aa17-8820f942ca88.01157084-4ed0-46bb-81e0-67d06ea72e48",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.11366.13510798887668935.a5478c71-e026-4cd1-a070-74b6bebc24c5.c93c019c-06eb-4098-95ae-862ac1554ac3",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.59943.13510798887668935.6abac1d2-b18e-4cf0-88f2-704056eabf39.12f11033-0988-442a-99ea-5cf77274e747",
                    "type": "BoxArt"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.59714.13510798887668935.dd5aba3c-2510-4856-87c8-291c488c036b.dd69ce1c-581f-4517-9e9e-977fb6394b87",
                    "type": "Poster"
                },
                {
                    "url": "http://store-images.s-microsoft.com/image/apps.44561.13510798887668935.255dcc7f-6e24-49bf-b627-c0e55cec0071.66c75e3a-b922-484a-898b-428455ac19cf",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-18T12:59:22.0585836Z",
                "visible": true,
                "canHide": true
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "374621264",
            "pfn": null,
            "bingId": null,
            "serviceConfigId": "54580100-f968-45a6-9694-320b16544450",
            "windowsPhoneProductId": null,
            "name": "RESIDENT EVIL 2",
            "type": "Game",
            "devices": [],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvcEiBtFJH05m55Oz8etdxzJpIR3uYfB09uTik7VydIQLX9UAt1NBKmrSYtjaHBwv0pWbtkAlEzEAyYJAE.sP2uyGNMBeKaSb8u8Ja3GkG8poTrIwrsK_ao9qXywpSAQaaw-",
            "mediaItemType": "Application",
            "modernTitleId": "374621264",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 12,
                "totalAchievements": 0,
                "currentGamerscore": 210,
                "totalGamerscore": 1050,
                "progressPercentage": 20,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvcEiBtFJH05m55Oz8etdxzJpIR3uYfB09uTik7VydIQLX9UAt1NBKmrSYtjaHBwv0pWbtkAlEzEAyYJAE.sP2uyGNMBeKaSb8u8Ja3GkG8poTrIwrsK_ao9qXywpSAQaaw-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogve1CpcWSwoWIa6u8Zr10F1iwcPjQ9zbSQHIzdbrQwktw3zuWctLTn6jB.3_QmuF6Pj8CmHQWHZjLnsngZ4Z4HiJUtD678Tk6kGy79m4l66onKCrWd0mlJrGTsNifU9w8ks-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvd6QnJ4ofmp5aZ_0ZkXKOgRxIj4UZ6h1qMG27dvhFzjMaZfMl7BudtKWxvnFW0Cqfj.jC9040TxekdOLmUtdkDWmyC.Ap7LLY2C6E1p_RXWbJ2j9Vg9to46Mcz28UYQtLw-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvfwRxnfHx6ZCIrhpNMrpFb9dh3OU0W3Fjktq_d9bi13Xs37HPHBErVtMTRBnv3HXd9rJGTvoXdSQu.mflvqgbJ.Is_4ruZELm1UEeIHRPpDPui6nv.l32whD6uCeftBHbw-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvcS6_QxSwbB69XUunRLwpf04LchY6tqaofNfa7HCCCMUe4rAfduLXC1p0RNibDjLgGMc9yO_srm9jdZ31dSQrqP0ARztMCVei9wu3ndu3bQibmopuuc1TH2X5_Jn2dppdA-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvf7DkKFjpvRJ_OZlIqwlCcHX30DBR8_ASu5i3VZaWvlp51G_3ScjaIkURX1kgoF.L3qrM9RfU_NIFlD2dlwQv03w9DpVrxu9lkPeA194IdvVtMY8Tf8EQ1y6kNItUnjikk-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvfw2FNDU7bVvtxlWhkd1eQQG3DCvmRfSvidzxEw.n63yA8X6C3CYWih7L0riAcgraEbRVoyt.cVIVhgBsuNd.Znh_8_q9stDtozf2JYfQsT4EX5P.YK8MCrTeqeOsJYpGs-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvdYmjIgFQ8LVWivGBKI.vV2RA3WtbehhrKWZ.zZmddFZsghDVH9Y_dsUkQcKWqmLatXLlLCQgNo_dJPP0asgOIMvV9etqs03N9CA_0KQzC1BxOkaN_CFulKg6WQQMvtxSU-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvcasva7RehP2mYi9KRB0Idl.bmTqZ2qD6Xig81USej4XEzWtfdOVTJmlwGuIZfcHp8U3Axn3t6gnvG3HCvNTTKp7LZvl3fycAp14lcsNx7mwCjvNRbyVsZXv.vmRQppkmY-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvfkcn4i3Piqz8r6IUvvLQTAGxD41w1kSpFyiB4Gv.C5ON2Rhg05IvEACEvWtIctEX92eFOfYCr831Ya5G4NFZqEl7dIASDf.67gek7wOhGfByzxpTFZypVxh7pSfGWH8eA-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvfYy7IOuOJXezgH5gA41R3mN2pNT34TmHGLn2RNlAP9K7gw2caZ4XJu_5RSZNxo6ltqQS9FBzBjCnHzDjILAJn6jggjY2RkoJZF3rS9ZcqEbVN6tkufy9nCDcSVjQtlnL8-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvfUfHGia9tUwSA1FZx.AwppNX_ZjnAhsmBrK8DT8zRWnpYrTJ1EyQIO_O664jldwAKBjHtoRMLiqMJvVc0clbxD4Ah8Fgs_kBbJIYypUBOYKbGNeU9dnRNNQYTHFi7DlOM-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogveYCt8M.87_GsZCoZP4TGEtqpBPMw.aAnz_PnEEg1zcoUC_SdlAK06YdS46pOBMPaQfEcZTky54HMQakTZBG7Y7ftgWTxzyTjJjiwIU0Y62TD3g9y3dY3j6Re3ZBnvfd9g-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogved8LUuUdWz70XXfr49pxer.p.yF5XQ4qvlEs3X9N6sbanzrqvMxVoeP21mgKGXwb8Jg3SJ3YOTOXLlt1fJKPsoOim9iklGMuBQnNgwIzfp2kxHBqCL2h9KGypDBstu690-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvfHJKIjuOcAs5zRL2NcoSMHpySBPKfKGNJSp4udSdoJQz2RFVBQcU2VFI8w7kJq.N2QTrDttu8VKMW.NURtpfUTWFj19phtiAXciJOLn0TuXvYSQzrH0I5veLOOonnW5XE-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTchpnDkHidQtkhYyatU.jQc7m3vshJ6wl7gV.L9zTogvfB3sDjYOYPJ1kZH.4fwj5jzJ69ykQRoVJ4pjLnpXFrxbBtqsOME7QjdsOqWKVOe2a00fXqf4aCnR4HTYZL7YrdyFRO2bN2JUXWCqxjuTYO9wyXxlxBqh2CtW9E6UBoS4M-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-01T22:10:36.831042Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "950328474",
            "pfn": null,
            "bingId": null,
            "serviceConfigId": "3b040100-2400-45a2-a30c-d45238a4dc9a",
            "windowsPhoneProductId": null,
            "name": "PLAYERUNKNOWN'S BATTLEGROUNDS",
            "type": "Game",
            "devices": [],
            "displayImage": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz5mz_Cc.Uu90AE6_bGQyUl5b.HATYEK9wQ9fb8Uc7Kehifn0zK3rFs0QBGtjBKx2NRQjiKg3t_dOQgB5OQtkKI3VV31M99bVpej74eVAwXiea9RIYR8ujWmpbyszYOQhtc-",
            "mediaItemType": "Application",
            "modernTitleId": "950328474",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 0,
                "totalAchievements": 0,
                "currentGamerscore": 0,
                "totalGamerscore": 1000,
                "progressPercentage": 0,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz5mz_Cc.Uu90AE6_bGQyUl5b.HATYEK9wQ9fb8Uc7Kehifn0zK3rFs0QBGtjBKx2NRQjiKg3t_dOQgB5OQtkKI3VV31M99bVpej74eVAwXiea9RIYR8ujWmpbyszYOQhtc-",
                    "type": "BoxArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz7sWlY7PpvL2FSvp0QppBgqbcpZ5Kgc4seBSip0CB6aG8lf2KUEEKzJwqGWmYsHpdlxOmdQUCmDxUoPPINHh4_I9mz.BAOKg2qD9UEqtPdOwB1fEvwm2drc8STK7RZECpA-",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz6Hpw5Kn6G9MqW8mmPWU.buH18VyKr7qkdyj7nCA4BwqwKvsQQT6cNmPwZoAjJ5gYFCBDMjFgHjB1hNaJ5lKVo4IJTuAuhE6S3hEsiXZanYIYFlLZvMgaOteERgFqAsJO0-",
                    "type": "Poster"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz7I0Xm.bGygrfcZOF2UXuxlhy70wjS0oKo_H2B0D3ZtLSCpf3lyg.pgjg4h22s.EIZQmFD01113p.gTY96JSedvoI0JhOOzn3qoLUho6qcgL3mpIla_qpKkOlZwC6xTkhQ-",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz6WL_5cWMnTXQTULqDzsskcHiPJdrWHM8iijvrtWd3ic4IjGFaxwF1_By5gD6ALFCkEgMP1poNIDSX9IgEwCmdKKtFoc41.o9pxZeVC4bRms07BlaBmpP3DDNp60.BbT9A-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz5j137Z0oZQDj1dop09MH.OpFh3ov.4RjiUyM.Voz_DOILqo1nmK8KOffMJGfxiW_ep_zk68Hmxs4Lkf2MMhUXn7G55s9XR2nw.2Jjh2DgwBuRtp1Y_OKsimI3TMU2d3F4-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz7llHAr4pBX.A8dw2m1AVwW_pn.toGcF9Tpt.1ma__i7IOYkW3wr.Ub4HXlCv7PAkoLlnOUbIkgHEhLX.w_F.iDqx4uZz_6sk_gK.E1ZIqvZLR_1EV9Tct8QOEQkHXUNYE-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz4sYG.TBh2xDmk3VJkEU6WcmPde_M4Ru5S0beDiL9oOB5AkbuL1TnpuB26caMxCUiIjNCB8tj4Tm3gHCV_MkMdmBhpSSaKWs6gmziLf1S834ujA4.ZexRKm3ixFNe.nzuw-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz6JajxJgd3fvUutlIDERoBVd2RgKLU6g_hy7TL5iaj7u.sGjSblNhmA0.4jiPxqPe99HaXD0RkiZJx4fjIfRMxfC96a26L_LnE7apHkb1WkDvfghqCBU25m3PDKukwS5uc-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz6sS1C__pnr6PI3SbOYjGMDtXwg36w8brfqDNU0PvRT.uyxo_ZrCQ25Sr8zLxqtUVq3kFtPR3wKV2EKsLlcHq0tniD6FmHSlB6_ShprKZkrcL6sQ7GhdImu61Sx6STwe7c-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz5o7IzDW3eHBxKqvr1lDTMAbgxd_TcuNBLL43hzRBcRdEwEaidMDG4wOT1BrijgrWAKyFACPud13Tx4gae2x1UCiFR.SZOmWfy.xzu_QuCnMAj90l4TUIq2YXq5q4AgI0c-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz6c_O9.vObwNNu74KSMixHZpzgJ23.VY1xzppZt97BwxP1tbCHCDuioANapaYX.9.F.iPkcJz.0Y7JedtvuHc8lc57L1keFJ6xlOY2popSMvaTf_LNLnMAAXHB2OeIFdCs-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz6nvxMDZqDevQibz7itydWe03RblV00H808PYECxItdCMGCr5VTyi5y3wvLuVE.2K2XJNkGUrHwW4wvbpxisFQqa8zLuXl2B.Vg3HZKYSSNPoqxGaUznKI506UaREcNaS0-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz45Z6.X2O6eqCBBHPxrunXVtAorfGFT20kn95JjrtMC1OAdccL9q1MQidDYu.ZJz.Zj_hCkRZAGcb_ajIfBYaDf_Ga_mPFScyJuTSkLzs69yFG.mN_4Dkm.wY_lf71kiTc-",
                    "type": "ImageGallery"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz5HOq73fn6h.xZFCAEBDu3mxEYl89Nn_Zvg38Ovbi2uK7.sDfWeJIfuky.x9giv1ZBQ6U7qEfClQ4joGUZ8pltJlkT9xarY_LeyQ6mv484KjhgbAGVsBp1DlVB7gt1teUs-",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc7UOU3_i7wqq6_4pf6s0XYJjeEC3sNu339eGybk1vjz7nG97IynUbNDzM5kJCre4S386TLj1fc0JMb3tDXH.H_mUnjdmxRLXfn69H4nFf1w01fxMVdqe.Ywq0v482Mz7R2207.pm0RqG_8uPvtbpV27s9Cui8_KMrN8uMNUPvJ1s-",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-01T21:59:51.6604019Z",
                "visible": true,
                "canHide": true
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
        {
            "titleId": "1681220621",
            "pfn": null,
            "bingId": "6dc74b2b-46ae-44f6-bfe0-0e49c4e78733",
            "serviceConfigId": "126a0100-20f4-4dfc-a88d-0bf26435640d",
            "windowsPhoneProductId": null,
            "name": "STAR WARS™ Battlefront™",
            "type": "Game",
            "devices": [
                "XboxOne"
            ],
            "displayImage": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bju.04PGBKaoW9fj0F2GtTmQQ0XVmOviMN2Aem7AhvN20IofP85u45pqQeoyFsZYTg.mkZf3oVLavflOATTZIp.fmq0DcEuJW03fApdTXYGF4qXZ6_0XCNseO4KqGWE_k_4iliiB0NlD0Nzd8z_6VoVkn_RMMCrCKW4UfHI2dnLsL0ZKqG0OeEfWeGtxR0ZKY3VdM8YzgrSdkXrqr..ZEm2Cg--",
            "mediaItemType": "DGame",
            "modernTitleId": "1681220621",
            "isBundle": false,
            "achievement": {
                "currentAchievements": 1,
                "totalAchievements": 0,
                "currentGamerscore": 15,
                "totalGamerscore": 1690,
                "progressPercentage": 1,
                "sourceVersion": 2
            },
            "stats": null,
            "gamePass": null,
            "images": [
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bju.04PGBKaoW9fj0F2GtTmQQ0XVmOviMN2Aem7AhvN20IofP85u45pqQeoyFsZYTg.mkZf3oVLavflOATTZIp.fmq0DcEuJW03fApdTXYGF4qXZ6_0XCNseO4KqGWE_k_4iliiB0NlD0Nzd8z_6VoVkn_RMMCrCKW4UfHI2dnLsL0ZKqG0OeEfWeGtxR0ZKY3VdM8YzgrSdkXrqr..ZEm2Cg--",
                    "type": "BoxArt"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuel.QNJ.AXoLMyDRt9gGpFqZck7tOxSyEqZyCyqdItcEIDPQ60RcyutsxlAA5tkEfK3jMB7_et4umagxi4F70Y0m4dPpMy8nCaegBdXvDkRsNhqhUCjwOjiXpAwIrFM6WRMgGfkH1mDhII1TW08dAEt6pAsQqccYiKVT.GXE9VCVbLUuQ.01udb3pb2kYxLS2L.Qr0fIKKM6GIiFDBUzQNQ--",
                    "type": "BrandedKeyArt"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjubqhOOB65yBNOch1EfgqzZ0D9mh4Sl1jemwislpkhEB_O2RvmNCDMKzNIIxKUPrhS.CLhX79Dj_YbufUwSVyrzKIAAX3uRMulSAtDUPwi6mf4l09Qpjnzv53DA0tpou4v._ftFBYjbceYa2diKYmGsMMwt_jVbJCZnbBJ5DRL2q3nVYshlEWKcT9sTcXW5C.neyUfoTvbKIOTYYj.n2zOVw--",
                    "type": "Poster"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuQCMInthhe_h4TsvE7yENpgxET5QCtTzh7wqMBq77956_IZOKF3_o4tWi0uNnni35sK_3CaLyoZkZwUQqvPwpAtMHQ7.q20srVnSV12kqVT.gmVlvq.tOcJEK6uw8LIHnExEPYpl_MqkoIduHv0dMr3O1SFt71hBAZ60meAkt5aeNvUZc94Iwe7u_aNPCSutX810uNgpejf7me1O1.6oicA--",
                    "type": "FeaturePromotionalSquareArt"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuCbPMQyxUAcLPnt6s3k61opxE55qM5up_irQxam5rRiTMFGXSuz21eJky1BXqmKLBLDCSIc.Z6eqcHpygaA6tVorUPVQZf9W4gFIuoOvoIrrcemEHjsl1llJplkzyrxVQhqO1ywfXjNiUiy_4I7wvSk7aRjtlgjJMC1AOYiM7YbsGcL3hpY0gJLW1KhI5iU9uOWihrgGYddI7XdE0uUFarA--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bju34rn77f.6PQiKfFG7wdHfsFLn2P7eqCgq78ZmFuGqmuFI5MsqqcMzSgKWa8qYbSHNzFF9u.RCS7nT6SQIyubugqfG1UNEACeXluUNMw41AxNgZGWZ5Ngv0IPyYPhdaNFBRKUGoEjNCubUhAFdZIRg17ZeJiRg.v2r6Mh_POwrv0kO356MJI03iksLZQKxuxKiY98Su2oscazlJPnU4m9fA--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuf1r_CdrrXs7Ed1f0Oa35hD6yW.8VkTN7D99OUoR7Id9BQOLx0kneFZBH2dNFgA9e8l5_vTZhkG.MZzJcfT2j6U.KnehH72HY6YejlCIwgwNS8GeAgFQZ66LhzaQi34fL7ghq43VwLhck0I9Qv_anBkZYNHbikp9Y9Sh1VybyxBEB6Hrtz3Y17HbW4xSPrJu4XPZ9NbtbKEigvDU1svE.OA--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuU_zOxC3EzHhOHjHCFM.SAKora2PbYoEFEYxu37iI8845l98TBAiNEDQ7bFdxs68leFqfAjw6Lv3SNQypU7fT023ninsIYclWYbDTnE5J.Pf_eqOOfdZNoSmJYkV36xTYWSkTwh1s3JKPiUOPGO6b0TNloZ6irfpHYyDKw01JaPlLwkU4fMYr.h6IGoQro6Q_9L19275vP5v1vAdPRG3cXA--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjudCuRtwaDDvET_VLkBQ180dAhpEHS083Xj1DpezdPp_aiyr5MrYpNPKIBVFjeCXsxkHI5nKrQAGWwQ_iIW7xoI5SLUfGsmbDAU2XerWwHjq7TX_4fzQRHtYl0K4iE.bJBcqFexQsKkNM0qE321JI._mFiidKEjT56_yA3obVRnoSQubCyh47njsSd77ZKZNMHh3JZuy6kYXNCtyZLXp07pw--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuFm_LDfjY3YgvJjMLBLWwlhFxC_wCQUJ62n2unS5yeaEczse0sQZSu_CPMe0KjIEKIuSt9dcveYxis4DHJ.djG5X2zyN3n1ZdQDVaIYq2lyYocyawaYOveRl0hS.hYcA0fb0H4zcg.6M57Ze8NuTga7.H7S9tpL__19JQCOltavYaKXCxh5YAszMv0UHfJPm3mX2lqzCwjE16EtiEPQvKHg--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjudwkwDA.aKb_OQD7fcJfJfPIZQT0V52MM1NcW2jrgZ1yWswCSyB75abgy2cCsaH6LI0fvnLsW5N5Rd2u7GNtB382jeqmpcmI3FOp3a8uaDi0pkwq6hrrtxH81wCZyzo253AS1Gmuuqrnos_0IRBMQYFzUHMySHzuczPo7X93GAAsqySeXgCnDu6ovU92DppdPqBIiCIl_O__1GwIWdM4__w--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuhIxvUfCo8ArZhYv5CYZF9E6GZZvI_N4PDk_3M1k2zdI7W2yDpx1cKvtaitUKJVd8_gbq_FbHOJXpldO3qy3GsK3RW4UW8B64YjOCPzXDoWfeiX24kxSlkFI.bYv1iDh8WvMVgvkq_vsLsUdYngMh6XMuwKsjd.855Y53J3TppjeLypE7l0qwA.21yciDif0mNPmrb.IeqzJ5UywibuRYpQ--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuhrqI73ERpXvI23a7SEzRJpvb0wKAUDo.5rAdXKBcVXf4wdCeC6W_e_bD9u8s6w996o6Iltn502h5jfhusbw.95qr0995ug.rgASNU8j74SUvg8JNDs5ZOeVm5mlL.IKjdZ26nVtVqbFo9NLTZ4uBg0jhevBqN5zSWFMqqBuZAfAEfY8WTZZzlOc28XO41JxIpqAlMS7eyNU5O3TR79nkcA--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuQwe8sEJltqYc5PJYZJXGaz50O4AHIcEmEZCKyWLb5pS5_MAcxIdbqFYuTB78w8zd_TYAblyLkWWLmtLwbgUke8xfiEbxPvgGNrBc7MkWrCoRMdpbZ5aSaerheO.MhzCetCeUgCfWvLaQlP1rKK4MaCfkYX99sGZUjkxxcRTt898ed7L_1uKOhEc9DGvqkjNIFggAghAbGc1Kk2blb.m_rA--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuw12Ut6KeA2Jm5NJpgKdrlBLrIYqu05J.ZHiv85Qs3JjSUZj1CSKEe_AJPWMqzUo4hV3avjPzTx.7e74s4pNjNTe_pcA0LNzuoyLm0VtTpBtpRT9WuT5GGBGP52Uvye5_Ltv0wmW4wIZ4fEXBZp3fU1UMR3DwozvCvfnI75VO6p06ckBpchCxXZfLCKq_izXo.nOkV8crzbFubpkLzi18dQ--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjur5sNO_JulwR_i5YnbZV14Zlc9Mxl7Z6sO8kq8WiwsuPk7PUp.OIRTSPFG5dhnL6Fu0X8JxrJgsBvcQfXqkww6mx0In2Iw9BNniiv5ILA6gatoKXCX3mTgZNoM5ceq73OQ1QDesnDXELV_s4YxmgmByZ8Nl0WYNC_0zukkkD8bj4r5szysjj7Z1M5sOWbqhwTC9EYe4iHfPhYaO5sKMUzvg--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bju3EPl2.PTxNIoWSmOKaUArZml2iVfjGgyj56kkdrOnbGRRz_MYwV7X8w0G.rxTKprRTQ9E_GNxmWGlU.6PXGAsIxhckEhQ4mRf28Lps0tX53aTo0_sA3myhE7hU038gLQpyxzLLdLsdM4APg.GKqI.I55Fzpp_56V.6vl94cgDLfo.sz93oNQNepF49JJQXgDRN_8dowfQFWndG81mwgrJQ--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuaqafZKBjx3DXdtxOOeSQJKJaSEfmMflYVuUBcDz13ug4.cNLLJn4Ys99LVrhvKodTzUcdKbd.UEJU.3cVwoQBt1jASCAGxpXyurBzEpOnTI.atW0o.xrrNE4LwJQCyEO9Q1Z_Se6fMmu9h_VQDJ.s_1wX7iQRvbbzPX7rtGaDLQduDP8024RFM0ygsHKpF5nCUdMVaSM35dTo2RWNtuXyQ--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuuyeo2mGf875Z1kXCTBRahhp8EidUhLQpEJfiCqCS.zacmm1sURRqTmboAqHctEBLUnuEVtS6jVid7eZBssJjwKPdVNxsxCVJNWhvTVB_MGjbqKJ6l6QzJwXvHCICnl4gAT7GB_tkTIL71WOtBJ7X6VDdofywo4ZxYU183wR.QQ1ZsLVlhEYOuuo1qmrQ_02Fa1ER720McDVy8OnTw_uNjA--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuysDZ7B_6imx0p5LwjHkx6SuDEd5Fs.4TLhr7HvAlgRb3Gv7TUqbUNhOIjWsaY8QJ_cJzWht0DA00XyKxahZC9wRYRbKIkfmMu0Q14jcicHAuKCfY7a_5vfaNZNNLxA4tmfrNZBkg5rW6hawE2VciIjormcdSSnS4Zvmm9sJPvN3zJ6NrcC7T97ncDn3uzb5y31r4aZyxBXc50R4Fkoh3gQ--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bju7.HxoNNNgoVfjXl3rn2VLV86ahARqQgbda_UZCrb_79CV9_Vm6V7iOaKciBxXitwyORP.kOBS9UFBRxEuw8QdjVGLugSIveyf09X01tYJIRqq80E2p6XVoGECND2BZ55weP7QxTVSFw4YxJ8IDi42LTdB9G35HcOBAIBq_KHzl4K37341qQ8qWjmqAHwQoyMUHHnWVyuFa1s5BJnKUAu6A--",
                    "type": "ImageGallery"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuI2fiSk6rYnNFVS2AJtuVUNToTNX0iS.hboqGjRMvGC7OgVOh48wxhVDYQBsuUMzSD_tBCYwzYCzuJENQW12GDrih_d.78fYH9Xj4yhH2LowBK30Eevhv2hefKz6IxuDZL_JhL_WkkRCXO7ctvBGzpcWQi4fqfD8WLRHjzRQYxD_aCE2A1vPQ4CCxqLamS0G9jN6rFaPY.sL.NzHNCI.Ntw--",
                    "type": "TitledHeroArt"
                },
                {
                    "url": "http://images-eds.xboxlive.com/image?url=rOOPPWX9ohGfLksSzq1WimLZZePj_hh1Xoq33og1KZlEadBXVzVch8pvhv4XYmEVEDSLAUD3deDFlQpQA49VKir2MtWOfDDqPYl46SRLT1RHWnVtP9LbsPu3Em2.kEWQmoHG3U1sapaAAZY.xQ3VjFeKfKbW8lcy4K0.gij0kyrbylizsVn0bn_M6d_40bjuMklRH8GZfBtKDSXvJRbvx9Di8k_xHl0Q52L723lQn9Ovm1dokWrmLCyVODQif8l_Np0_0UuYwjBErUoXRHQ39.FJoLXyzVdtZrN5AhjVn7pFtkeYIQ8blF5fggsrBHi4ORN9XEWZ5WCntms4rAw4kEFTxD_P5sTgrWJ3hoYaTB.iXCAmMXEW8DNO9vwwXs4UjnG6Ghc7ixlzBMy7FEVUhg--",
                    "type": "SuperHeroArt"
                }
            ],
            "titleHistory": {
                "lastTimePlayed": "2019-03-01T19:44:39.7911609Z",
                "visible": true,
                "canHide": false
            },
            "detail": null,
            "friendsWhoPlayed": null,
            "alternateTitleIds": null,
            "contentBoards": null,
            "xboxLiveTier": "Full"
        },
    ]
    }

}

module.exports = {getXboxProfile, getXboxGamercard, getXboxPresence, getXboxTitleHistory}