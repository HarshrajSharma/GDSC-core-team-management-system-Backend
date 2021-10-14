const express=require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const multer=require("multer");
const path =require("path")

require("dotenv").config();





/*==========================================<Routes>======================================================== */

const Home=require("./Routes/Home")
const CreateUserFormData=require("./Routes/CreateUserFormData");
const CoreUser = require("./Routes/CoreUser");
const CreateNewCoreTeam = require("./Routes/CreateNewCoreTeam");
const CoreTeam=require("./Routes/CoreTeam");
const AddMembersToTeam=require("./Routes/AddMembersToTeam")

/*==========================================</Routes>======================================================== */

const app=express();
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.json({limit:1024*1024*20, type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoding' }));
app.use('/profile', express.static('./CoreMembers/images'));

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

app.use(cors());
const storage= multer.diskStorage({
    destination: (req, file, cb)=>{  //CB is a call back function
        cb(null, "./CoreMembers/images");
    },
    filename: (req, file, cb)=>{
        // console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload =multer({storage: storage});

app.get("/", Home);
// app.post("/createuser", CreateUserFormData)
app.get("/coreuser", CoreUser);
app.post("/createnewcoreteam", upload.single("image") ,CreateNewCoreTeam);
app.get("/coreteam", CoreTeam);
app.post("/addmemberstoteam",upload.single("image"), AddMembersToTeam);

app.listen(5000, ()=>{
    console.log("Server started at port: 5000")
});