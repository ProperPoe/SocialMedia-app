import express from "express";
import { getViewPost, deleteViewPost, updateViewPost } from "../controllers/viewPost.js";

const Router = express.Router()

Router.get("/:id", getViewPost )
Router.delete("/:id", deleteViewPost )
Router.put("/:id", updateViewPost )

export default Router