var express = require('express');
var router = express.Router();
var service = require('../services/tagService')

/**
* Retourne le nombre de resources du Tag
* @param keyTag Key du tag
**/
router.get('/count/:keyTag', function(req, res, next) {
	var key = req.params.keyTag;
	service.count('tags:' + key,function(err, reply) {
		res.sendStatus(err ? err : reply);
	});
});
/**
* Retourne le libellé de tous les tags
**/
router.get('/', function(req, res, next) {
	service.get('tags:*','keys',function(err, reply) {
		res.send(err ? err : reply);
	});
});
/**
* Retourne la position d'un tag
* @param keyTag Libellé du tag
**/
router.get('/rank/:keyTag', function(req, res, next) {
	var key = req.params.keyTag;
	service.getRank(key,function(err, reply) {
		res.sendStatus(err ? err : reply);
	});
});
/**
* Retourne les resources du tag
* @param keyTag Key du tag 
**/
router.get('/:keyTag', function(req, res, next) {
	var key = req.params.keyTag;
	var tags = key.split(',');

	if (tags.length == 1){
		service.get('tags:' + key,'setStored',function(err, reply) {
			res.send(err ? err : reply);
		});
	} else {
		service.get(tags, 'inter', function(err, reply){
			res.send(err ? err : reply);
		})
	}
});

module.exports = router;