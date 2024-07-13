import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export default async function CreateNotes(req:FastifyRequest, reply:FastifyReply){
  const secretJson = process.env.JWT_SECRET_KEY;
  
  const notesSchema = z.object({
    content: z.string(),
    userId: z.string(),
    title: z.string(),
    token: z.string()
  });
  if(!secretJson){
    throw new Error('Token is required');
  }
    const { content, userId, title, token} = notesSchema.parse(req.body);

    const decode = jwt.verify(token, secretJson)

    const userIdValid = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if(!userIdValid){
      throw new Error('User not found');
    }
    
    const newNote = await prisma.notes.create({
      data: {
        content,
        userId,
        title,
      },
    });
    
    return {notes: newNote, token};

}
