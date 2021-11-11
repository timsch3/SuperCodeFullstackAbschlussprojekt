const spotifyApi = require('../config/apiConfig')
const spotApi = { playLists: {}, yogaAndMed: [] }


const getCat = (req, res) => {
  spotifyApi.searchPlaylists('yoga', {
    country: 'DE',
    locale: 'sv_SE'
  })
    .then(function (playLists) {

      console.log(playLists.body.playlists.items);
      spotApi.playLists = playLists.body.playlists.items

      spotifyApi.getPlaylist('7feqserrlLnpnvo7uRa5Wn')
        .then(function (yogaMedPlayList) {
          spotApi.yogaAndMed = yogaMedPlayList.body.tracks.items
          res.json(spotApi)


        }, function (err) {
          console.log('Something went wrong!', err);
        });
    }, function (err) {
      console.log("Something went wrong!", err);
    });

}

module.exports = { getCat }