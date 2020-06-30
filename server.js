
const exp=require("express");
//get express obj
const app=exp();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const path=require("path");
app.use(exp.static(path.join(__dirname,'./digfir/dist/digfir')))


app.set('view component','ejs');

const userApp=require('./apis/userapi');

app.use("/user",userApp);

app.listen(5000,()=>{console.log("server running");})




// //get db url
// const dburl="mongodb+srv://priyanka_bgda:priya111@cluster0-gpfik.mongodb.net/test?retryWrites=true&w=majority";

// //import mongodb client
// const mc=require("mongodb").MongoClient;

//assign a  port no

