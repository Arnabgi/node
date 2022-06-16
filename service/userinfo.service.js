const model = require('../models');
const db = model.UserInfo;
module.exports ={
    createInfoData : async(val)=>{
        try {
            let saveData = await db.create(val);
            return saveData;
        } catch (error) {
            throw error;            
        }
    }
}