var db = require('./db/db');

var tagService = {

	/**
	* Retourne les libellé des tags
	* @param key Key du tag
	* @param callback
	**/
	get: function(key,type,callback){
		type == "inter" ? db.intersect(db.generateInterKeys(key, "tags", ''), callback) : db.getAll(key, type, callback);
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
	}
};

module.exports = tagService;   