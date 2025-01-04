import Comments from "../models/comments.model.js";
import Posts from "../models/posts.model.js";


const addComment = async (req, res) => {
    const { content, user, post } = req.body;
    if (!(content || user)) return res.json({
        message: "content or user is required",
    })

    const comment = await Comments.create(
        { content, user, post },
    )
    await Posts.findByIdAndUpdate(post, {
        $push: { comments: comment._id }
    })

    res.json({
        message: "comment added",
        comment
    })
}

export { addComment }