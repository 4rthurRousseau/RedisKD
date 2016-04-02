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
        if(err)
            res.sendStatus(err);
        res.sendStatus(reply);
    });
});
/**
* Retourne le libellé de tous les tags
**/
router.get('/', function(req, res, next) {
	service.get('tags',function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});
/**
* Retourne la position d'un tag
* @param keyTag Libellé du tag
**/
router.get('/rank/:keyTag', function(req, res, next) {
	var key = req.params.keyTag;
	service.getRank(key,function(err, reply) {
        if(err)
            res.sendStatus(err);
        res.sendStatus(reply);
    });
});
/**
* Retourne les resources du tag
* @param keyTag Key du tag 
**/
router.get('/:keyTag', function(req, res, next) {
	var key = req.params.keyTag;
	service.get('tags:' + key,function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});
module.exports = router;