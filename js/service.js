var app = angular.module('github-api');

app.service('githubService', function($http){

	this.getUser = function(name){
//		return $http.get('https://api.github.com/users/' + name);
		return $http({
			method:'GET',
			url: 'https://api.github.com/users/' + name + param
		});
	}

	this.getGists = function(name){
		return $http.get('https://api.github.com/users/' + name + '/gists');
	}

})

var id = "myCLientID";
var sec = "mySecretKeyThing";
var param = "?client_id=" + id + "&client_secret=" + sec;

