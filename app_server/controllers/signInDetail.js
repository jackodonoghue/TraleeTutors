const signIn = function (req, res, name) {    
    req.session.userName = name;
    console.log("user: " + req.session.userName);
}

const signOut = function (req, res) {
    console.log("signing out");     
    req.session.userName = "";
}

const checkSignIn = function(req, res) {
    console.log("Namw: s" +req.session.userName);
    return req.session.userName;
}

module.exports = {
    signIn,
    signOut,
    checkSignIn
};