import express from "express"
import { addComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/comment", addComment)


export default router;