const mongoose = require('mongoose');
const Grind = mongoose.model('Grind');


const grindsCreate = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const grindsListByCourse = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
    console.log('HELOO');
 };
 const grindsReadOne = function (req, res) {
    if (true) {
      Grind
      .find( { title:"Test" })
        .exec((err, found) => {
          if (!found) {
            res	
              .status(404) 
              .json({	
                "message": "userEmail not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            
        //    // .json(found);// write code to compare password to req.body.password
        //     for ( let grind of found )
        //     {
        //       // Destructuring email and password from the current user
        //       let { title, description } = user;
              
        //       // Comparing email and pwd from active user with the ones in object
        //       if ( email === req.body.email && password === req.body.password )
        //       {
        //         // Found, redirect to form
        //         res.redirect('/form');
        //       }
        //       else{
        //         res
        //         .status(404)
        //         .json(err);
        //         return;
        //       }
          
        })
    }
   };
    
const grindsUpdateOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};
const grindsDeleteOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});

};

module.exports = {
  grindsListByCourse,
  grindsCreate,
  grindsReadOne,
  grindsUpdateOne,
  grindsDeleteOne
};

