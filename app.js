const express=require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
require("dotenv").config();





/*==========================================<Routes>======================================================== */

const Home=require("./Routes/Home")
const CreateUserFormData=require("./Routes/CreateUserFormData");
const CoreUser = require("./Routes/CoreUser");

/*==========================================</Routes>======================================================== */

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*==========================================<Mongoose Connection>======================================================== */

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology:true,
    // useFindAndModify: false
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log("No Connection")
    console.log(err)
});

/*==========================================</Mongoose Connection>======================================================== */



app.get("/", Home);
app.post("/createuser", CreateUserFormData);
app.get("/coreuser", CoreUser)



app.listen(5000, ()=>{
    console.log("Server started at port: 5000")
});