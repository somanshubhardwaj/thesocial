import express from "express";

import { protectRoute } from "../middleware/protectroute.js";

const router = express.Router();

import {
  follow,
  unfollow,
  getFollowers,
  getFollowing,
} from "../controllers/follow.controller.js";

router.post("/:id/follow", protectRoute, follow);
router.post("/:id/unfollow", protectRoute, unfollow);
router.get("/:id/followers", protectRoute, getFollowers);
router.get("/:id/following", protectRoute, getFollowing);

export default router;
