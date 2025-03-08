import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser()); // Required for handling cookies

// ✅ FIX: Use a single CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // Correct origins
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoutes);

// Start Server
app.listen(PORT, () => {
  console.log("Server is Running on port no:", PORT);
  connectDB();
});
