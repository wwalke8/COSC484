const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema (
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: "User"},
        likes: {type: Number},
        location: {type: String},
        comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
    },
    {timestamps: true}
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;