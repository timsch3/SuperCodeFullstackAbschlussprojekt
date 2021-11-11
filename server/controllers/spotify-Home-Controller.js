const spotifyApi = require('../config/apiConfig')
const spotApi = { playLists: {}, yoga: [],meditation:[] }


const getCat = (req, res) => {
  spotifyApi.searchPlaylists('meditation&yoga', {
    country: 'DE',
    locale: 'sv_SE'
  })
    .then(function (playLists) {

      console.log(playLists.body.playlists.items);
      spotApi.playLists = playLists.body.playlists.items

      

      spotifyApi.getPlaylist('7feqserrlLnpnvo7uRa5Wn')
        .then(function (yogaPlayList) {
          spotApi.yoga = yogaPlayList.body.tracks.items

          spotifyApi.getPlaylist('3ksy3Zso4vdt4JIzTYvpF9')
          .then(function (medPlayList) {
            spotApi.meditation = medPlayList.body.tracks.items
            res.json(spotApi)
  
  
          }, function (err) {
            console.log('Something went wrong!', err);
          });
         


        }, function (err) {
          console.log('Something went wrong!', err);
        });
    }, function (err) {
      console.log("Something went wrong!", err);
    });

}

module.exports = { getCat }