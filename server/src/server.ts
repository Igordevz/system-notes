import fastify from "fastify";
import Router from "./routes/router";
import fastifyCors from '@fastify/cors';
const app = fastify();

app.register(fastifyCors, {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
});

app.register(Router)

app.listen({
  port: 3333,
}).then((response) => {
  console.log('http server running')
})