import express from "express";
import { getUsers } from "../controller/user.controller.js";
import protectRoute from "../middleware/protect.middleware.js";

const router = express.Router();
router.get("/", protectRoute, getUsers);

export default router;
