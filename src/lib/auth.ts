import { betterAuth } from "better-auth";
import { Prisma } from "../../generated/prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";


export const auth = betterAuth({
    database: prismaAdapter(Prisma, {
        provider: "postgresql",
    }),
});