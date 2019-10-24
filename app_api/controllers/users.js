const mongoose = require('mongoose');
const User = mongoose.model('Users');

const saveMe = function(req, res) {
  const newUser = new User({username: req.body.name, course: req.body.course, email: req.body.email, password: req.body.password});     
    User.create(newUser, function(err,newuser){
      
       if(err){
         res.status(500).send("Username exists");
       } else {
         res.redirect('/login'); //here the redirect takes place
       }
    })
  
};

const usersReadOne = function (req, res) {
  
  if (true) {
    User
    .find( { email:req.body.email })
      .exec((err, found) => {
        if (!found) {
          res	
            .status(404) 
            .json({	
              "message": "User with email " + email + " not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
            
          return; 	
        }

        res	           
         // .json(found);// write code to compare password to req.body.password
          for ( let user of found )
          {
            // Destructuring email and password from the current user
            let { email, password } = user;
            
            // Comparing email and pwd from active user with the ones in object
            if ( email === req.body.email && password === req.body.password )
            {
              // Found, redirect to form
              res.redirect('/grinds');
            }
            else{
              res
              .status(404)
              .json(err);
              return;
            }
        
      }})
  }
 };

// const usersCreate = function (req, res) {
//     User
//     .status(200)
//     .json({"status" : "success"});
//  };
// const grindsListByCourse = function (req, res) {
//     res
//     .status(200)
//     .json({"status" : "success"});
//  };
//  const grindsReadOne = function (req, res) {
// if (req.params && req.params.grindid) {
//     Grind
//     .findById(req.params.grindid)
//     .exec((err, location) => {
//         if (!location) {
//         res	
//             .status(404) 
//             .json({	
//             "message": "grindid not found"
//             });	 
//         return;
//         } else if (err) {
//         res	
//             .status(404) 
//             .json(err); 
//         return; 	
//         }
//         res		
//         .status(200)
//         .json(location);
//     });
// } else {		
//     res		
//     .status(404) 	
//     .json({	
//         "message": "No grindid in request"
//     });		
// }
// };
  
    
// const grindsUpdateOne = function (req, res) { 
//     res
//     .status(200)
//     .json({"status" : "success"});
// };
// const grindsDeleteOne = function (req, res) { 
//     res
//     .status(200)
//     .json({"status" : "success"});

// };

module.exports = {
saveMe,
usersReadOne
};
//   grindsListByCourse,
//   grindsCreate,
//   grindsReadOne,
//   grindsUpdateOne,
//   grindsDeleteOne

