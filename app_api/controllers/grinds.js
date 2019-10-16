const mongoose = require('mongoose');
const Loc = mongoose.model('Grind');


const grindsCreate = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const grindsListByCourse = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
 const grindsReadOne = function (req, res) {
if (req.params && req.params.grindid) {
    Loc
    .findById(req.params.grindid)
    .exec((err, location) => {
        if (!location) {
        res	
            .status(404) 
            .json({	
            "message": "grindid not found"
            });	 
        return;
        } else if (err) {
        res	
            .status(404) 
            .json(err); 
        return; 	
        }
        res		
        .status(200)
        .json(location);
    });
} else {		
    res		
    .status(404) 	
    .json({	
        "message": "No grindid in request"
    });		
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
