import Express from "express";
import { getPosts, addPosts, deletePosts, updatePosts } from "../controllers/posts.js";

const router = Express.Router()

router.get("/", getPosts)
router.post("/", addPosts)
router.delete("/:id", deletePosts)
router.put("/:id", updatePosts)

export default router