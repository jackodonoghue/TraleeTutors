const request = require('request');
const { userValidationRules, validate } = require('./validator.js');

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

    

    const errors = validate([req.body.email, req.body.course]);



    if (!(_validUserName(requestOptions.json.username)) || !(errors.length == 0)|| (!_validPassword(requestOptions.json.password))) {
        console.log(errors)
        loadRegisterErr(req, res);
    } else {
        request(
            requestOptions,
            res.redirect('/grinds')
        );
    }
};



/* GET 'Login' page */
const loadLogin = function (req, res, next) {
    _renderLoginPage(req, res, next);
};

const loadLoginErr = function (req, res, next) {
    _renderLoginErr(req, res, next);
};

const login = function (req, res) {
    const path = '/api/login';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: {
            email: req.body.email,
            password: req.body.password
        }
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 200) {
                res.redirect('/grinds');
            }
            else {
                res.redirect('/login/invalid_details');
            }
        }

    );


}

/* Remove Account */

const loadRemove = function (req, res, responseBody) {
    res.render('userPass', { title: 'Remove Account' });
}

const remove = function (req, res) {
    const path = '/api/remove';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'DElETE',
        json: {
            email: req.body.email,
            password: req.body.password
        }
    };
    request(
        requestOptions,
        res.redirect('/')
    );
};

/* Update Account */

const loadUpdate = function (req, res) {
    _renderUpdatePage(req, res);
}

const update = function (req, res) {

    const path = '/api/update';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'PUT',
        json: {
            updateName: req.body.updateName,
            username: req.body.name,
            course: req.body.course,
            email: req.body.email,
            password: req.body.password
        }
    };

    if (!_validPassword(requestOptions.json.password)) {
        res.redirect('/login/invalid_details');
    }
    else {
        request(
            requestOptions,
            (err, response, body) => {
                if (response.statusCode === 200) {
                    res.redirect('/grinds');
                }
                else {
                    res.redirect('/login/invalid_details');
                }
            }
        );
    }
};

const loadRegisterErr = function (req, res, responseBody) {
    res.render('login-err', { title: 'Register' });
}


const _renderLoginPage = function (req, res, responseBody) {
    res.render('userPass', { title: 'Login' });
}

const _renderLoginErr = function (req, res, responseBody) {
    res.render('login-err', { title: 'Login' });
}

const _renderRegisterPage = function (req, res, responseBody) {
    res.render('register', { title: 'Register' });
}

const _renderUpdatePage = function (req, res, responseBody) {
    res.render('update', { title: 'Update Account' });
}

const _validPassword = function (password) { return (!password.match("(?=.*[0-9])")) ? false : true };//password must contain number   

var regex = /^(?![ .]+$)[a-zA-Z .]*$/gm;

const _validUserName = function (name) { return (!name.match(regex)) ? false : true };// must be alpha with spaces   

module.exports = {
    loadRegister,
    register,
    loadLogin,
    login,
    loadLoginErr,
    loadRemove,
    remove,
    loadUpdate,
    update,
    loadRegisterErr
};