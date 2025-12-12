const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require('dotenv')
env.config();
const port = process.env.PORT
const mongourl = process.env.MONGODB_URL

mongoose.connect(mongourl)
    .then(() => console.log("Database connected successfully.."))
    .catch((err) => console.log(err));


app.use(express.json());

const userSchema = mongoose.Schema(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: Number, required: true, unique: true },
    },
    {
        timestamps: true
    }
);

const user = new mongoose.model("user", userSchema)

//API to add new user
app.post("/addUser",async (req, res) => {
    try {
        const newUser = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
        const u =new user(newUser)
        await u.save();
        res.status(201).json({
            message: "New user added successfully.."
        })
    }
    catch (err){
        res.status(400).json({
            message: "Error to add user"
        })
    }
})
//API to get all user details
app.get("/getUser",async (req,res) => {
    const receivedUsers=await user.find();
    res.status(200).json({
        message:"User details: ",
        users:receivedUsers
    })
})


//API to fetch user by id
app.get("/getUser/:id",async(req,res)=>{
    const id=req.params.id;
    const receivedUser1 = await user.findOne({id});
    if(!receivedUser1){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({
        message:"Fetched user by id",
        user:receivedUser1
    })
})

//API to update user
app.put("/updateUser/:id",async(req,res)=>{
    const id = req.params.id;
    const updateData={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }
    const updatedUser = await user.findOneAndUpdate({id},updateData,{new:true});
    if(!updatedUser){
        return res.status(404).json({message:"User not found"})
    }   
    res.status(200).json({
        message:"User updated successfully",
        user:updateData
    })
})
//API to delete user
app.delete("/deleteUser/:id",async(req,res)=>{
    const id = req.params.id;
    const deleteUser = await user.findOneAndDelete({id});
    if(!deleteUser){
        res.status(404).json({message:"User not found"})
    }
    res.status(200).json({
        message:"Deleted user successfully",
        user:deleteUser
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});     