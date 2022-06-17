const service = require('../service/user.service');
module.exports= {
    getUserData: async(req,res)=>{
        try {
            let getData = await service.getData();
            res.send(getData);   
        } catch (error) {
            res.send(error);
        }
    },
    createUserData : async(req,res)=>{
        try {
            let token =process.env.JWT_SECRET_KEY;
            let value = {
                firstName : req.body.firstName,
                lastName  : req.body.lastName,
                email     : req.body.email,
                password  : req.body.password
            }; 
             let createData = await service.createData(value,token);
             res.json({status:200, message:"success", data:createData});
        } catch (error) {
            res.send(error);
        }
    },
    
    fetchUserData : async(req,res)=>{
        try {
            let uid = req.params.uid;
            //console.log(uid);
            let fetchData = await service.fetchData(uid);
            res.json({status:200,message:"success",data:fetchData})

        } catch (error) {
            //console.log(error);
            res.send(error);
        }
    },
    deleteUserData : async(req,res)=>{
        try {
            let uid = req.params.uid;
            await service.deleteData(uid);
            res.json({status:200,message:"data deleted successfully"});
        } catch (error) {
            res.send(error);
        }
    },
    updateUserData : async(req,res)=>{
        try {
            let uid = req.params.uid;
            let value = {
                firstName : req.body.firstName,
                lastName  : req.body.lastName,
                email     : req.body.email
            }; 
            let updateData =  await service.updateData(uid,value);
            res.json({status:200, message:"Updated successfully"});
        } catch (error) {
            res.send(error);
        }
    },
    orderWiseUser : async(req,res)=>{
        try {
            let orderWiseData = await service.orderWiseData();
            res.json({status:200, message:"success", data:orderWiseData});
        } catch (error) {
            res.send(error);
        }
    },
    searchUser : async (req,res)=>{
        try {
            //let value = req.params.searchvalue;
            let value = req.query.searchvalue;
            let searchData = await service.searchData(value);
            res.json({status:200,message:"success",data:searchData});
        } catch (error) {
            res.send(error);
        }
    },
    pagination : async (req,res)=>{  
           try {
            let currentpage = req.query.pageno;
            let paginationData = await service.pageCount(currentpage);
            res.json({status:200,message:"success",data:paginationData})
           } catch (error) {
            res.send(error);
           }
    },

    joinTable: async(req,res)=>{
        try {
            let joinValue = await service.connectAnotherTable();
            res.json({status:200, message:"success", data:joinValue})
        } catch (error) {
            res.send(error);
        }
    }
}