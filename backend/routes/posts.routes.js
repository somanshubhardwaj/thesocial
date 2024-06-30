import express from "express";
import { protectRoute } from "../middleware/protectroute.js";
import {
  getPosts,
  postByFollowing,
  getPostByUser,
  getPostById,
  createPost,
  likePost,
  unlikePost,
  commentOnPost,
  deleteComment,
  getLikes,
  getComments,
  getCommentById,
  sharePostList,
  sharePostCount,
  sharePost,
} from "../controllers/posts.controller.js";
const router = express.Router();

router.get("/", protectRoute, getPosts);
router.get("/following", protectRoute, postByFollowing);
router.get("/user/:userId", protectRoute, getPostByUser);

router.get("/:postId", protectRoute, getPostById);

router.post("/", protectRoute, createPost);
router.post("/:postId/like", protectRoute, likePost);
router.post("/:postId/unlike", protectRoute, unlikePost);
router.post("/:postId/comment", protectRoute, commentOnPost);
router.post("/:postId/comment/:commentId/delete", protectRoute, deleteComment);
router.get("/:postId/likes", protectRoute, getLikes);
router.get("/:postId/comments", protectRoute, getComments);
router.get("/:postId/comment/:commentId", protectRoute, getCommentById);
router.get("/:postId/share", protectRoute, sharePostList);
router.get("/:postId/share/count", protectRoute, sharePostCount);
router.post("/:postId/share", protectRoute, sharePost);

export default router;
