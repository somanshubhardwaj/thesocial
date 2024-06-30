import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import Following from "../models/following.model.js";
export const posts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const postByFollowing = async (req, res) => {
  try {
    const userId = req.user._id;
    const following = await Following.findOne({ userId }).populate("following");
    if (!following) {
      return res.status(200).json([]);
    }
    const posts = await Post.find({ userId: { $in: following.following } });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const postByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const postByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
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
