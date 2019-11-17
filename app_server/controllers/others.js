/* GET home page */
const loadIndex = function (req, res) {
    res.render('index', { title: 'Tralee Tutors' });
};
module.exports = {
    loadIndex
};
