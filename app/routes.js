var validUrl = require('valid-url');
var db = require('./database.js');

module.exports = function(app){

app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });


app.route('/:query')
    .get(function(req, res) {
      var long = req.params.query;
      if (validUrl.isUri(long)){
        //use database.js call function and pass query as argument
        
        var short = db.returnUrl(long);
        
        var json = {
          "Original URL": long,
          "Short URL": short
        }
        
      }
      else{
        res.send("Not a valid URL")
      }
      
})
  
  
  
  
  
  
}