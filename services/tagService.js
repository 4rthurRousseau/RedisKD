var db = require('./db/db');

var tagService = {

    //Fonctions
    get: function(key,callback){
        db.getAll(key, 'list', callback);
    },

    getEntity: function(key, callback){
        db.get('tags:' + key, 'set', callback);
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