import type { FastifyRequest } from "fastify";

const secretJson = process.env.JWT_SECRET_KEY;
import jwt from "jsonwebtoken"
export default async function VerifyToken(req:FastifyRequest){
  
  const { token }:any = req.body

  if(!token){
    throw new Error('Token is required');
  }

  if(!secretJson){
    throw new Error('Token is required');
  }
  const decode:any = jwt.verify(token, secretJson)

  if(!decode?.userId){
    throw new Error('Token inválido');
  }

  return 'Sua nota foi removida com sucesso!';
}