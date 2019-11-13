const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://tralee-tutors.herokuapp.com/';
}

/* GET 'Register' page */
const loadRegister = function (req, res) {
    _renderRegisterPage(req, res);
}

const register = function (req, res) {
    const path = '/api/';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: {
            username: req.body.name,
            course: req.body.course,
            email: req.body.email,
            password: req.body.password
        }
    };
    request(
        requestOptions,
        res.redirect('/')
    );
};

const _renderRegisterPage = function (req, res, responseBody) {
    res.render('index', { title: 'Register' });
}


/* GET 'Login' page */
const login = function (req, res) {
    const path = '/api/login';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: {
        
        }
    };
    request(
        requestOptions,
        _renderLoginPage(req, res)
    );
};

const _renderLoginPage = function (req, res, responseBody) {
    res.render('login', { title: 'Login' });
}

module.exports = {
    loadRegister,
    register,
    login
}