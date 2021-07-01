const express = require("express");

const app=express();
const path = require("path");

require("./db/conn");

const Register = require("./model/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/register",(req,res)=>{
    res.render("index")
});

app.post("/register", async(req,res)=>{
    try{
        // console.log(req.body.FirstName);
        // res.send(req.body.FirstName);

        const registerEmployee = new Register({
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            Password:req.body.Password,
            gender:req.body.gender
        })

      const registered=await  registerEmployee.save();
      res.status(201).render("index");

    }catch(error){
        res.status(400).send(error);
    }
});

app.get("/",(req,res)=>{
    res.send("Hello from the chaen")
});



app.listen(port,() =>{
    console.log(`Server running port number: ${port}`);
});