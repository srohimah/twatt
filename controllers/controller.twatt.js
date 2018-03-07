const OAuth = require('oauth');
require('dotenv').config()

const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.cKey,
    process.env.cSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );


module.exports = {
    getTimeline (req, res,next){
      console.log(process.env)
          oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
             process.env.aToken,            
             process.env.aTokenSecret,            
            function (e, data){
              if(e){
                next(e)
              }else{  
                res.send(data) 
              }
            });
    },
    
    search (req, res){
          oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.search}`,
            process.env.aToken,            
            process.env.aTokenSecret,                
            function (e, data){
                   res.send(data) 
            });
    },

    postStatus (req, res){
          oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`,
            process.env.aToken,            
             process.env.aTokenSecret,   
            req.body.status,   
            'twitter',
            function (e, data){
                   res.send(data) 
            });
    },
}