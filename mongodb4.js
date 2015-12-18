var mongo = require('mongodb').MongoClient;
//set url for mongodb database
var url = "mongodb://localhost:27017/learnyoumongo";



    mongo.connect(url, function(err, db) {
      if (err) throw err;
      //filter collection parrots to only show records with age greater than specified in process.argv[2]
      //only return fields with a 1, ie name and age, ignore fields with a 0
      db.collection('parrots').find({ age: { $gt: parseInt(process.argv[2])}}, {name:1, age: 1, _id:0}).toArray(function(err,docs) {
        if (err) throw err;
        //return result
        console.log(docs)
        //close db when complete      
      
      
              db.close();
    });
    });