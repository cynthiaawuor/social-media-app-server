import express from "express";
import { getLike } from "../controllers/like.js";

const router = express.Router();

router.get("/likes/:likeId", getLike)

export default router;