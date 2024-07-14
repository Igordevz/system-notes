import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export default async function UpdateNotes(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { content, title, id }: any = req.body;

  const verifyIdNotes = await prisma.notes.findUnique({
    where: {
      id,
    },
  });

  const update = await prisma.notes.update({
    where: {
      id: id,
    },
    data: {
      content: content || verifyIdNotes?.content,
      title: title || verifyIdNotes?.title,
    },
  });
}
