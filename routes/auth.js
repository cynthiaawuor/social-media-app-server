import express from "express";
import { auth } from "../controllers/auth.js";

const router = express.Router();
 router.get("/auth/:userId", auth);

 export default router;

