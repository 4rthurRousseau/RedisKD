var db = require('./db/db');

var resourceService = {

    //Fonctions
    get: function(callback){
        db.getAll(null, null, callback);
    },

    getEntity: function(key, callback){
        return undefined;
    },

    find: function(keyword) {
        return undefined;
    },

    add: function(data){
        return undefined;
    },

    delete: function(key){

    }
};

module.exports = resourceService;   