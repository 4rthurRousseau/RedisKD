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
}]);

app.controller('TagCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.init_tags = [];
	$scope.init_typeaheadTags = [];
	$scope.tags = [];
	$scope.selectedTags = [];
	$scope.typeaheadTags = [];

	$scope.pages = [];
	$scope.page = 0;

    $scope.resourcesByPage = 5;

    $scope.selectedTags.push = function() {
    	return Array.prototype.push.apply(this, arguments);
    }

    $scope.selectedTags.pop = function() {
    	return Array.prototype.pop.apply(this, arguments);
    }

	$http.get(API + '/tags').then(function(response) {
		$scope.init_tags = response.data.sort(function (a,b){
			if (a.count > b.count)
		    	return -1;
		  	else if (a.count < b.count)
		    	return 1;
		  	else 
		    	return 0;
		});

		$scope.tags = $scope.init_tags;
		$scope.tags.forEach(function(item, index, array){
			$scope.init_typeaheadTags.push(item.tag);
		});
		$scope.typeaheadTags = $scope.init_typeaheadTags;

	}, function(response) {
		return response;
	});

	$scope.addSelectedTag = function(tag, search){
		//  This function was triggered by the search module?
		if(search){
			if($scope.selectedTags.indexOf(tag) == -1){
				if($scope.typeaheadTags.indexOf(tag) !== -1){
					$scope.getResourcesByTag($scope.selectedTags);
				}
			}
		} else {
			$scope.selectedTags.push(tag);
			$scope.getResourcesByTag($scope.selectedTags);
		}
	};

	$scope.getResourcesByTag = function(tag) {
		if($scope.selectedTags.length > 0){
			$scope.resources = [];
			$scope.titles = [];
			$http.get(API + '/tags/' + tag).then(function(resources) {
				$http.get(API + '/resources/' + resources.data).then(function(response) {
					$scope.resources = response.data.sort(function (a,b){
						if (a.time > b.time)
							return -1;
						else if (a.time < b.time)
							return 1;
						else 
							return 0;
					});

					$scope.resources.forEach(function(item, index, array){
						$scope.titles.push(item.description);
					});


					$http.get(API + '/resources/' + resources.data + '/tags').then(function(response) {
						$scope.tags = response.data.map(function(item){
							return { 'tag' : item };
						})
					});

					$scope.typeaheadTags = [];
					if ($scope.selectedTags.length > 0){
						$scope.tags.forEach(function(item, index, array){
							if($scope.selectedTags.includes(item.tag)){
								console.log("Présent");
								$scope.tags.pop(item);
							} else {
								$scope.typeaheadTags.push(item.tag);
							}
							
						});
					}
					$scope.generatePages();

				}, function(response) {
					return response;
				});
			});
		} else {
			$scope.resources = [];
			$scope.tags = $scope.init_tags;
			$scope.typeaheadTags = $scope.init_typeaheadTags;
		}
	}

    $scope.removeSelectedTag = function(tag){
    	if($scope.selectedTags.includes(tag) != -1){
    		$scope.selectedTags.pop(tag);
    	}

    	$scope.getResourcesByTag();
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
