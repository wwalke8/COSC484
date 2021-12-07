const router = require('express').Router();
let Comment = require('../comments.model');

router.route('/').get((req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const comment = req.body.comment;
  const user = req.body.user;
  const post = req.body.post;




  const newComment = new Comment({
      comment, user, post
    });

  newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;