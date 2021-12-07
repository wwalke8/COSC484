
const router = require('express').Router();
let Post = require('../posts.model');

router.route('/').get((req, res) => {
  Posts.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const title = req.body.title;
  const description = req.body.descripition;
  const user = req.body.user;
  const likes = Number(req.body.likes);
  const comments = req.body.comments;


  const newPost = new Post({
    title, description, user, likes, comments,
  });

  newPost.save()
  .then(() => res.json('Post added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;