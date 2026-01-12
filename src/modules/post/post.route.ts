import express from "express";
import { PostController } from "./post.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.post("/",auth(UserRole.ADMIN,UserRole.USER), PostController.CreatePost)

export const PostRouter = {
    router
}