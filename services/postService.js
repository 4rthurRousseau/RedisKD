var db = require('./db/db');

var postService = {

    //Fonctions
    get: function(callback){
        db.getAll(null, null, callback);
    },

    getEntity: function(key, callback){
        db.get('posts:' + key, 'hset', callback);
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

module.exports = postService;   