var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/projectdb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
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
});
