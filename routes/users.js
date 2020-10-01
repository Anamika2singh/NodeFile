const express= require('express');
const router=express.Router();
const objid=require('mongodb').ObjectID;
const userschema=require('../schema/user');
const Attendance=require('../schema/fillattend');
router.get('/userform',function(req,res,next){
    res.render('user-form');
})
router.post('/userform',function(req,res,next){

    console.log(req.body);
    const mybodydata={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        mobile:req.body.mobile,
    }
    var data=userschema(mybodydata);
    data.save(function(err,user){
        if(err){
            console.log(err)
            res.render('user-form',{message:'user not registered '});
        }else{
            let user_id = user._id;
            Attendance({user_id:user_id,arrivaltime:req.body.arrivaltime,
                departuret:req.body.departuret,date:req.body.date}).save().then(user=>console.log(user)).catch(err=>console.log(err))
            res.render('user-form',{message:'user registered '});
        }
    });
    
});


router.get('/displayt',function(req,res){
    userschema.find(function(err,users){
        if(err){
            console.log(err);
        }else{
            res.render('display',{users:users});
            console.log(users);
        }
    });     
});
   
 
   
module.exports= router;