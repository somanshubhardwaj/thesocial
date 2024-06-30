import Post from "../models/post.model.js";
import User from "../models/user.model.js";
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().select("-commentsList -likedBy -sharedBy -_v -updatedAt").populate("userId", "username profilePic fullName");
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const postByFollowing = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-commentsList -likedBy -sharedBy -_v -updatedAt").populate("userId", "username profilePic fullName");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const following = user.following;
    const posts = await Post.find({ userId: { $in: following } });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getPostByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId }).select("-commentsList -likedBy -sharedBy -_v -updatedAt").populate("userId", "username profilePic fullName");
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId).populate("userId", "username profilePic fullName");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const createPost = async (req, res) => {
  try {
    const { postText } = req.body;
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newPost = new Post({
      postText,
      userId,
    });
    if (!newPost) {
      return res.status(400).json({ message: "Post not created" });
    }
    await newPost.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.likedBy.includes(userId)) {
      return res.status(400).json({ message: "Post already liked" });
    }
    post.likedBy.push(userId);
    await post.save();
    res.status(200).json({ message: "Post liked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const unlikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (!post.likedBy.includes(userId)) {
      return res.status(400).json({ message: "Post not liked" });
    }
    post.likedBy = post.likedBy.filter((id) => id !== userId);
    await post.save();
    res.status(200).json({ message: "Post unliked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const commentOnPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment } = req.body;
    const userId = req.user._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const newComment = {
      userId,
      comment,
    };
    post.commentsList.push(newComment);
    await post.save();
    res.status(201).json({ message: "Comment added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.commentsList = post.commentsList.filter(
      (comment) => comment._id.toString() !== commentId
    );
    await post.save();
    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getLikes = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId).populate("likes");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post.likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId).populate("comments.userId");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post.comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getCommentById = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comment = post.comments.find(
      (comment) => comment._id.toString() === commentId
    );
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const sharePostList = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId).populate("sharedBy");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post.sharedBy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const sharePostCount = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const count = post.sharedBy.length;
    res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const sharePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.sharedBy.includes(userId)) {
      return res.status(400).json({ message: "Post already shared" });
    }
    post.sharedBy.push(userId);
    await post.save();
    res.status(200).json({ message: "Post shared" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
