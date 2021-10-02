const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({

    userId: Number,
    name: String,
    department: String,
    batch: Number,
    linkedin: String,
    github: String
});


const User=mongoose.model("User", userSchema);



module.exports= function CreateUserFormData(req, res){
    let a= req.body;
    console.log(a);
    const user=new User(req.body);
    user.save();

    res.send(a);
}