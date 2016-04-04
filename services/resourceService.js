var db = require('./db/db');

var resourceService = {

	//Fonctions
	get: function(key,type,callback){
		type == "inter" ? db.intersect(db.generateInterKeys(key,'resources', 'tags'), callback) : db.getAll(key, type, callback);
	},

	getEntity: function(key, callback){
		db.get(key, 'hash', callback);
	}
};

module.exports = resourceService;   