import Express from "express";
import { getPosts, addPosts } from "../controllers/posts.js";

const router = Express.Router()

router.get("/", getPosts)
router.post("/", addPosts)

export default router