const mongoose = require('mongoose');
const User = mongoose.model('Users');

const saveNewUser = function (req, res) {
  const newUser = new User(
    {
      id: req.body._id,
      username: req.body.username,
      course: req.body.course,
      email: req.body.email,
      password: req.body.password
    }
  );

  console.log(newUser + "\n" + "that was new user");

  User.create(newUser, function (err, newuser) {
    if (err) {
      console.log("failed" + err + "\n" + res.status + "\n" + newUser.username);
    }
    else {
      console.log('user saved');
    }
  })
}

module.exports = { saveNewUser };


