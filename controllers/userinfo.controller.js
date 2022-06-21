const service = require('../service/userinfo.service');
const multer = require('multer');
const uploadImage = multer({dest:'../uploads'}).single("upload");
// console.log(imageStorage);
module.exports = {
    createdUserInfo: async(req,res)=>{
        try {
            let infoValue = {
                uid : req.body.uid,
                qualification : req.body.qualification,
                upload : uploadImage
            }
            let infoData = await service.createInfoData(infoValue);
            res.json({status:200, message:"success", data:infoData});
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
}