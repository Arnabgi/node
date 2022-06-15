const express = require('express');
const route = require('./router');
const app = express();
const port = 3100;
app.use(express.json());
app.use("/path/v1",route);
app.listen(port,()=>{
    console.log(`Server is running port ${port}`);
});