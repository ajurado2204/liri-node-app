/**
 * Created by Ale on 1/16/16.
 */
var request = require('./node_modules/request');

exports.movieListings = function(){

  var nameOfSelection = arguments[0];

  if(nameOfSelection === undefined){
    nameOfSelection = "Mr. Nobody"
    request("http://www.omdbapi.com/?t=" + nameOfSelection + "&y=&tomatoes=true&plot=short&r=json", function(error, response, body) {
      var movieObject = JSON.parse(body);

      if(error){
        throw error;
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

      if(error){
        throw error;
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
}