import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
        },
        post: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Posts"
        }]
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model("Users", UsersSchema)

export default Users