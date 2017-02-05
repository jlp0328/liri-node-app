var twitter = require("./keys.js");
var spotify = require("spotify");
var request = require("request");

// var twitterKeys = keys.twitterKeys;

// var client = new twitter({
//   consumer_key: twitterKeys.consumer_key;
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

// });
var nodeArgs = process.argv;
var query = [];
// var action = process.argv.slice(2);

for (var i = 2; i < nodeArgs.length; i++){

  query.push(nodeArgs[i]);

}

var argOne = query.splice(0,1);
var argTwo = query.join(" ");
var action = String(argOne);
var value = String(argTwo);

console.log("Searching for " +  value);
console.log("What command? " + action);



switch (action){
  case "my-tweets":
  myTweets();
  break;

  case "spotify-this-song":
  spotifyThisSong();
  break;

  case "movie-this":
  movieThis();
  break;

  case "do-what-it-says":
  doThis();
  break;

}





//Functions

//Commands for Liri to take in...
// * `my-tweets`
function myTweets(){}


// * `spotify-this-song`
function spotifyThisSong (){

  spotify.search({ type:"track", query: value},
    function(err, data){
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

  // console.log(JSON.stringify(data, null, 2));

  var results = data.tracks.items[0];

  var artist = results.artists.name;
  // var songName = results[0].
  var songLink = results.external_urls.spotify;
  var album = results.album.name;

  //Need: artist(s), song's name, preview link of song, album//
  console.log("************");
  console.log("Artist: " + artist);
  console.log("Song Link: " + songLink);
  console.log("Album: " + album);


});
}



// * `movie-this`
function movieThis(){}


// * `do-what-it-says`
function doThis(){}
