import { Request, Response } from "express";
import { PostService } from "./post.service";

const CreatePost = async (req: Request, res: Response) => {
    try {
        const result =  PostService.CreatePostService(req.body);
        res.status(200).json({
            success: true,
            message: "Users created successfully",
            data: result
        })

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