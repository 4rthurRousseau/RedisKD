var db = require('./db/db');

var resourceService = {

	//Fonctions
	get: function(key,callback){
		console.log(key);
		if(key == db.RESOURCES)
			db.getAll(key, 'list', callback);
		else
			db.getAll(key, 'setStored', callback);
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