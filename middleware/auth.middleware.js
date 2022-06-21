const jwt =require('jsonwebtoken');
module.exports =[
    async(req,res,next)=>{
        try {
            let token = req.headers['authorization'].split(" ")[1];
            jwt.verify(token,process.env.AUTH_SECRET_KEY);
            //return res.json({status:200,message:"Authorization Sucess",data:decoded});
            next();
        } catch (error) {
            return res.json({status:401,message:"Authorization Failed"});
        }
    }
]