/**
 * Created by Ale on 1/14/16.
 */
var myKeys = require("./keys.js");
var Twitter = require('./node_modules/twitter/lib/twitter');
var spotify = require('./node_modules/spotify');
var request = require('./node_modules/request');
var fs = require('fs');

var parameters = process.argv.slice(2);
var firstSelection = parameters[0];
var nameOfSelection = parameters[1];
var client = new Twitter(myKeys.twitterKeys);

if(firstSelection === "my-tweets"){

  var params = {screen_name: 'ajurado22'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){

    for(var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text + " " + tweets[i].created_at);
    }
  });

}else if(firstSelection === "spotify-this-song"){

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
}else if(firstSelection === "movie-this"){


  if(nameOfSelection === undefined){
    nameOfSelection = "Mr. Nobody"
    request("http://www.omdbapi.com/?t=" + nameOfSelection + "&y=&tomatoes=true&plot=short&r=json", function(error, response, body) {
      var movieObject = JSON.parse(body);

      if(err){
        throw err;
      }else if(movieObject.Error){
        console.log(movieObject.Error);
      }else{
        console.log("Title: " ,movieObject.Title);
        console.log("Year: " ,movieObject.Year);
        console.log("IMDB Rating: " ,movieObject.imdbRating);
        console.log("Country: " ,movieObject.Country);
        console.log("Language: " ,movieObject.Language);
        console.log("Plot: " ,movieObject.Plot);
        console.log("Actors: " ,movieObject.Actors);
        console.log("Rotten Tomatoes Rating: " ,movieObject.tomatoRating);
        console.log("Rotten Tomatoes URL: " ,movieObject.tomatoURL);
      }

    });
  }else{
    request("http://www.omdbapi.com/?t=" + nameOfSelection + "&y=&tomatoes=true&plot=short&r=json", function(error, response, body) {
      var movieObject = JSON.parse(body);

      if(err){
        throw err;
      }else if(movieObject.Error){
        console.log(movieObject.Error);
      }else{
        console.log("Title: " ,movieObject.Title);
        console.log("Year: " ,movieObject.Year);
        console.log("IMDB Rating: " ,movieObject.imdbRating);
        console.log("Country: " ,movieObject.Country);
        console.log("Language: " ,movieObject.Language);
        console.log("Plot: " ,movieObject.Plot);
        console.log("Actors: " ,movieObject.Actors);
        console.log("Rotten Tomatoes Rating: " ,movieObject.tomatoRating);
        console.log("Rotten Tomatoes URL: " ,movieObject.tomatoURL);
      }

    });
  }
}else if(firstSelection === "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(err, data){
    console.log(data[0]);
  });
}

/*var fs = require("fs");

 fs.writeFile("temp.txt",JSON.stringify(data),function(err){
 if(err){

 }
 })*/
// Do something with 'data'