const mongoose=require("mongoose");


module.exports= function AddMembersToTeam(req, res){

    mongoose.model("TeamMembers").findOneAndUpdate(
        {year: req.body.year}, 
        {$push:{members: {
            name: req.body.name, 
            department: req.body.name,
            batch: req.body.batch,
            image: `${process.env.SERVER}/profile/${req.file.filename}`,
            linkedIn: req.body.linkedIn,
            github: req.body.github,
            role: req.body.role
            }
        }}, 
        {new: true}, function(err, response){
        res.send(response);
    });
    // console.log(req.body);
}