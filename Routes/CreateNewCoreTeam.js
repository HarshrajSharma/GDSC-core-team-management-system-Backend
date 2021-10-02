const mongoose=require("mongoose")
const leadSchema=new mongoose.Schema({

    year: Number,
    lead: String
});


const TeamLead=mongoose.model("TeamLead", leadSchema);



module.exports=function CreateNewCoreTeam(req, res){
    let a=req.body;
    // console.log(a);
    const teamLead=new TeamLead(req.body);
    teamLead.save();
    res.send(req.body);
}