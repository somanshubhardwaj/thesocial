import User from "../models/user.model.js";

export const follow = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const followerId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (userId === followerId) {
      return res.status(400).json({ message: "You cannot follow yourself" });
    }
    const following = await User.findById(followerId);
    if (following.following.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You are already following this user" });
    }
    following.following.push(userId);
    await following.save();
    user.followers.push(followerId);
    await user.save();
    res.status(200).json({ message: "User followed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const unfollow = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const followerId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (userId === followerId) {
      return res.status(400).json({ message: "You cannot unfollow yourself" });
    }
    const following = await User.findById(followerId);
    if (!following.following.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You are not following this user" });
    }
    following.following = following.following.filter((id) => id !== userId);
    await following.save();
    user.followers = user.followers.filter((id) => id !== followerId);
    await user.save();
    res.status(200).json({ message: "User unfollowed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getFollowers = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findById(userId).populate("followers");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.followers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getFollowing = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findById(userId).populate("following");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.following);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
