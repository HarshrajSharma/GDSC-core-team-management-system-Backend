const mongoose=require("mongoose");


module.exports= function AddMembersToTeam(req, res){

    mongoose.model("TeamMembers").findOneAndUpdate({year: req.body.year}, {$push:{members: {name: req.body.name, role: req.body.role}}} , {new: true}, function(err, response){
        res.send(response);
    });
    console.log(req.body);
}