import Express from "express";
const app = Express();
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import postRoutes from "./routes/posts.js"
import notifyRoutes from "./routes/notifications.js"
import countRoutes from "./routes/count.js"
import viewRoutes from "./routes/viewPost.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import multer from "multer";

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)

    next()
})
app.use(Express.json())
app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../Client/my-app/public/upload')
    },
    filename: function (req, file, cb) {
        
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename)
})

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/notifications", notifyRoutes)
app.use("/api/count", countRoutes)
app.use("/api/view", viewRoutes)

app.listen(3001, () => {
    console.log("Server listening on port 3001")
})