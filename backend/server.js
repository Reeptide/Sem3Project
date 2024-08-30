const express = require('express');
const mongoose = require('mongoose');
const app = express() ;
const port = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://Narendhar:123@nodeexpressproj.jmz6ljm.mongodb.net/mydatabase?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>
console.log("DB READY")).catch(err =>console.error('Error' ,err));
;

app.use(express.json());
app.get('/', (req,res)=>{
    res.send("test");
});
app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
    
});
