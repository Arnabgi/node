const express = require('express');
const route = require('./router');
const userInfoRoute = require('./router/userinfo.router');
const app = express();
const port = 3100;
app.use(express.json());
app.use("/path/v1",route);
app.use("/user-info/v1",userInfoRoute);
app.listen(port,()=>{
    console.log(`Server is running port ${port}`);
});