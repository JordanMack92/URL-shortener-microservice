var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = "mongodb://jordan:mack@ds149551.mlab.com:49551/fcc-backend"


function returnUrl(long){

}















MongoClient(url, function(err, db){
  if (err) throw err
  
  var collection = db.collection('short-urls');
  console.log(collection);
  db.close();
});