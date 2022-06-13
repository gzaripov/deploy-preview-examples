import fastify from "fastify";
import middie from "@fastify/middie";
import S3 from "aws-sdk/clients/s3";
import { Credentials } from "aws-sdk";
import { createServeFrontendMiddleware } from "./serve-frontend-mw";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;

const s3Client = new S3({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  credentials: new Credentials({
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  }),
});

const app = fastify();
const logger = console;

const createServer = async () => {
  await app.register(middie);

  await app.use(createServeFrontendMiddleware({ s3Client }));

  app.listen({
    port: FASTIFY_PORT,
  });

  logger.log(`Server started on port ${FASTIFY_PORT}`);
};

createServer();
