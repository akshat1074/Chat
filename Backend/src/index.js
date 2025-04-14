import express from "express"
import dotenv from "dotenv";
import messageRoutes from "./routes/auth.route.js"
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors"

dotenv.config()
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
)

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }



const PORT = process.env.PORT;

app.listen(5001,()=>{
    console.log("server is running on port"+PORT);
    connectDB()
})

