/**
 * Created by Ale on 1/14/16.
 */
var fs = require('fs');

var myTweets = require('./my-tweets.js');
var mySpotify = require('./spotifyThis.js');
var myMovieList = require('./movieThis');

var parameters = process.argv.slice(2);
var firstSelection = parameters[0];
var nameOfSelection = parameters[1];

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

/*else if(firstSelection === "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(err, data){
    console.log(data[0]);
  });
}
*/

/*var fs = require("fs");

 fs.writeFile("temp.txt",JSON.stringify(data),function(err){
 if(err){

 }
 })*/
// Do something with 'data'