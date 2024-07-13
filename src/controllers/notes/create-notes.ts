import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod"

import bcrypt from "bcrypt"
export default async function CreateNotes(req:FastifyRequest, reply:FastifyReply){

  const notesSchema = z.object({
    content: z.string(),
    userId: z.string(),
    title: z.string(),
    token: z.string()
  });

  const { content, userId, title, token} = notesSchema.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      token
    }
  })

  const newNote = await prisma.notes.create({
    data: {
      content,
      userId,
      title,
    },
  });

  return newNote;

}
