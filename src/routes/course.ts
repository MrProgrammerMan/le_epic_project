import Fastify from "fastify";
import type { FastifyPluginAsync } from "fastify";
import { courseGetSchema } from "../schema.js";
import { courseObj } from "../interface/courseInterface.js";

const courseRoutes: FastifyPluginAsync = async (fastify, options) => {
    /*
    Parameter: 
    - kode: string -> Fagkoden til kurs, feks DATA1200
    
    */
    fastify.get("/course/:fagkode",
        {schema: {
            params: courseGetSchema
        },
    },
    
        function (request, reply) {
            const parameters = request.params as { fagkode: string }
            let kode = parameters.fagkode;
            reply.send(kode);
    }); 
    
    // trenger mer info om database koblingene og hvordan vi skal returnere dataen.
    // men endpointsene er klare til å bli utviklet videre.
    
    fastify.get("/course/:fagkode/wiki", function (request, reply) {
        const parameters = request.params as { fagkode: string }
        let kode = parameters.fagkode;
        reply.send("Velkommen til wikisiden til " + kode);
    });

    fastify.get("/course", function (request, reply) {
        // tester kobling. tenker hjemmeside til hvert fag her.
        reply.send("test");
    });
    fastify.get("/list", function (request, reply) {
        // venter på database kobling
        reply.send("returner liste over kurs");
    });

}

export default courseRoutes;
