var express = require('express');
var router = express.Router();
var service = require('../services/tagService')

router.get('/:keyTag', function(req, res, next) {
	var key = req.params.keyTag;
	service.get(key,function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});
router.get('/', function(req, res, next) {
	service.get('tags',function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});
module.exports = router;