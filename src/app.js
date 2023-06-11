const express = require('express')
const dotenv = require('dotenv')
const app = express();
dotenv.config({path:'./config.env'});
require('./db/conn')
app.use(express.json());
const port = process.env.PORT;

const studentRouter = require('./router/auth')
app.use(studentRouter);

app.get('/',(req,res) =>{
res.send("this is from server side")
})

app.listen(port , ()=>{
    console.log(`server is listning of port no ${port}`);
})