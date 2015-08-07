/* global angular */

	angular.module('demoPosts', []).controller('mainController', function ($scope,$http) {
		
		$http.get('/getIds').success(function(response){
				$scope.ids = response;
			})
			.error(function(error) {
				alert('Internal Server Error');
			});
		$scope.selectId = function (params) {
			$scope.empid = params;
		}
			
		$scope.getFullDetails = function(empid) {
			console.log(empid);
			$http.get('/getFullDetials/:'+empid).success(function(response){
				if(response!= null)
				{
					$scope.employees = response;
				}
				else {
					$scope.employees = {};
				}
			});
		};
			
	});
