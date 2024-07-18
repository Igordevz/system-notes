import type { FastifyRequest } from "fastify";
import { z } from "zod"
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";
export default async function GetUserProfile(req: FastifyRequest) {
  const secretJson = process.env.JWT_SECRET_KEY;

  const userSchema = z.object({
    token: z.string()
  })

  const { token }  = userSchema.parse(req.body);

  if(!secretJson){
    throw new Error('token is required');
  }
  const decode:any = jwt.verify(token, secretJson)
  
  if(!decode) {
    throw new Error('Seu token expirou');
  }
  const user = await prisma.user.findUnique({
    where: {
      id: decode?.userId
    },
    include: {
      Notes: true
    }
  })
  if(!user){
    throw new Error('Usuário não encontrado');
  }
  return user

}
