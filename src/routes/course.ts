import Fastify from "fastify";
import type { FastifyPluginAsync } from "fastify";
import { courseGetSchema } from "../schema.ts";
import type { courseObj } from "../interface/courseInterface.ts";
import { getCourse } from "../dbrepo/courserepo.ts";

const courseRoutes: FastifyPluginAsync = async (fastify, options) => {
    /*
    Parameter: 
    - kode: string -> coden til kurs, feks DATA1200
    
    */
    fastify.get("/course/:code",
        {schema: {
            params: courseGetSchema
        },
    },
    
        async function (request, reply) {
            const parameters = request.params as { code: string }
            let kode = parameters.code;
            const data = await getCourse(kode);
            reply.send(data);
    }); 
    
    // trenger mer info om database koblingene og hvordan vi skal returnere dataen.
    // men endpointsene er klare til å bli utviklet videre.
    
    fastify.get("/course/:code/wiki", function (request, reply) {
        const parameters = request.params as { code: string }
        let kode = parameters.code;


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
