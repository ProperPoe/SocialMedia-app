import Express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = Express.Router()

router.post("/login", login)
router.post("/register", register)
router.get("/logout", logout)

export default router