// URL de l'API
var API = "http://localhost:8080";

var app = angular.module('RedisKD', [
	'ngRoute',
	'mgcrea.ngStrap',
	'autocomplete'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);

toastr.options = {
	"positionClass": "toast-bottom-right"
};

/**
 * Contrôlleur principal
 */
app.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {
	$rootScope.pagination = 10;
}]);

/**
 * Contrôlleur de la navbar
 */
app.controller('NavbarCtrl', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {

	$scope.search = function() {

		if ($scope.searchForm.$valid) {
			$location.path("/typeahead/" + $scope.search);
		}

	};

	//Stocke le focus
	$scope.focused = false;
}]);

app.controller('TagCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.currentTags = [];
	$scope.searchTags = [];
	$scope.tags = [];
	$http.get(API + '/tags').then(function(response) {
		$scope.tags = response.data;
	}, function(response) {
		return response;
	});
	$scope.addCurrentTags = function(tag){
		if($scope.currentTags.indexOf(tag) == -1)
			if($scope.searchTags.indexOf(tag) !== -1)
				$scope.currentTags.push(tag);
	};
	$scope.updateTags = function(typed){
        	$scope.searchTags = [];
            $http.get(API + '/tags').then(function(response) {
            	response.data.forEach(function(item, index, array){
            		$scope.searchTags.push(item.tag);
            	});
			}, function(response) {
			return response;
			});
        }
	$scope.getResourcesByTag = function(tag) {
		$scope.resources = [];
		$http.get(API + '/tags/' + tag).then(function(response) {
			$http.get(API + '/resources/' + response.data).then(function(response) {
					$scope.resources.push(response.data);
				}, function(response) {
					return response;
				});
			}, function(response) {
			return response;
		});
	};
}]);

app.controller('TagSearchCtrl',  ['$scope', '$http', function($scope,$http){
        
    }]);