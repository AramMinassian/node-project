import express from "express";
import postController from "../controllers/posts.controller";
import checkPosts from "../middlewares/checkPost";
import validateBody from "../middlewares/validateBody";

const postRouter = express.Router();


postRouter.get("/", postController.getPosts);

postRouter.get("/:id", checkPosts, postController.getPost);

postRouter.post("/", validateBody, postController.createPost);

postRouter.put("/:id", validateBody, checkPosts, postController.updatePost);

postRouter.delete("/:id", checkPosts, postController.deletePost);


export default postRouter;