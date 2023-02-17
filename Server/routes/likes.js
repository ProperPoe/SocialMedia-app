import Express from "express";
import { getLikes, addLikes, deleteLikes } from "../controllers/likes.js";

const router = Express.Router()

router.get("/", getLikes)
router.post("/", addLikes)
router.delete("/", deleteLikes)

export default router