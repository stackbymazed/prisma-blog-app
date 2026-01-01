import express, { Request, Response } from 'express'
import { PostRouter } from './services/post.route'

const app = express()
app.use(express.json())


app.use("/posts",PostRouter.router)

app.get("/", (req: Request, res: Response) => {
    console.log("server is running");
})

export default app;

