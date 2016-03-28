var express = require('express');
var router = express.Router();
var service = require('../services/typeaheadService')

router.get('/:search', function(req, res, next) {
	var search = request.params.search;

    service.get(search, function(data, err){

    });
});

module.exports = router;