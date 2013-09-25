var fs = require('fs');

if(!fs.existsSync('./config.js')) {
  console.log("Please configure config.js.example and copy it to config.js.");
  process.exit(1);
}

var github = require('octonode')
	, j5 = require('johnny-five')
  , config = require('./config');


var board = j5.Board();



//add your github token
var client = github.client(config.apiToken);

//enter your repository, it must be a repository where you have pull rights, and it needs to have CI incorporated.
var repo = client.repo(config.repo);


var lights = function(status){

//create two instances of LEDs and toggle
var red = new j5.Led({pin : 9});
var green = new j5.Led({pin : 10});
var blue = new j5.Led({pin: 11});

if(status == 'success'){
  green.on();
  red.off();
  blue.off();
} else if(status == 'pending') {
  red.off();
  green.off();
  blue.on();
} else {
  red.on();
  green.off();
  blue.off();
}

}

var get_status = function(){
	repo.statuses('master', function(err, status, body){
 	//do whatever you'd like with the most recent status!
	console.log(status[0].state);
	//change the color based on the last status
	lights(status[0].state);
 })};


board.on('ready', function (){
	setInterval(get_status, 500);
});
