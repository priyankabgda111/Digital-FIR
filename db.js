

//import mongodb client
const mc=require("mongodb").MongoClient;
var dbo;

const dburl="mongodb+srv://priyanka_bgda:priya111@cluster0-gpfik.mongodb.net/test?retryWrites=true&w=majority";


//to initialize db
function initDb(){
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err)
     console.log("error during db conn");
    else
    {
        console.log("connecting to db..");
      dbo=client.db("vps");  
    
    }
});
}

//to return db object
function getDb()
{
    console.log(dbo,"db has not initialized")
    return {      dbo:dbo,}
}

//export 2 functions
module.exports={
    getDb,
    initDb
}
