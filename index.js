import  Express  from "express";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import commentRouter from "./routes/comments.js";
import likeRouter from "./routes/likes.js";
import authRouter from "./routes/auth.js"

const app = Express();

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})