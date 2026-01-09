import app from "./app";
import { prisma } from "./lib/prisma"
import "dotenv/config";


const port = process.env.PORT || 3000

const main = async () => {
    try {
        await prisma.$connect()
        console.log("successfully Prisma connected !");

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    }
}

main()