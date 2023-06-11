const mongoose = require('mongoose')
const URL = process.env.DATABASE;
mongoose.connect(URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{
    console.log("connection successfully");
})