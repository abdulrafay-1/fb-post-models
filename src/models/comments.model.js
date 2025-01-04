import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
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
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Posts",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Comments = mongoose.model("Comments", CommentSchema)

export default Comments