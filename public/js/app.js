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
}]);

app.controller('TagCtrl', ['$scope', '$rootScope', '$location', '$route', '$http', function($scope, $rootScope, $location, $route, $http) {
	$scope.tags = [];
	$scope.pagedItems = [];
	$scope.page = 0;
    $scope.resourcesByPage = 5;
    $scope.data = [];

	$http.get(API + '/tags').then(function(response) {
		$scope.tags = response.data.sort(function (a,b){
			if (a.count > b.count)
		    	return -1;
		  	else if (a.count < b.count)
		    	return 1;
		  	else 
		    	return 0;
		});
	}, function(response) {
		return response;
	});

	$scope.getResourcesByTag = function(tag) {
		$scope.resources = [];
		$http.get(API + '/tags/' + tag).then(function(response) {
			$http.get(API + '/resources/' + response.data).then(function(response) {
					$scope.resources = response.data.sort(function (a,b){
						if (a.time > b.time)
					    	return -1;
					  	else if (a.time < b.time)
					    	return 1;
					  	else 
					    	return 0;
					});
					$scope.generatePages();
				}, function(response) {
					return response;
				});
			}, function(response) {
			return response;
		});
	};

	$scope.generatePages = function () {
        $scope.pages = [];
        if ($scope.resources === undefined) {
        	return;
        }

        for (var i = 0; i < $scope.resources.length; i++) {
            if (i % $scope.resourcesByPage === 0) {
                $scope.pages[Math.floor(i / $scope.resourcesByPage)] = [ $scope.resources[i] ];
            } else {
                $scope.pages[Math.floor(i / $scope.resourcesByPage)].push($scope.resources[i]);
            }
        }
    };

    $scope.range = function (start, end) {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };

    $scope.setPage = function () {
        $scope.page = this.n;
    };

	$scope.previousPage = function () {
     	if ($scope.page > 0) {
            $scope.page--;
    	}
	}

    $scope.nextPage = function () {
     	if ($scope.page < $scope.pages.length - 1) {
            $scope.page++;
        }
    }

    $scope.generatePages();
}]);
