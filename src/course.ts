import Fastify from "fastify";
import type { FastifyPluginAsync } from "fastify";
    
const courseRoutes: FastifyPluginAsync = async (fastify, options) => {
    /*
    Parameter: 
    - kode: string -> Fagkoden til kurs, feks DATA1200
    
    */
    fastify.get("/course/:kode", function (request, reply) {
        const params = request.params as { kode: string }
        let kode = params.kode;
        reply.send(kode);
    }); // trenger mer info om database koblingene og hvordan vi skal returnere dataen.
    // men endpointsene er klare til å bli utviklet videre.
    fastify.get("/course/:kode/wiki", function (request, reply) {
        const params = request.params as { kode: string }
        let kode = params.kode;
        reply.send("Velkommen til wikisiden til " + kode);
    });
    fastify.get("/course", function (request, reply) {
        reply.send("test");
    });
}

export default courseRoutes;
