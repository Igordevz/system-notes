import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import CreateUser from "../controllers/use-cases/create-user";
import LoginUser from "../controllers/use-cases/login-user";
import CreateNotes from "../controllers/notes/create-notes";
export default async function Router(app: FastifyInstance) {
  app.get("/", (req, res) => {
    return "hello word";
  });
  app.post("/api/user", CreateUser);


  app.post("/api/user/login", LoginUser);

  app.post("/notes", CreateNotes);

  app.get("/notes/:id", async (req) => {
    const data: any = req.params;

    if (!data) {
      return "Invalid ID";
    }

    const filter = await prisma.notes.findUnique({
      where: {
        id: data?.id,
      },
    });
    if (!filter) {
      return { statusCode: 404, body: "Note not found" };
    }
    return filter;
  });
}
