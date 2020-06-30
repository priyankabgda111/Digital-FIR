
var bodyparser=require('body-parser');
const exp=require("express");
 const userApp=exp.Router();
 
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
 var ObjectId = require('mongodb').ObjectID;
 userApp.use(bodyparser.json());
 userApp.use(bodyparser.urlencoded({extended:false}))
const dbo=require('../db');
dbo.initDb();
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '2589baf9',
  apiSecret: 'x2ayMlC8QMYKx3DJ'
});
userApp.post('/otp',(req,res)=>{
     
    
    var usercollectionobj=dbo.getDb().dbo.collection("aadhaar");
   
   usercollectionobj.findOne({aadharnum:req.body.aadharnum},function(err,userobj){
       if(err)
       console.log(err);
       else if(userobj==null)
       res.send({message:"invalid aadhar number"})
       else
       {
         console.log("in post user api");

        
  nexmo.verify.request({

     number:userobj.phno,
     brand: 'Vonage',
     code_length: '4'
   }, (err, result) => {
     if(err)
     console.log(err);
     else
     {
          console.log(result);
          res.send({message:"success",data:result});
     }
   });
       // res.json(result);
      
       }
     })   
})


userApp.post('/verifyotp',(req,res)=>{
     
     //console.log(req.body);
     nexmo.verify.check({
          request_id: req.body.req_id,
          code: req.body.otp
        }, (err, result) => {
          if(err)
          console.log(err)
          else
          {
             console.log(result)
             result.status='0';
            res.send(result)
          } 
        });
})
 
 userApp.post('/getdetails',(req,res)=>{
  var usercollectionobj=dbo.getDb().dbo.collection("aadhaar");
  console.log(req.body);   
  usercollectionobj.findOne({aadharnum:req.body.aadharnum},function(err,userobj){

  if(err)
  console.log(err)
  else{
  console.log(userobj);
  res.send(userobj);
  }


  })
 })


userApp.post('/complaint',(req,res)=>{
  var usercollectionObj=dbo.getDb().dbo.collection("complaints");
  usercollectionObj.insertOne(req.body,(err,userObj)=>{
    if(err)
    console.log("err during save",err);
    else    {      
      console.log(userObj);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    res.send(userObj.insertedId);}
  })
})

userApp.post('/describe',(req,res)=>{
  var usercollectionobj=dbo.getDb().dbo.collection("complaints");
  console.log(req.body.insertedId);
  usercollectionobj.update({_id:ObjectId(req.body.insertedId)},{$set:{"event":req.body.event}},function(err,userobj){
  if(err)
  console.log(err);
  else
  {
  res.send(userobj);
  }
  })

})

userApp.post('/suspectdetails',(req,res)=>{
  var usercollectionobj=dbo.getDb().dbo.collection("complaints");
  console.log(req.body.insertedId);
  usercollectionobj.update({_id:ObjectId(req.body.insertedId)},{$set:{"suspectdetails":req.body.suspectdetails}},function(err,userobj){
  if(err)
  console.log(err);
  else
  {
  res.send(userobj);
  }
  })

})

userApp.post('/previewfir',(req,res)=>
{
  var usercollectionobj=dbo.getDb().dbo.collection("complaints");
      usercollectionobj.findOne({_id:ObjectId(req.body.insertedId)},{$set:{"status":"pending"}},(err,userobj)=>
  {
    if(err)
    console.log(err);
    else{
    console.log(userobj.status);
    res.send(userobj);
    }
  })


})


userApp.post('/cancelfir',(req,res)=>{
  var usercollectionobj=dbo.getDb().dbo.collection("complaints");
 usercollectionobj.deleteOne({_id:ObjectId(req.body.insertedId)},(err,userobj)=>
 {
   if(err)
   console.log(err);
   else
   res.send(userobj);

 })
})
userApp.post('/viewfir',(req,res)=>{
  var usercollectionobj=dbo.getDb().dbo.collection("complaints");
  console.log(req);
  usercollectionobj.find({aadharnum:req.body.aadharnum}).toArray(function(err,userobj){
    if(err)
    console.log(err);
    else{
      console.log(userobj);
    res.send(userobj);
    }
  })
})

userApp.post('/register',(req,res)=>{
  console.log(req.body);
  var userCollectionObj=dbo.getDb().dbo.collection("users");
    userCollectionObj.findOne({username:req.body.username},(err,userObj)=>{
      if(err)
      {
    console.log("err during searching",err);
      }
    else if(userObj==null)
   {
      const pass=req.body.password;
      bcrypt.hash(pass, 10,function(error, hashed){
          // if (error) {
          //   console.log("err in hashing");
          // }
          // else{
          req.body.password = hashed;
     
  userCollectionObj.insertOne(req.body,(err1,userObj)=>{
      if(err1)
      console.log("err during save",err1);
      else 
      {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      res.send({message:"account created successfully"});}
    })

    })
}
    else
    res.send({message:"username  exists"});
  
  })
})


    
userApp.post('/login',(req,res)=>{
  var usercollectionobj=dbo.getDb().dbo.collection("users");
  usercollectionobj.findOne({username:req.body.username},(err,userobj)=>{
      if(err)
      {
          console.log("error in searching");
      }
      else if(userobj==null)
      res.send({message:"invalid user"});
      else{
          bcrypt.compare(req.body.password,userobj.password,(err1,result)=>
          {
              if(err1)
              {
                  console.log("error in password comparing");
              }
              else if(result==false)
               res.send({message:"invalid password"});
               else
               {
                jwt.sign({username:userobj.username},'sshh',{expiresIn:60},(err2,signedtoken)=>{
                   if(err2)
                   console.log("error in creating token");
                   else{
                       res.send({message:"signedtoken"});
                   }
               })
              
             //  res.send({message:"login success"});
            }
              })
            }
      })
})

userApp.post('/getprofile',(req,res)=>{

  var usercollectionobj=dbo.getDb().dbo.collection("users"); 
  usercollectionobj.findOne({username:req.body.username},(err,userobj)=>{

    if(err)
    console.log(err);
    else
    {
      var usercollectionobj1=dbo.getDb().dbo.collection("aadhaar");  
      usercollectionobj1.findOne({aadharnum:userobj.aadharnum},(err,userObj1)=>{
    
      if(err)
      console.log(err)
      else{
      console.log(userObj1);
      res.send(userObj1);
      }});
    }
  


  


  })
 })


 
userApp.post('/getusercomplaints',(req,res)=>{

  var usercollectionobj=dbo.getDb().dbo.collection("users"); 
  usercollectionobj.findOne({username:req.body.username},(err,userobj)=>{

    if(err)
    console.log(err);
    else
    {
      var usercollectionobj1=dbo.getDb().dbo.collection("complaints");  
      usercollectionobj1.find({aadharnum:userobj.aadharnum}).toArray(function(err,userobj1){
        if(err)
        console.log(err);
        else{
          console.log(userobj1);
        res.send(userobj1);
        }
      })
    }

  })
 })


//export userApp
module.exports=userApp;
