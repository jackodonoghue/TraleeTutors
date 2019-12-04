const { check, validationResult } = require('express-validator');

 const userValidationRules = (email, course) => {
    
//         if(! || !)
//           return false;
        
         return true
    
 }

const validate = (req, res, next) => {
  const errors = validationResult([check(req.email).isEmail(), check(req.course).isAlpha()]);
  if (errors.isEmpty()) {
    return errors;
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return {errors: extractedErrors,}

}

module.exports = {
  userValidationRules,
  validate,
}