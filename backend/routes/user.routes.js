import express from "express";
import { protectRoute } from "../middleware/protectroute.js";

import { getUsersForSidebar ,getUserInfo} from "../controllers/user.controller.js";
const router = express.Router();
router.get("/", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getUserInfo);

export default router;
