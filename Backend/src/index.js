import express from "express";
import dotenv from "dotenv"
import authRoute from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js"
import cors from "cors";
dotenv.config();
const app = express();

const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser()); // chutiayapa hai ye bhai dhyan rakhna
app.use("/api/auth", authRoute)
app.use("/api/message", messageRoutes)
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}
))
// app.use(cors({ credentials: true, origin: "https://localhost:3000" }))

app.listen(PORT, () => {
  console.log("Server is Running on port no : " + PORT)
  connectDB();
})  