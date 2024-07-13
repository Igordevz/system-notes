import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
export default async function Router(app: FastifyInstance) {
  app.get("/", (req, res) => {
    return "hello word";
  });

  app.post("/api/user", async (req, reply) => {
    const userSchema = z.object({
      email: z.string(),
      password: z.string().min(8),
      name: z.string(),
    });

    const { email, password, name } = userSchema.parse(req.body);
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist) {
      reply.status(401).send("This user already exists");
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHas = await bcrypt.hash(password, salt);

    const createNewUser = await prisma.user.create({
      data: {
        email,
        password: passwordHas,
        name,
      },
    });
    if (!createNewUser) {
      reply.status(401).send("This error application");
    }

    reply.status(201).send(createNewUser);
  });

  app.post("/api/user/login", async (req, reply) => {
    const userSchema = z.object({
      email: z.string(),
      password: z.string().min(8),
    });

    const { email, password } = userSchema.parse(req.body);

    const user: any = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        Notes: true,
      },
    });
    const passwordHash = await bcrypt.compare(password, user?.password);

    if (!user || !passwordHash) {
      return reply.status(401).send("User not found");
    }
    return reply.status(200).send(user);
  });

  app.post("/notes", async (req) => {
    const notesSchema = z.object({
      content: z.string(),
      userId: z.string(),
      title: z.string(),
    });

    const { content, userId, title } = notesSchema.parse(req.body);

    const newNote = await prisma.notes.create({
      data: {
        content,
        userId,
        title,
      },
    });

    return newNote;
  });

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
