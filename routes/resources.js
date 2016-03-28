var express = require('express');
var router = express.Router();
var service = require('../services/resourceService')

router.get('/', function(req, res, next) {
	service.get(function(err, data){
    	res.send(data);
    });
});

module.exports = router;