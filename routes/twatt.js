var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
const {getTimeline, search, postStatus} = require('../controllers/controller.twatt')

/* GET users listing. */
router.get('/timeline',getTimeline)
router.post('/search',search)
router.post('/postStatus',postStatus)

module.exports = router;
