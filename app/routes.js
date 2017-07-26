var validUrl = require('valid-url');

module.exports = function(app){
  
  app.route('/:query')
  


app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });


app.route('/:query')
    .get(function(req, res) {
      var query = req.params.query;
      if (validUrl.isUri(query)){
        
      }
      else{
        
      }
      
})
  
  
  
  
  
  
}