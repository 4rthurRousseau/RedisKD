var db = require('./db/db');

var typeaheadService = {

	get: function(prefix, callback){
		return db.getAll(prefix,'keys', callback);
	}
};

module.exports = typeaheadService;