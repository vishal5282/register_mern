const mongoose = require("mongoose");

//Shcema
const employeesSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
    type:String,
    require:true
    },
    Email:{
        type:String,
    require:true,
    unique:true
    },
    Password:{
        type:String,
    require:true,
    unique:true
    },
    gender:{
        type:String,
    require:true,
    }
})


//noe we need to create a collection

const Register = new mongoose.model("Register",employeesSchema);

module.exports =Register;