import express from "express"
import dotenv from "dotenv";
import messageRoutes from "./routes/auth.route.js"
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config()
const app = express();
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
const PORT = process.env.PORT;

app.listen(5001,()=>{
    console.log("server is running on port"+PORT);
    connectDB()
})

