import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import vectorRoutes from "./routes/vector.routes.js"; // ✅ ADD THIS

// 🔥 TEMP CONFIG (TO CONFIRM SYSTEM WORKS)
const MONGO_URI = "mongodb://127.0.0.1:27017/ai_project";
const GEMINI_API_KEY = "AIzaSyAOd-Yjr6B19fI86YZfqwCUpQClXmXZVCY";
const PORT = 8000;

// expose Gemini key to services
process.env.GEMINI_API_KEY = GEMINI_API_KEY;

console.log("MONGO_URI:", MONGO_URI);
console.log("GEMINI_API_KEY loaded:", !!process.env.GEMINI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/vector", vectorRoutes); // ✅ ADD THIS

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("Mongo error:", err));

app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
