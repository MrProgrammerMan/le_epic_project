import Fastify from "fastify";
import type { FastifyPluginAsync } from "fastify";
    
const courseRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/course/:kode", function (request, reply) {
        // Kode skal være fagkoden. feks. DATA1200
        const params = request.params as { kode: string }
        let kode = params.kode;
        reply.send(kode);
    });
    fastify.get("/course/:kode/wiki", function (request, reply) {
        // Kode skal være fagkoden. feks. DATA1200
        const params = request.params as { kode: string }
        let kode = params.kode;
        reply.send("Velkommen til wikisiden til " + kode);
    });
    fastify.get("/course", function (request, reply) {
        reply.send("test");
    });
}

export default courseRoutes;
