const
    MongoClient = require('mongodb').MongoClient,
    dbhost = 'localhost',
    dbuser = 'user:',
    dbpass = 'pass@',
    dbname = 'db',
    dbconn = String.format("mongodb://{0}{1}/{2}", dbuser + dbpass ,dbhost, dbname);
module.exports = (app)=>{
    MongoClient.connect(dbconn, (err, db)=>{
        if (err || !db) {
            console.log(err);
            process.exit(-1);
        } else {
            db = db.db("dzrsdr");
            app.db = db;
        }
    });
}
