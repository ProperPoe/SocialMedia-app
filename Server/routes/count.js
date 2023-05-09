import express from "express";
import { getCount, addCount, deleteLikeCount, deleteCount } from "../controllers/count.js"

const Router = express.Router()

Router.get("/", getCount)
Router.post("/", addCount)
Router.delete("/", deleteLikeCount)
Router.delete("/:id", deleteCount)


export default Router