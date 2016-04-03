var express = require('express');
var router = express.Router();
var service = require('../services/resourceService')
/**
* Retourne les ID des resources**/
router.get('/', function(req, res, next) {
	service.get('resources',function(err, reply) {
		res.send(err ? err : reply);
	});
});
/**
* Retourne les tags de la resource
* @param keyResource Key du de la resource
**/
router.get('/:keyResource/tags', function(req, res, next) {
	var key = req.params.keyResource;
	service.get('resources:' + key + ':tags',function(err, reply) {
		res.send(err ? err : reply);
	});
});

/**
* Retourne la resource
* @param keyResource Key de la resource
* Laisser en dernier sinon celui-ci écrase d'autre route 
**/
router.get('/:keyResource', function(req, res, next) {
	var key = req.params.keyResource;
	service.getEntity('resources:' + key,function(err, reply) {
		res.send(err ? err : reply);
	});
});
module.exports = router;