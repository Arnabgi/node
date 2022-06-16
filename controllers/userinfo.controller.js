const service = require('../service/userinfo.service');
module.exports = {
    createdUserInfo: async(req,res)=>{
        try {
            let infoValue = {
                uid : req.body.uid,
                qualification : req.body.qualification
            }
            let infoData = await service.createInfoData(infoValue);
            res.json({status:200, message:"success", data:infoData});
        } catch (error) {
            res.send(error);
        }
    }
}