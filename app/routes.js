module.exports = function(app){
  
  app.route('/:query')
  


app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });

}