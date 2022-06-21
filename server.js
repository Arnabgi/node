const express = require('express');
const cors = require('cors');
const route = require('./router');
const userInfoRoute = require('./router/userinfo.router');
//const jwt = require('jsonwebtoken');
const dotnev = require('dotenv');

dotnev.config();
const app = express();
const port = 3100;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/path/v1",route);
app.use("/user-info/v1",userInfoRoute);
app.listen(port,()=>{
    console.log(`Server is running port ${port}`);
});