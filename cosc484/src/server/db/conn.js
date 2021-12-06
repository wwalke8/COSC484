const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB."); 
        
        db.createCollection( user,
            {
                userId: String,
                name: String,
                email: String,
                password: String,
                profilePicture: String,
                isArtist: Boolean
            }
        )
        
        db.createCollection ( posts,
            {
                postId: String,
                artistId: String,
                typeOfPost: String,
                comment: String,
                picture: String,
                links: String, 
                createdOn: String,
                isDeleted: Boolean,
                likeCount: Number
            }
        )
        
        db.createCollection ( postComments,
            {
                postId: String,
                userId: String,
                comment: String,
                isDeleted: Boolean
        
            }
        )
        
        db.createCollection ( postLikes,
            {
                postId: String,
                userId: String,
                isDeleted: Boolean
            }
        
        )
        
        db.createCollection (
            {
                artistId: String,
                userId: String
            }
        )
        
    
        db.close();
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};