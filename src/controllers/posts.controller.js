import mongoose from "mongoose";
import Posts from "../models/posts.model.js";
import Users from "../models/users.model.js";

const getAllPost = async (req, res) => {
    const posts = await Posts.find({})
    res.json({
        posts
    })
}

const addPost = async (req, res) => {
    const { content, user } = req.body;
    if (!(content || user)) return res.json({
        message: "content or user is required",
    })

    const post = await Posts.create(
        { content, user },
    )
    await Users.findByIdAndUpdate(user, {
        $push: { post: post._id }
    })

    res.json({
        message: "post added",
        post
    })
}

const likePost = async (req, res) => {
    const { id, user } = req.query;

    if (!mongoose.isValidObjectId(id)) return res.json({
        message: "not a valid ID"
    })
    const post = await Posts.findByIdAndUpdate(
        { _id: id },
        { $push: { likes: user } },
        { new: true }
    )
    res.json({
        message: "like added",
        post
    })
}

export { getAllPost, addPost, likePost }