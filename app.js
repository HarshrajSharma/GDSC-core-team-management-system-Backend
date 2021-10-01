const express=require("express");


/*==========================================<Routes>======================================================== */

const Home=require("./Routes/Home")



/*==========================================</Routes>======================================================== */

const app=express();

app.get("/", Home)




app.listen(5000, ()=>{
    console.log("Server started at port: 5000")
});