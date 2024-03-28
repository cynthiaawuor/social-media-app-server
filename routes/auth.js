import express from "express";
import { auth, register } from "../controllers/auth.js";

const router = express.Router();
//  router.get("/auth/:userId", auth);
 router.post("/register", register)
//  router.post("/login", login)

 export default router;