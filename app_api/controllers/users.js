const mongoose = require('mongoose');
const User = mongoose.model('Users');

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

const login = function(req, res) {
      let emailEntered = req.body.email;
      let passwordEntered = req.body.password;

      User.findOne({email: emailEntered, password: passwordEntered}, function(err, user) {
        console.log(user);
        
        if(err) {
          console.log(err);
          return res.status(500).send;

        }        
        if(!user) {
          console.log("user: not found");
          return res.status(404).send();
        }
        else{
          console.log("user: " + user._id + " found");
          return res.status(200).send();
        }
      })
}

const removeUser = function(req, res) {
  let emailEntered = req.body.email;
  let passwordEntered = req.body.password;

  User.findOne({email: emailEntered, password: passwordEntered}, function(err, user) {
    console.log(user);
    
    if(err) {
      console.log(err);
      return res.status(500).send;

    }        
    if(!user) {
      console.log("user: not found");
      return res.status(404).send();
    }
    else{
      Grind.remove({_id: user._id}, function(err) {
        if(!err) {
          console.log("User Removed");
          return res.status(200).send();
        }
        else{
          console.log(err);
          return res.status(500).send();
        }
      })
    }
  })
}



module.exports = { 
  saveNewUser,
  login,
  removeUser
};


