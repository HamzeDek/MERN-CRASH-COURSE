import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();


const app = express();

app.use(express.json());
app.post("/api/products",(req,res) => {

    const products = req.body;
    if(!products.name || !products.price || !products.image) {
        return res.status(400).json({success:false,message:"fadlan buuxi gododka"});
    }
    const newproduct = new product(product)
    try {
         newproduct.save();
        res.status(201).json({success:true,data:newproduct});
    } catch (error) {
        console.error("Error in create product",error.massage);
        res.status(500).json({success:false,massage:"server Error"})
        
    }
});



app.listen(5000,() => {
    connectDB();
    console.log("https://localhost:3000");
});



// pgKLGtyYhN0k36gJ