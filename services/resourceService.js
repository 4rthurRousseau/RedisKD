var db = require('./db/db');

var resourceService = {

	//Fonctions
	get: function(key,type,callback){
			db.getAll(key, type, callback);
	},

	getEntity: function(key, callback){
		db.get(key, 'hash', callback);
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