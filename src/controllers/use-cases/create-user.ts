import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod"
import bcrypt from "bcrypt"

export default async function CreateUser(req:FastifyRequest, reply:FastifyReply){
    const userSchema = z.object({
      email: z.string(),
      password: z.string().min(8),
      name: z.string(),
    });

    const { email, password, name } = userSchema.parse(req.body);
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist) {
      reply.status(401).send("This user already exists");
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHas = await bcrypt.hash(password, salt);

    const createNewUser = await prisma.user.create({
      data: {
        email,
        password: passwordHas,
        name,
      },
    });
    if (!createNewUser) {
      reply.status(401).send("This error application");
    }

    reply.status(201).send(createNewUser);

}