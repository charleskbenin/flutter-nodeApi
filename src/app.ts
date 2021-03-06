import express from "express";
import { router } from "./routes/routes";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app=express();
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))
const PORTs = "8000"

// app.use("/", router)

// dotenv.config();

mongoose.connect(
    process.env.MONGOOSEDB_URL as string,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    ()=>{
        console.log("Db Connected ..........!!")
    }
);
app.use("/", router)

app.listen(process.env.PORT || PORTs, ()=>{
    console.log(`server running at localhost: ${PORTs}`)
    
})