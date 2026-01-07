import express, { Request, Response } from 'express'
import { toNodeHandler } from 'better-auth/node'
import { auth } from './lib/auth'
import { PostRouter } from './modules/post/post.route'

const app = express()

app.use(express.json())


app.use("/posts",PostRouter.router)

// app.all("/api/auth/*", toNodeHandler(auth));

app.get("/", (req: Request, res: Response) => {
    console.log("server is running");
})

export default app;

