const mongoose = require('mongoose');
const Grind = mongoose.model('Grind');

const grindsList = function (req, res) {

    Grind.find({}, function (err, data) {
        if (err) {
            console.log("error: " + err);
            return;
        }

        if (data.length == 0) {
            console.log("No record found")
            return;
        }
        res
            .status(200)
            .json(data);
    });

}

const getOneGrind = function (req, res) {

    Grind.findOne({ _id: req.params.grindid }, function (err, data) {
        console.log("Find one: " + data);

        res
            .status(200)
            .json(data);
    });
}


module.exports = {
    grindsList,
    getOneGrind
};
