/**
 * Created by Ale on 1/16/16.
 */
var request = require('./node_modules/request');
var fs = require('fs');
var data;

exports.movieListings = function(){

  var nameOfSelection = arguments[0];

  //Makes an API call to omdb API in order to get movie information, default movie is Mr. Nobody
  if(nameOfSelection === undefined){
    nameOfSelection = "Mr. Nobody"
    request("http://www.omdbapi.com/?t=" + nameOfSelection + "&y=&tomatoes=true&plot=short&r=json", function(error, response, body) {
      var movieObject = JSON.parse(body);

      if(error){
        throw error;
      }else{

        data = "Title: " + movieObject.Title + '\n' +
                "Year: " + movieObject.Year + '\n' +
                "IMDB Rating: " + movieObject.imdbRating + '\n' +
                "Country: " + movieObject.Country + '\n' +
                "Language: " + movieObject.Language + '\n' +
                "Plot: " + movieObject.Plot + '\n' +
                "Actors: " + movieObject.Actors + '\n' +
                "Rotten Tomatoes Rating: " + movieObject.tomatoRating + '\n' +
                "Rotten Tomatoes URL: " + movieObject.tomatoURL;

        console.log('\n<------------Your movie search------------>');
        console.log(data + '\n');

        fs.appendFile("log.txt", "--------------------My Movie Search------------------" + '\n' + data + '\n\n', function(err){
          if(err){
            throw err;
          }
        });
      }

    });
  }else{
    //Makes an API call to omdb API in order to get movie information from a users input
    request("http://www.omdbapi.com/?t=" + nameOfSelection + "&y=&tomatoes=true&plot=short&r=json", function(error, response, body) {
      var movieObject = JSON.parse(body);

      if(error){
        throw error;
      }else if(movieObject.Error){

        console.log('\n<------------Your movie search------------>');
        console.log(movieObject.Error + '\n');

        fs.appendFile("log.txt", "--------------------My Movie Search------------------" + '\n' + movieObject.Error + '\n\n', function(err){
          if(err){
            throw err;
          }
        });
      }else{

        data = "Title: " + movieObject.Title + '\n' +
          "Year: " + movieObject.Year + '\n' +
          "IMDB Rating: " + movieObject.imdbRating + '\n' +
          "Country: " + movieObject.Country + '\n' +
          "Language: " + movieObject.Language + '\n' +
          "Plot: " + movieObject.Plot + '\n' +
          "Actors: " + movieObject.Actors + '\n' +
          "Rotten Tomatoes Rating: " + movieObject.tomatoRating + '\n' +
          "Rotten Tomatoes URL: " + movieObject.tomatoURL;

        console.log('\n<------------Your movie search------------>');
        console.log(data + '\n');

        fs.appendFile("log.txt", "--------------------My Movie Search------------------" + '\n' + data + '\n\n', function(err){
          if(err){
            throw err;
          }
        });
      }

    });
  }
}