var db = require('./db/db');

var tagService = {

    /**
    * Retourne les libellé des tags
    * @param key Key du tag
    * @param callback
    **/
    get: function(key,callback){
        db.getAll(key, 'setStored', callback);
    },
    /**
    * Retourne le nombre de resources du Tag
    * @param keyTag Key du tag
    * @decapreted Plus à jour à supprimer avant livraison
    **/
    getEntity: function(key, callback){
        db.getAll('tags:' + key, 'set', callback);
    },
    /**
    * Retourne la position d'un libellé d'un tag
    * @param key libellé du tag
    * @param callback
    **/
    getRank: function(key, callback){
        db.getRank('tags',key, callback);
    },
    /**
    * Retourne le nombre de resources du Tag
    * @param key Key du tag
    * @param callback
    **/
    count: function(key,callback){
        db.count(key,'setStored', callback);
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