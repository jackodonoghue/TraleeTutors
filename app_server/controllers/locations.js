/* GET 'Register' page */
const register = function(req, res){
res.render('index', { title: 'Register' });
};
/* GET 'Login' page */
const login = function(req, res){
res.render('login', { title: 'Login' });
};
/* GET 'Discover Grinds' page */
const discoverGrinds = function(req, res){
res.render('index', { title: 'Discover Grinds' });
};
/* GET 'Book Grinds' page */
const bookGrinds = function(req, res){
res.render('index', { title: 'Book Grinds' });
};
module.exports = {
register,
login,
discoverGrinds,
bookGrinds
};
