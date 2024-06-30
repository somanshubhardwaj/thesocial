import express from "express";
import { protectRoute } from "../middleware/protectroute.js";
import {
  getPosts,
  getPostByFollowing,
  getPostByUser,
  getPostById,
  createPost,
} from "../controllers/posts.controller.js";
const router = express.Router();

router.get("/", protectRoute, getPosts);
router.get("/following", protectRoute, getPostByFollowing);
router.get("/user/:userId", protectRoute, getPostByUser);
router.get("/:postId", protectRoute, getPostById);
router.post("/", protectRoute, createPost);

export default router;
