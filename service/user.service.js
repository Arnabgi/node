const { sequelize } = require('../models');
const model = require('../models');
const userData = model.userdetails;
const {Op} = require('sequelize');
module.exports={
    getData : async()=>{
        try {
            const getdata = await userData.findAll();
            return getdata;
        } catch (error) {
            throw error;
        }
    },
    createData : async(value)=>{
        try {
            const createdata = await userData.create(value);
            return createdata;
        } catch (error) {
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
                    firstName:{
                        [Op.like] : `%${value}%`
                    }
                }
            });
            return searchData;
        } catch (error) {
            throw error;
        }
    }
}