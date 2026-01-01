import { prisma } from "../lib/prisma"

const CreatePostService = async (data: any) => {
    // console.log(data);
    const { title, content, tag, authorId } = data
    try {
        // const result = prisma.post.create{
        //     data: {
        //         title,
        //         content,
        //         tag,
        //         authorId
        //     }
        // }
        return [];
    } catch (err) {
        return err
    }
}


export const PostService = {
    CreatePostService
}