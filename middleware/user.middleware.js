const { body, validationResult } = require('express-validator');
module.exports = [
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    body("email").notEmpty().isEmail(),
    (req,res,next)=>{
        const errors = validationResult(req);
        let array = errors.array();
        if (!errors.isEmpty()) {
              //return res.status(400).json({ errors: errors.array() });
              array.forEach(element => {
                return res.json({status:400, message:"failed", errors:`${element.param} is invalid`})
          });
        }
        else{
          next()
        }
        
    }
]