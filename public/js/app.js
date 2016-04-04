// URL de l'API
var API = "http://localhost:8080";

var app = angular.module('RedisKD', [
	'ngRoute',
	'mgcrea.ngStrap'
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
app.controller('TagCtrl', ['$scope', '$rootScope', '$location', '$route', '$http', function($scope, $rootScope, $location, $route, $http) {
	$scope.tags = [];
	$http.get(API + '/tags').then(function(response) {
		$scope.tags = response.data;
	}, function(response) {
		return response;
	});

	$scope.getResourcesByTag = function(tag) {
		$scope.resources = [];
		$http.get(API + '/tags/' + tag).then(function(response) {
			response.data.forEach(function(element, index, array) {
				$http.get(API + '/resources/' + element).then(function(response) {
					$scope.resources.push(response.data);
				}, function(response) {
					return response;
				});
			});
		}, function(response) {
			return response;
		});
	};
}]);
