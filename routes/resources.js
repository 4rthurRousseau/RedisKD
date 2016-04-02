var express = require('express');
var router = express.Router();
var service = require('../services/resourceService')

router.get('/', function(req, res, next) {
	service.get('resources',function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});
/**
* Retourne la resource
* @param keyResource Key de la resource 
**/
router.get('/:keyResource', function(req, res, next) {
	var key = req.params.keyResource;
	service.getEntity('resources:' + key,function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});
module.exports = router;