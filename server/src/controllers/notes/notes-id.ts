import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";

export default async function GetNotes(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const data: any = req.params;

  const filter = await prisma.notes.findUnique({
    where: {
      id: data?.id,
    },
  });
  if (!filter) {
    return { statusCode: 404, message: "Não foi encontrada nenhuma anotação" };
  }
  return filter;
}
