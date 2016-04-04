var db = require('./db/db');

var typeaheadService = {

	get: function(prefix, callback){
	 	db.get(prefix,'hash', callback);
	}
};

module.exports = typeaheadService;