var nameRegex = /^(?![ .]+$)[a-zA-Z .]*$/gm;
const passwordRegex = "(?=.*[0-9])";

const validPassword = function (password) { return (!password.match(passwordRegex)) ? false : true };//password must contain number   

const validUserName = function (name) { return (!name.match(nameRegex)) ? false : true };// must be alpha with spaces   

module.exports = {
  validPassword,
  validUserName,
}