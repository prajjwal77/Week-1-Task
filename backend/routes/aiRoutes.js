import express from "express";
import { aiSearch } from "../controllers/aiController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/ai-search", protect, aiSearch);

export default router;
