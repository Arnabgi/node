const { body, validationResult } = require('express-validator');
module.exports = [
    body("email").notEmpty(),
    body("password").notEmpty(),
    (req,res,next)=>{
        const errors = validationResult(req);
        let array = errors.array();
        if (!errors.isEmpty()) {
              //return res.status(400).json({ errors: errors.array() });
              array.forEach(element => {
                return res.json({status:400, message:"failed", errors:`please provide ${element.param}`});
          });
        }
        else{
          next();
        }
        
    }
];