const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, reuired: true },
        isArtist: { type: Boolean, required: true },
        following: [{ type: Schema.Types.ObjectId, ref: "User" }],
        followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
        location: { type: String },
    }, {
    timestamps: true
})

module.exports = mongoose.model('users', User)