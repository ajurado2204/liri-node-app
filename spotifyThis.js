/**
 * Created by Ale on 1/16/16.
 */
var spotify = require('./node_modules/spotify');

exports.spotifySongs = function(){

  var nameOfSelection = arguments[0];

  if(nameOfSelection === undefined){
    nameOfSelection = "what’s my age again";
    spotify.search({ type: 'track', query: nameOfSelection }, function(err, data) {
      if( err ){
        console.log('Error occurred: ' + err);
        return;
      }else{
        for(var i = 0; i < data.tracks.items.length; i++){
          console.log(data.tracks.items[i].name + " ,by " + data.tracks.items[i].artists[0].name);
          console.log("Preview Link: " + data.tracks.items[i].preview_url);
          console.log("Album Name: " + data.tracks.items[i].album.name);
          console.log("");
        }
      }
    });
  }else{
    spotify.search({ type: 'track', query: nameOfSelection }, function(err, data) {
      if(data.tracks.total === 0){
        console.log("Track not found!");
      }else{
        if ( err ) {
          console.log('Error occurred: ' + err);
          return;
        }else if(data.tracks.items.length > 0){
          for(var i = 0; i < data.tracks.items.length; i++){
            console.log(data.tracks.items[i].name + " ,by " + data.tracks.items[i].artists[0].name);
            console.log("Preview Link: " + data.tracks.items[i].preview_url);
            console.log("Album Name: " + data.tracks.items[i].album.name);
            console.log("");
          }
        }
      }
    });
  }
}