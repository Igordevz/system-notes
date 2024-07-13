
import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const secretJson = process.env.JWT_SECRET_KEY;
export default async function LoginUser(req:FastifyRequest, reply:FastifyReply){
  const userSchema = z.object({
    email: z.string(),
    password: z.string().min(8),
  });

  const { email, password } = userSchema.parse(req.body);
  
  const user: any = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      Notes: true,
    },
  });
  if(!secretJson){
    throw new Error('jwt is required');
  }

  const token = jwt.sign({userId: user.id, user: user.password},secretJson, {expiresIn: '7d'} )

  const passwordHash = await bcrypt.compare(password, user?.password);

  if (!user || !passwordHash) {
    return reply.status(401).send("User not found");
  }
  return reply.status(200).send({user:user, token});


}