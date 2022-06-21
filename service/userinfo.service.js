const model = require('../models');
const db = model.UserInfo;
//const model = require('../custom_model');
//console.log(model);
//const db = model.UserInfo;
//console.log(db);
module.exports ={
    createInfoData : async(val)=>{
        try {
            let saveData = await db.create(val);
            return saveData;
        } catch (error) {
            console.log(error);
            throw error;            
        }
    }
}