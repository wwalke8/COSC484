
const router = require('express').Router();
let User = require('../users.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const isArtist = Boolean(req.body.isArtist);
  const following = req.body.following;
  const followers = req.body.followers;
  const location = req.body.location;

  const newUser = new User({
      username, password, email, isArtist, following, followers, location
    });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;