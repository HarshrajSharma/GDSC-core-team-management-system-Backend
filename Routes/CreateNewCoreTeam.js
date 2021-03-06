const mongoose=require("mongoose")
const leadSchema=new mongoose.Schema({

    year: Number,
    leadName: String
});


const TeamLead=mongoose.model("TeamLead", leadSchema);

const teamSchema= new mongoose.Schema({

    year: Number,
    members : [{
        name: String,
        department: String,
        batch: Number,
        image: String,
        linkedIn: String,
        github: String,
        role: String
    }]

});


const TeamMembers=mongoose.model("TeamMembers", teamSchema);

module.exports=function CreateNewCoreTeam(req, res){
    let a=req.body;
    // console.log(a);
    TeamLead.find({"year": req.body.year}, async function (err, team){
        if(err){
            console.log(err)
        }else{
            if(team.length===0){
                console.log("Doesn't Exist");
                
                //Createing a new team in database with assigned lead
                const teamLead=new TeamLead(req.body);
                await teamLead.save();
                
                //Create a new team with Lead appointed a role
                const teamMembers= new TeamMembers({
                    year: req.body.year,
                    members: [{
                        name: req.body.leadName,
                        role: "GDSC Lead",
                        department: req.body.department,
                        batch: req.body.batch,
                        linkedIn: req.body.linkedIn,
                        github: req.body.github,
                        image: `${process.env.SERVER}/profile/${req.file.filename}`

                    }]
                });
                await teamMembers.save();
                res.send("Team Created")
            }else{
                console.log("Lead And Team Exist");
                res.send("Team already exists check data")
            }
        }
    });
    
    // res.send(req.body);
}