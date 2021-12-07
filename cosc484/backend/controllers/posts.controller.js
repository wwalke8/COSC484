const db = require("../models/posts.model");
const Post = db.posts;
 
// Create and Save a new Post
exports.create = (req, res) => {
   // Validate request
   if (!req.body.title || !req.body.description) {
       res.status(400).send({ message: "Content can not be empty!" });
       return;
   }
 
   const post = new Post({
        title = req.body.title,
        description = req.body.description,
        user = req.body.user,
        likes = Number(req.body.likes),
        comments = req.body.comments,
   });
 
   // Save Post in the database
    Post
       .save(post)
       .then(data => {
           res.send(data);
       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Some error occurred while creating the User."
           });
       });
};
 
// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
   const title = req.query.title;
   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
 
   Post.find(condition)
       .then(data => {
           res.send(data);
       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Some error occurred while retrieving post."
           });
       });
};
 
// Find a single Post with an id
exports.findOne = (req, res) => {
   const id = req.params.id;
 
   Post.findById(id)
       .then(data => {
           if (!data)
               res.status(404).send({ message: "Not found Post with id " + id });
           else res.send(data);
       })
       .catch(err => {
           res
               .status(500)
               .send({ message: "Error retrieving Post with id=" + id });
       });
};
 
// Update a Post by the id in the request
exports.update = (req, res) => {
   if (!req.body) {
       return res.status(400).send({
           message: "Data to update can not be empty!"
       });
   }
 
   const id = req.params.id;
 
   Post.findByIdAndUpdate(id, req.body)
       .then(data => {
           if (!data) {
               res.status(404).send({
                   message: `Cannot update Post with id=${id}. Maybe Post was not found!`
               });
           } else res.send({ message: "Post was updated successfully." });
       })
       .catch(err => {
           res.status(500).send({
               message: "Error updating Post with id=" + id
           });
       });
};
 
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
   const id = req.params.id;
 
   Post.findByIdAndRemove(id)
       .then(data => {
           if (!data) {
               res.status(404).send({
                   message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
               });
           } else {
               res.send({
                   message: "Post was deleted successfully!"
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Could not delete Post with id=" + id
           });
       });
};
 
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
   exports.deleteAll = (req, res) => {
       Post.deleteMany({})
           .then(data => {
               res.send({
                   message: `${data.deletedCount} Posts were deleted successfully!`
               });
           })
           .catch(err => {
               res.status(500).send({
                   message:
                       err.message || "Some error occurred while removing all posts."
               });
           });
   };
};
 

