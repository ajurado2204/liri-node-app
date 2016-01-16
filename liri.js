/**
 * Created by Ale on 1/14/16.
 */
var myKeys = require("./keys.js");
var Twitter = require('./node_modules/twitter/lib/twitter');
var spotify = require('./node_modules/spotify');

var parameters = process.argv.slice(2);
var firstSelection = parameters[0];
var nameOfSelection = parameters[1];
var client = new Twitter(myKeys.twitterKeys);

if(firstSelection === "my-tweets"){
  console.log("hello");

  var params = {screen_name: 'ajurado22'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){

    for(var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text + " " + tweets[i].created_at);
    }
    /*var fs = require("fs");

    fs.writeFile("temp.txt",JSON.stringify(tweets),function(err){
      if(err){

      }
    })*/
  });
}else if(firstSelection === "spotify-this-song"){
  console.log("hello2");

  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
      console.log('Error occurred: ' + err);
      return;
    }
    //console.log(data);



    /*var fs = require("fs");

    fs.writeFile("temp.txt",JSON.stringify(data),function(err){
      if(err){

      }
    })*/
    // Do something with 'data'
  });
}
