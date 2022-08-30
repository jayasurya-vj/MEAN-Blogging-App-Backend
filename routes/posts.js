import express from "express";
import {postController} from "../controllers/post.js"
// import {extractedFile} from "../middleware/file.js";
import {checkAuth} from "../middleware/check-auth.js";

export const postsRouter = express.Router();

postsRouter.post("",checkAuth,postController.createPost); //extractedFile, 

postsRouter.put("/:id",checkAuth,postController.editPost); //extractedFile, 

postsRouter.get("/:id",postController.getOnePost);

postsRouter.get("",postController.getPosts);

postsRouter.delete("/:id",checkAuth, postController.deletePost);

