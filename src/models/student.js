const mongoose = require("mongoose");
const validator = require("validator");
const studentsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique:[true,"Email already present"],
        validate(value){
           if(!validator.isEmail(value)){
               throw new Error("Email is not valid")
           };
        }
        
    },
    phone:{
        type:String,
        min : 10,
        max : 10,
        required : true,
        unique : true
    },
address:{
    type: String,
    required : true
}



})

const Students = new mongoose.model("Student",studentsSchema)
module.exports = Students;





