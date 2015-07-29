/* global angular */

	angular.module('demoPosts', []).controller('mainController', function ($scope,$http) {
		$scope.post = {
			title:"anytitle",
			author:"me",
			image:"images/img.jpeg"
		};
		$scope.input = "my value";
		$scope.demo = function(){
			console.log($scope.input);
			$scope.input1 = $scope.input;

		};
		$scope.getDetails = function(){
			var response = {};
			$http.get('/getPosts').success(function(response){
				$scope.post = response;
				console.log($scope.post);
			});
		};
	});
