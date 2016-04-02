var express = require('express');
var router = express.Router();
var service = require('../services/postService')

router.get('/:keyPost', function(req, res, next) {
	var key = req.params.keyPost;
	service.getEntity(key,function(err, reply) {
        if(err)
            res.send(err);
        res.send(reply);
    });
});

module.exports = router;