var validUrl = require('valid-url');
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = "mongodb://jordan:mack@ds149551.mlab.com:49551/fcc-backend"
var short;
var long;

module.exports = function(app){

app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });


app.route('/https://:url')
    .get(function(req, res) {
      long = 'https://'+req.params.url;
      if (validUrl.isUri(long)){
        //use database.js call function and pass query as argument
        MongoClient.connect(url, function(err, db){
          if(err) throw err
          var collection = db.collection('short-urls');
          var cursor = collection.find( { "real-URL": long } );
          
          cursor.toArray(function(err, docs){
            if(docs.length == 0) {
              
              var num = collection.count({}, function(err,count){
                console.log(count);
              });
              short = "https://mack-url-shortener.glitch.me/"+num;
            }
            else {
              short = docs[0]['short-URL'];
            }
             var json = {
                "Original URL": long,
                "Short URL": short
              }
             res.send(json);
            db.close();
          });
        });
      }
      else{
        res.send("Not a valid URL")
      }
})
}