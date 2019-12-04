const mongoose = require('mongoose');
const User = mongoose.model('Users');
const signIn = require('../../app_server/controllers/signInDetail.js');

const saveNewUser = function (req, res) {
  const newUser = new User(
    {
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      course: req.body.course,
      email: req.body.email,
      password: req.body.password
    }
  );
  User.findOne({ email: newUser.email }, function (errs, user) {
    if (user) {
      return res.status(500).send("email in use");
    }
    else{
      User.create(newUser, function (err, newuser) {
        if (err) {
          console.log("failed" + err + "\n" + res.status + "\n" + newUser.username);
          return res.status(500).send("cannot register user");
        }
        else {
          signIn.signIn(req, res, newUser.username);
          return res.status(200).send("user saved");
        }
      })
    }
  })
}

const login = function (req, res) {
  let emailEntered = req.body.email;
  let passwordEntered = req.body.password;

  User.findOne({ email: emailEntered, password: passwordEntered }, function (err, user) {

    if (err) {
      console.log(err);
      return res.status(500).send;

    }
    if (!user) {
      console.log("user: not found");
      return res.status(500).send();
    }
    else {
      console.log("user: " + user._id + " found");
      signIn.signIn(req, res, user.username);
      return res.status(200).send();
    }
  })
}

const removeUser = function (req, res) {
  let emailEntered = req.body.email;
  let passwordEntered = req.body.password;

  User.findOne({ email: emailEntered }, function (err, user) {
    console.log(user);

    if (err) {
      console.log(err);
      return res.status(500).send;

    }
    else if (!user) {
      console.log("user: not found");
      return res.status(404).send();
    }
    else {
      User.remove({ _id: user._id }, function (err) {
        if (!err) {
          console.log("User Removed");
          return res.status(200).send();
        }
        else {
          signIn.signOut(req, res);
          console.log(err);
          return res.status(500).send();
        }
      })
    }
  })
}

const update = function (req, res) {
  const nameForUpdate = req.body.updateName;

  const toBeUpdated = ({
    username: req.body.username,
    course: req.body.course,
    email: req.body.email,
    password: req.body.password
  });

  User.findOneAndUpdate(nameForUpdate, toBeUpdated, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.status(200).send("succesfully saved");
  });
}

module.exports = {
  saveNewUser,
  login,
  removeUser,
  update
};


