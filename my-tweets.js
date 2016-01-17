/**
 * Created by Ale on 1/16/16.
 */
var myKeys = require("./keys.js");
var Twitter = require('./node_modules/twitter/lib/twitter');
var fs = require('fs');
var client = new Twitter(myKeys.twitterKeys);
var allMyTweets = '';

exports.tweetList = function(){

  var params = {screen_name: 'ajurado22'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){

    for(var i = 0; i < tweets.length; i++){
      allMyTweets += tweets[i].text + " " + tweets[i].created_at + '\n';
    }

    console.log(allMyTweets);
    fs.appendFile("log.txt", "-----------------------My Tweets---------------------" + '\n' + allMyTweets + '\n', function(err){
      if(err){
        throw err;
      }
    });
  });

}