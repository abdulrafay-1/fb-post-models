import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comments"
        }]
    },
    {
        timestamps: true
    }
)

const Posts = mongoose.model("Posts", PostSchema)

export default Posts