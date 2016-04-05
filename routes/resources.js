var express = require('express');
var router = express.Router();
var service = require('../services/resourceService');

/**
* Retourne les ID des resources**/
router.get('/', function (req, res, next) {
	service.get('resources','list',function (err, reply) {
		res.send(err ? err : reply);
	});
});

/**
* Retourne les tags de la resource
* @param keyResource Key du de la resource
**/
router.get('/:keyResource/tags', function (req, res, next) {
	var key = req.params.keyResource;
	var keys = key.split(',');
	var tags = [];
	keys.forEach(function(item, index, array){
		service.get('resources:' + item + ':tags', 'setStored', function (err, reply) {
			tags = tags.concat(reply);

			if (index == array.length - 1){
				tags = tags	.filter(function (item, index, array) {
    				return array.indexOf(item) === index;
				});
				res.send(err ? err : tags);				
			}
		});
	});
});

/**
* Retourne la resource
* @param keyResource Key de la resource
* Laisser en dernier sinon celui-ci écrase d'autre route 
**/
router.get('/:keyResource', function (req, res, next) {
	var key = req.params.keyResource;
	var keys = key.split(',');
	var resources = [];

	keys.forEach(function (item, index, array){
		service.getEntity('resources:' + item,function(err, reply) {
			if (!err){
				service.get('resources:' + item + ':tags', 'setStored', function(tag_err, tag_reply) {
					reply.tags = tag_err ? [] : tag_reply;
					resources.push(reply);
					if (index == array.length -1){
						res.send(resources);
					}
				});
			}
		});
	});
});
module.exports = router;