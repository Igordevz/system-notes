import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
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

  if(!verifyIdNotes){
    throw new Error('Your Note Not Found')
  }

  const update = await prisma.notes.update({
    where: {
      id: id,
    },
    data: {
      content: content || verifyIdNotes?.content,
      title: title || verifyIdNotes?.title,
    },
  });

  if(!update){
    return 'No Changes Made'
  }

  return update;
}
