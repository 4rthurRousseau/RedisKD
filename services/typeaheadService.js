var db = require('./db/db');

var typeaheadService = {

	get: function(prefix, callback){
	 	db.getAll(prefix,'hash', callback);
	}
};

module.exports = typeaheadService;