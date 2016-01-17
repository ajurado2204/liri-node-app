/**
 * Created by Ale on 1/14/16.
 */
var myTweets = require('./my-tweets.js');
var mySpotify = require('./spotifyThis.js');
var myMovieList = require('./movieThis.js');
var fs = require('fs');

var parameters = process.argv.slice(2);
var firstSelection = parameters[0];
var nameOfSelection = parameters[1];
var variables;

if(firstSelection === "do-what-it-says"){

  fs.readFile("random.txt", "utf8", function(err, data){
    variables = data.split(',');
    firstSelection = variables[0];

    if(firstSelection !== "my-tweets"){
      nameOfSelection = variables[1];
    }

    liriMainFunction();
  });

}else{
  liriMainFunction();
}


function liriMainFunction(){

  switch(firstSelection){
    case "my-tweets":
      myTweets.tweetList();
      break;

    case "spotify-this-song":
      mySpotify.spotifySongs(nameOfSelection);
      break;

    case "movie-this":
      myMovieList.movieListings(nameOfSelection);
      break;

    default:
      console.log("Hello there");
      break;
  }
}
