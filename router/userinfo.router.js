const express = require('express');
const route = express.Router();
const controller = require('../controllers/userinfo.controller');
route.post('/create-info',controller.createdUserInfo);
module.exports = route;