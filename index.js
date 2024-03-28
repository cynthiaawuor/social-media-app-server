import  express  from "express";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import authRoutes from "./routes/auth.js"

const app = express();

app.use(express.json()); //middleware to read req.body.<params> //used in place of body.parser()
app.use("/auth", authRoutes)
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/likes", likeRoutes);

const port = 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})