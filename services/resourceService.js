var db = require('./db/db');

var resourceService = {

    //Fonctions
    get: function(key,callback){
        db.getAll(key, 'list', callback);
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