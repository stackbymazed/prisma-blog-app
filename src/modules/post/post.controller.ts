import { Request, Response } from "express";
import { PostService } from "./post.service";

const CreatePost = async (req: Request, res: Response) => {
    try {
        const result =await  PostService.CreatePostService(req.body);
        res.status(201).json(result)

    } catch (err: any) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}

export const PostController = {
    CreatePost
}










