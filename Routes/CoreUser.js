const mongoose=require("mongoose");

module.exports=function CoreUser(req, res){
    
    mongoose.model("User").find(function(err,user){
        if(err){
            console.log(err)
        }else{
            // console.log(user)
            res.send(user);
        }
    })
    
   
}