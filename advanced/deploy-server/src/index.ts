import app from "./app";
import middie from "@fastify/middie";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;

app.listen({
  port: FASTIFY_PORT,
});

const createServer = async () => {
  await app.register(middie);



  console.log(`🚀  Fastify server running on port ${FASTIFY_PORT}`);
  console.log(`Route index: /`);
  console.log(`Route user: /api/v1/user`);
};

createServer();
