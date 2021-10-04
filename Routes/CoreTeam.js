const mongoose=require("mongoose");


module.exports=function CoreTeam(req, res){
    mongoose.model("TeamMembers").find(function (err, teamMembers){
        if(err){
            console.log(err);
        }else{
            res.send(teamMembers);
        }
    });
}