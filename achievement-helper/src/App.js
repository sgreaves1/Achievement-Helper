import React, { Component } from 'react';
import './App.css';
import {Header} from "./Components/Header/Header.js"

class App extends Component {

    constructor() {
        super();
        this.state = {
            xboxProfile: {},
            xboxGamercard: {},
            xboxPresence: {},
            xboxLastGamePlayed: {},
            steamProfile: {}
        };
    }

    componentDidMount() {
        this.getXboxProfile();
        this.getXboxGamercard();
        this.getXboxPresence();
        this.getXboxTitleHistory();
        this.getSteamProfile();
    }

    getXboxProfile() {
        // fetch('xbox/profile')
        //     .then(res => res.json())
        //     .then(json => {this.setState({xboxProfile: json})});

        this.setState({xboxProfile:
                {
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
        });
    }

    getXboxGamercard() {
        // fetch('xbox/gamercard')
        //     .then(res => res.json())
        //     .then(json => {this.setState({xboxGamercard: json})});

        this.setState({xboxGamercard:
                {
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
            }});
    }

    getXboxPresence() {
        // fetch('xbox/presence')
        //     .then(res => res.json())
        //     .then(json => {this.setState({xboxPresence: json})});

        this.setState({xboxPresence:
                {
                    "xuid": 2533274811841399,
                    "state": "Offline",
                    "lastSeen": {
                        "deviceType": "XboxOne",
                        "titleId": 750323071,
                        "titleName": "Home",
                        "timestamp": "2019-04-07T16:35:34.7272491Z"
                    }
                }});
    }

    getXboxTitleHistory() {
        // fetch('xbox/title-history')
        //     .then(res => res.json())
        //     .then(json => {this.setState({xboxLastGamePlayed: json})});
        this.setState({xboxLastGamePlayed:
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
                            "lastTimePlayed": "2019-04-07T15:03:22.09007Z",
                            "visible": true,
                            "canHide": false
                        },
                        "detail": null,
                        "friendsWhoPlayed": null,
                        "alternateTitleIds": null,
                        "contentBoards": null,
                        "xboxLiveTier": "Full"
                    }});
    }

    getSteamProfile() {
        // fetch('steam/profile')
        //     .then(res => res.json())
        //     .then(json => {this.setState({steamProfile: json})});

        this.setState({steamProfile:
                {
                    "steamid": "76561198325804171",
                    "communityvisibilitystate": 3,
                    "profilestate": 1,
                    "personaname": "Sam",
                    "lastlogoff": 1554425978,
                    "commentpermission": 1,
                    "profileurl": "https://steamcommunity.com/profiles/76561198325804171/",
                    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/36106a778ebe89152dcace15a7b0cbe040905b0f.jpg",
                    "avatarmedium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/36106a778ebe89152dcace15a7b0cbe040905b0f_medium.jpg",
                    "avatarfull": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/36/36106a778ebe89152dcace15a7b0cbe040905b0f_full.jpg",
                    "personastate": 1,
                    "realname": "Sam",
                    "primaryclanid": "103582791429521408",
                    "timecreated": 1470812084,
                    "personastateflags": 0
                }
        });
    }

    render() {
      return (
        <div className="App">
          <Header xboxProfile={this.state.xboxProfile} xboxGamercard={this.state.xboxGamercard} xboxPresence={this.state.xboxPresence} xboxLastGamePlayed={this.state.xboxLastGamePlayed} steamProfile={this.state.steamProfile}/>
            <body>
            </body>
        </div>
      );
    }
}

export default App;
