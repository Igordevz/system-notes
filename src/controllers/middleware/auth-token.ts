import type { FastifyRequest } from "fastify";
import { z } from 'zod'

const secretJson = process.env.JWT_SECRET_KEY;
import jwt from "jsonwebtoken"
export default async function VerifyToken(req:FastifyRequest){
  
  const tokenSchema = z.object({
    token: z.string()
  })

  const { token } = tokenSchema.parse(req.body);
  if(!secretJson){
    throw new Error('Token is required');
  }
  const decode:any = jwt.verify(token, secretJson)

  if(!decode?.userId){
    throw new Error('Token inválido');
  }

  return decode;
}