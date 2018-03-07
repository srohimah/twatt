var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
const {getTimeline} = require('../controllers/controller.twatt')

/* GET users listing. */
router.get('/timeline',getTimeline)

module.exports = router;
