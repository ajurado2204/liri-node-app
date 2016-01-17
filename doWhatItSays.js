/**
 * Created by Ale on 1/17/16.
 */
var fs = require('fs');

exports.whatItSays = function(){
  fs.readFile("random.txt", "utf8", function(err, data){
    console.log(data[0]);
  });
}