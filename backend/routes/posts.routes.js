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

router.post("/:postId/like", protectRoute, );
router.post("/:postId/unlike", protectRoute, );
router.post("/:postId/comment", protectRoute, );
router.post("/:postId/comment/:commentId", protectRoute, );

router.get("/:postId/likes", protectRoute, );
router.get("/:postId/comments", protectRoute, );
router.get("/:postId/comments/:commentId", protectRoute, );




export default router;
