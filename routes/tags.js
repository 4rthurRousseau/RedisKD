var express = require('express');
var router = express.Router();
var service = require('../services/tagService')

router.get('/:keyTag', function(req, res, next) {
	var key = req.params.keyTag;
	service.getEntity(key,function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});

module.exports = router;