import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod"
import { prisma } from "../../lib/prisma";
export default async function RemoveNotes(
  req: FastifyRequest,
  reply: FastifyReply
) {

  const RemoveSchema = z.object({
    id: z.string(),
  })

  const { id } = RemoveSchema.parse(req.body)

  const getNotes = await prisma.notes.findUnique({
    where: { id },
  })
  if(!getNotes){
   throw new Error('Your Note Not Found')
  }
  const RemoveModel = await prisma.notes.delete({
    where: { id },
  })

  if(!RemoveModel) {
    throw new Error('Your Note Not Found')
  }

  return RemoveNotes;

}
