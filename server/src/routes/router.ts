import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import CreateUser from "../controllers/use-cases/create-user";
import LoginUser from "../controllers/use-cases/login-user";
import CreateNotes from "../controllers/notes/create-notes";
import GetNotes from "../controllers/notes/notes-id";
import GetUserProfile from "../controllers/use-cases/capture-info-user";
import VerifyToken from "../controllers/middleware/auth-token";
import UpdateNotes from "../controllers/notes/update-notes";
import RemoveNotes from "../controllers/notes/remove-notes";
export default async function Router(app: FastifyInstance) {
  
  app.get("/", (req, res) => {
    return "hello word";
  });

  app.post("/api/user", CreateUser);
  app.post("/api/user/login", LoginUser);
  app.post('/api/user/profile', GetUserProfile)


  app.get("/notes/:id",{preHandler: VerifyToken}, GetNotes);
  app.post("/notes",{preHandler: VerifyToken} ,CreateNotes);
  app.put('/notes', {preHandler: VerifyToken}, UpdateNotes)
  app.delete('/notes', {preHandler: VerifyToken}, RemoveNotes)
}
