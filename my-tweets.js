/**
 * Created by Ale on 1/16/16.
 */
var myKeys = require("./keys.js");
var Twitter = require('./node_modules/twitter/lib/twitter');
var client = new Twitter(myKeys.twitterKeys);

exports.tweetList = function(){

  var params = {screen_name: 'ajurado22'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){

    for(var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text + " " + tweets[i].created_at);
    }
  });

}