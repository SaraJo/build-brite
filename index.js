var github = require('octonode');


//add your github token
var client = github.client('xxxxxxx')

//enter your repository, it must be a repository where you have pull rights, and it needs to have CI incorporated. 
var repo = client.repo('username/repository');



 repo.statuses('master', function(err, status, body){
	var number = status.length;
 	//do whatever you'd like with the most recent status!
	console.log(status[number-1]);
 })



