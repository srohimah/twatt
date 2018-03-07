var express = require('express');
var router = express.Router();
var OAuth = require('oauth');

module.exports = {
    getTimeline (req, res){
        var oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            'D1WfaDOcNvHNGjzKOsqRQMNXo',
            '9PzrcfuWA0wLM68dAMfT3j3248B3BUYTm8Y70oBqMsO6d8Skvu',
            '1.0A',
            null,
            'HMAC-SHA1'
          );
          oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            '398848370-SzclQHCNDyPclK5CULzPVjRrUYcIsw3WW2n6NMmq', //test user token 
            'WJ3EsiuQH8Ia5OknSduFGVrY0j0OlKqs5cCYQsTzmG9HD', //test user secret             
            function (e, data){
                   res.status(200).send(data) 
            });
    }
}