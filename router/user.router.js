const express = require('express');
const route = express.Router();
const controlller = require('../controllers/user.controller');
const validation = require('../middleware/user.middleware');
const updateValidation = require('../middleware/user-update.middleware');
route.get('/getuser',controlller.getUserData);
route.post('/createuser',validation,controlller.createUserData);
route.get('/fetchuser/:uid',controlller.fetchUserData);
route.get('/descOrderWiseUser',controlller.orderWiseUser)
route.delete('/deleteuser/:uid',controlller.deleteUserData);
route.put('/updateuser/:uid',updateValidation,controlller.updateUserData);
route.get('/searchuser',controlller.searchUser);
route.get('/pagination',controlller.pagination);
route.get('/join-value',controlller.joinTable);
module.exports = route;