// const mongoose = require("mongoose");
const express = require("express");
require("./db/conn")
const Students = require("./models/student");

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json())
// app.get("/",(req,res)=>{
    //     res.send("Hello wolrd by rameez khan")
    // })
    
    // create new students
    
    
    
    
    
app.post("/students",(req,res)=>{
    console.log(req.body)
    const user = new Students(req.body)
    user.save().then(()=>{
        res.status(201).send("Data stored")
    }).catch((err)=>{
        res.status(400).send(err)
    })

})
app.listen(port,()=>{
    console.log("Connection success");
})
