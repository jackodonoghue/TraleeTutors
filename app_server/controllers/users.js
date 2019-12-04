const request = require('request');
const { validUserName, validPassword } = require('./validator.js');
const signIn = require('./signInDetail.js');

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

    req.checkBody('course', 'invalid course').notEmpty().isAlpha();
    req.checkBody('email', 'invalid email').notEmpty().isEmail();

    const errors = req.validationErrors();
    const messages = [];

    if (errors) {

        errors.forEach(function (error) {
            messages.push(error.msg);
        });
    }

    if (!(validUserName(requestOptions.json.username)) || !(messages.length == 0) || (!validPassword(requestOptions.json.password))) {
        console.log(errors)
        loadRegisterErr(req, res);
    } else {
        request(
            requestOptions,
            (err, response) => {
                if (response.statusCode != 200) {
                    loadRegisterErr(req, res);
                }
                else {
                    res.redirect('/grinds');
                }
            }
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
        (err, response) => {
            if (response.statusCode === 200) {
                console.log(req.session.userName);
                res.redirect('/grinds');
            }
            else {
                res.redirect('/login/invalid_details');
            }
        }

    );


}

/* Remove Account */

const loadRemove = function (req, res) {
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

    if (!validPassword(requestOptions.json.password)) {
        res.redirect('/login/invalid_details');
    }
    else {
        request(
            requestOptions,
            (err, response) => {
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

const loadRegisterErr = function (req, res) {
    res.render('login-err', { title: 'Register', signedIn: signIn.checkSignIn(req, res) });
}


const _renderLoginPage = function (req, res) {
    req.session.userName = "";
    res.render('userPass', { title: 'Login', signedIn: signIn.checkSignIn(req, res) });
}

const _renderLoginErr = function (req, res) {
    res.render('login-err', { title: 'Login',  });
}

const _renderRegisterPage = function (req, res) {
    res.render('register', { title: 'Register',  signedIn: signIn.checkSignIn(req, res)});
}

const _renderUpdatePage = function (req, res) {
    res.render('update', { title: 'Update Account' });
}


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