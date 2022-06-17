//const { sequelize } = require('../models');
const model = require('../models');
const userData = model.UserDetails;
const UserInfo = model.UserInfo;
const {Op} = require('sequelize');
const jwt = require('jsonwebtoken');
module.exports={
    getData : async()=>{
        try {
            const getdata = await userData.findAll();
            return getdata;
        } catch (error) {
            throw error;
        }
    },
    createData : async(value,token)=>{
        try {
            const createdata = await userData.create(value);
            const passToken = jwt.sign(createdata.toJSON(),token);
            console.log(passToken);
            return passToken;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    fetchData : async(uid)=>{
        try {
            const fetchData = await userData.findAll({
                where:{
                    id:uid
                }
            });
            return fetchData;
        } catch (error) {
            throw error;
            
        }
    },
    deleteData : async(uid)=>{
        try {
            const deleteData = await userData.destroy({
                where:{
                    id:uid   
                }
            });
            return deleteData;
        } catch (error) {
            throw error;
            
        }
    },
    updateData : async(uid,value)=>{
        try {
            let updateData = await userData.update(value,{
                where : {
                    id : uid
                }
            });
            return updateData;
        } catch (error) {
            throw error;            
        }
    },
    orderWiseData : async () =>{
        try {
            let viewData = await userData.findAll({
                order : [
                    ['id', 'DESC']
                ]
            });
            return viewData;
        } catch (error) {
            throw error;
        }
    },
    searchData : async (value)=>{
        try {
            let searchData = await userData.findAll({
                where: {
                    [Op.or]:[
                        {
                        firstName:{
                            [Op.like] : `%${value}%`
                        }},
                        {
                        lastName:{
                            [Op.like] : `%${value}%`
                            }
                        }
                    ]

                    
                }
            });
            return searchData;
        } catch (error) {
            throw error;
        }
    },
    pageCount : async(currentpage)=>{
        //console.log(currentpage);
        try {
            let val = await userData.findAndCountAll();
            let limitValue = 2;
            let offsetValue = (currentpage -1)*limitValue;
            let totalPage = Math.ceil(val.count/limitValue);
            let paginate = await userData.findAll({
                offset : offsetValue,
                limit :limitValue
            })
            return paginate;
            //console.log(offset);
        }
        catch(error){
            console.log(error);
                throw error;
        }   
},  

    connectAnotherTable : async()=>{
        try {
           let joinData = await userData.findAll({
                       //include :  UserInfo,
                    include : [{
                        model : UserInfo,
                        required: true //required use for inner join
                    }],
                    
                   // logging: console.log
           });
           return joinData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}