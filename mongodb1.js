var mongo = require('mongodb').MongoClient;
//set url for mongodb database
var url = "mongodb://localhost:27017/learnyoumongo";



    mongo.connect(url, function(err, db) {
      if (err) throw err;
      //query db collection parrots based on age being greater than that passed through from process.argv[2], send result to docs
      db.collection('parrots').find({ age: { $gt: parseInt(process.argv[2])}}).toArray(function(err,docs) {
        if (err) throw err;
        //return result
        console.log(docs)
        //close db when complete
        db.close();
    });
    });