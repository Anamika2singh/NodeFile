const express=require('express');
const app= express();

var moment = require('moment');

const bodyparser=require('body-parser');
const mongoose= require("mongoose");
const ejs= require('ejs');
const useroute=require('./routes/users');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))



// mongoose.Promise=global.Promise;
//  mongoose.connect('mongodb://localhost:27017/attend',{ useNewUrlParser: true,
//  useUnifiedTopology: true})
//  .then(()=>console.log('connection successful'))
//  .catch((err)=>console.error(err))

//database coonection with mongodb
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/attend',{useNewUrlParser:true})
.then(()=>console.log('connection successful'))
.catch((err)=>console.error(err))



app.set('view engine','ejs');
app.use('/',useroute);


app.get('/',(req,res)=>{
    res.send("listening port 3000");
});

app.listen(3000,()=>{
    console.log("listening port 3000");
});
