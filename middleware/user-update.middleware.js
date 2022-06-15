const { body, validationResult } = require('express-validator');
module.exports = [
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    body("email").notEmpty().isEmail(),
    (req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          else{
            next()
          }
    }
]