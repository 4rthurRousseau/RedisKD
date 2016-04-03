resourceService.factory('resourceService', ['$http', function ($http){
    var factory = {};

    factory.getResources = function(page){
        return $http.get(HOST + '/resources', loginData)

            .error(function(data, status){

                if(status === 403)
                    toastr.error("Veuillez réessayer", "Mauvais identifiants");
                else toastr.error("Veuillez réessayer ultérieurement.", "Erreur de connexion");
            });
    };

    /**
     * Détermine la connexion de l'utilisateur
     * @param token
     * @returns {HttpPromise}
     */
    factory.isConnected = function(token){
        return $http.get(HOST+'/login/' + token);
    };

    return factory;
}]);
