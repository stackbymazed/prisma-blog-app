import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const CreatePostService = async (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => {
    console.log(data);
    try {
        const result = await prisma.post.create({
            data
        })
        console.log(result);
        return result;
    } catch (err) {
        return err
    }
}


export const PostService = {
    CreatePostService
}










