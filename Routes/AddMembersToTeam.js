const mongoose=require("mongoose");


module.exports= function AddMembersToTeam(req, res){

    mongoose.model("TeamMembers").findOneAndUpdate({year: req.body.year}, {$push:{members: {name: "Applee", role: "Applee"}}} , {new: true}, function(err, response){
        res.send(response);
    });
    console.log(req.body);
}