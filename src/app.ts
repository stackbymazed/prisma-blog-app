import express, { NextFunction, Request, Response } from 'express'
import { toNodeHandler } from 'better-auth/node'
import { auth } from './lib/auth'
import { PostRouter } from './modules/post/post.route'
import "dotenv/config";

const app = express()
app.use(express.json())

const Auth = () => {
    async (req:Request, res:Response, next:NextFunction) => {
        
    }
}

//better auth authentication route
app.all("/api/auth/*splat", toNodeHandler(auth));




//post create
app.use("/posts", PostRouter.router)


app.get("/", (req: Request, res: Response) => {
    console.log("server is running");
})

export default app;

