import express from "express"
import { addPost, getAllPost, likePost } from "../controllers/posts.controller.js";

const router = express.Router();

router.get("/post", getAllPost)
router.post("/post", addPost)
router.post("/likepost", likePost)


export default router;