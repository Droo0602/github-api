var app = angular.module('github-api');

app.controller('githubController', function($scope, githubService){

	$scope.getUserData = function(){
		githubService.getUser($scope.searchText).then(function(res){
			$scope.user = res.data;
			console.log('getting data', $scope.user)
		})
	}

	$scope.getGists = function(){
		githubService.getGists($scope.searchText).then(function(res){
			if (res.data.length === 0){
				$scope.gists = "No Gists";
			}
			else{
				$scope.gists = res.data;
			}
			console.log('gists', $scope.gists)
		})
	}

})