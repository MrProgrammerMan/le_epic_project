console.log("TypeScript Runs");

import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
    logger: true,
});

fastify.register(fastifyStatic, {
    root: join(__dirname, "..", "static"),
});

try {
    await fastify.listen({ port: 3000 });
    console.log("Server running at http://localhost:3000");
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}