var db = require('./db/db');

var tagService = {

    //Fonctions
    get: function(callback){
        db.getAll(null, null, callback);
    },

    getEntity: function(key, callback){
        db.get(key, 'set', callback);
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

module.exports = tagService;   