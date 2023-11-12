const mongoose=require("mongoose")
const conn=async(req,res)=>{
    try{
        await mongoose
        .connect("mongodb+srv://vaibhavbanka12:Vaibhav1211@cluster0.mssuf9i.mongodb.net/")
        .then(()=>{ console.log("Connected")})
    }
    catch(error){
        res.status(400).json({
            message:"Not Connected"
        })
    }
};
conn();