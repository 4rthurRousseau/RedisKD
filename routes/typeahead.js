var express = require('express');
var router = express.Router();
var service = require('../services/typeaheadService')

router.get('/:search', function(req, res, next) {
	var search = req.params.search;

    service.get(search, function(err, data){
    	res.send(data);
    });
});

module.exports = router;