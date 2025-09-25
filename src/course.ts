import Fastify from "fastify";
import FastifyPluginAsync from "fastify";

async function courseRoutes(fastify, options) {
    fastify.get("/course", function (request, reply) {
        reply.send("test");
    });
}

export default courseRoutes;
