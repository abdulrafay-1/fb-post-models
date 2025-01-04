import express from "express"
import { addUser, getAllUsers } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/user", getAllUsers)
router.post("/user", addUser)


export default router;