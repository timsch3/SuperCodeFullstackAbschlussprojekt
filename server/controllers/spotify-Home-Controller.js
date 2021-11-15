const spotifyApi = require('../config/apiConfig')
const spotApi = { playLists:{}, yoga: [],meditation:[],sleep:[],top:[],kids:[] }


const getCat = (req, res) => {
  spotifyApi.searchPlaylists('yoga', {
    country: 'DE',
    locale: 'sv_SE'
  })
    .then(function (playLists) {

      
      spotApi.playLists = playLists.body.playlists.items

      

      spotifyApi.getPlaylist('7feqserrlLnpnvo7uRa5Wn')
        .then(function (yogaPlayList) {
          spotApi.yoga = yogaPlayList.body.tracks.items

          spotifyApi.getPlaylist('3ksy3Zso4vdt4JIzTYvpF9')
          .then(function (medPlayList) {
            spotApi.meditation = medPlayList.body.tracks.items

            spotifyApi.getPlaylist('0cFSN77u5YULfYGcVL55DG')
            .then(function (sleepPlayList) {

              spotApi.sleep = sleepPlayList.body.tracks.items

              spotifyApi.getPlaylist('0cFSN77u5YULfYGcVL55DG')
              .then(function (topPlayList) {
  
                spotApi.top = topPlayList.body.tracks.items
                
                res.json(spotApi)
                
      
              }, function (err) {
                console.log('Something went wrong!', err);
              });

              
              
    
            }, function (err) {
              console.log('Something went wrong!', err);
            });
           
           
  
  
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