import fastify from "fastify";
import Router from "./routes/router";

const app = fastify();

app.register(Router)

app.listen({
  port: 3333,
})