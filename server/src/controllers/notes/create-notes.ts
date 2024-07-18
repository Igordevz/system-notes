import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export default async function CreateNotes(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const notesSchema = z.object({
    content: z.string(),
    userId: z.string(),
    title: z.string(),
  });

  const { content, userId, title } = notesSchema.parse(req.body);

  const userIdValid = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userIdValid) {
    throw new Error("User not found");
  }

  const newNote = await prisma.notes.create({
    data: {
      content,
      userId,
      title,
    },
  });

  return { notes: newNote };
}
