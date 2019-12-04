const signIn = function (req, res, name) {
    req.session.userName = name;
}

const signOut = function (req, res) {
    req.session.userName = "";
}

const checkSignIn = function(req, res) {
    return req.session.userName;
}

module.exports = {
    signIn,
    signOut,
    checkSignIn
};