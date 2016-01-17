/**
 * Created by Ale on 1/16/16.
 */
var spotify = require('./node_modules/spotify');
var fs = require('fs');
var songInfo = '';

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

          songInfo += data.tracks.items[i].name + ", by " + data.tracks.items[i].artists[0].name + '\n' +
            "Preview Link: " + data.tracks.items[i].preview_url + '\n' +
            "Album Name: " + data.tracks.items[i].album.name + '\n\n';
        }

        console.log('\n<------------Your spotify search------------>');
        console.log(songInfo);

        fs.appendFile("log.txt", "-------------------My Spotify Search------------------" + '\n\n' + songInfo, function(err){
          if(err){
            throw err;
          }
        });
      }
    });
  }else{
    spotify.search({ type: 'track', query: nameOfSelection }, function(err, data) {
      if(data.tracks.total === 0){
        console.log('\n<------------Your spotify search------------>' + '\n' + "Track not found!" + '\n');

        fs.appendFile("log.txt", "-------------------My Spotify Search------------------" + '\n' + "Track not found!" + '\n\n', function(err){
          if(err){
            throw err;
          }
        });
      }else{
        if ( err ) {
          console.log('Error occurred: ' + err);
          return;
        }else if(data.tracks.items.length > 0){
          for(var i = 0; i < data.tracks.items.length; i++){

            songInfo += data.tracks.items[i].name + ", by " + data.tracks.items[i].artists[0].name + '\n' +
                      "Preview Link: " + data.tracks.items[i].preview_url + '\n' +
                      "Album Name: " + data.tracks.items[i].album.name + '\n\n';
          }
          console.log('\n<------------Your spotify search------------>');
          console.log(songInfo);

          fs.appendFile("log.txt", "-------------------My Spotify Search------------------" + '\n\n' + songInfo, function(err){
            if(err){
              throw err;
            }
          });
        }
      }
    });
  }
}