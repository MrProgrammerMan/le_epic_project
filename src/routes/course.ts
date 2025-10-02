import Fastify from "fastify";
import type { FastifyPluginAsync } from "fastify";
import { courseGetSchema, newCoursePostSchema } from "../schema.ts";
import type { Course } from "../db/types.ts";
import { getCourse, getAllCourse, postCourse, deleteCourse, putCourse } from "../dbrepo/courserepo.ts";
import { uuidv7 } from "uuidv7";


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
    fastify.get("/list", async function (request, reply) {
            const data = await getAllCourse();
            reply.send(data);
    });

    fastify.post("/course", {
        /* 
        Legge til ny course til databasen.

        NB! MÅ LEGGE TIL SIKKERHET HER I FREMTIDEN.
        */
        schema: { body: newCoursePostSchema }
    }, async function (request, reply) {
        const newCourse = request.body;
        const courseData : Course = {
            id: uuidv7(),
            name: newCourse.name,
            code: newCourse.code,
            description: newCourse.description,
            cover_img: newCourse.cover_img
        }
        await postCourse(courseData);
        // Legg til logikk for å opprette et nytt kurs i databasen
        reply.send(courseData);
    });


        fastify.put("/course", {
        /* 
        Oppdatere eksisterende course i databasen.

        NB! MÅ LEGGE TIL SIKKERHET HER I FREMTIDEN.
        */
        schema: { body: newCoursePostSchema }
    }, async function (request, reply) {
        const newCourse = request.body;
        const courseData : Course = {
            name: newCourse.name,
            code: newCourse.code,
            description: newCourse.description,
            cover_img: newCourse.cover_img
        }
        await putCourse(courseData);
        // Legg til logikk for å oppdatere eksisterende kurs i databasen
        reply.send(courseData);
    });
        fastify.delete("/course",
        {schema: {
            body: courseGetSchema
        },
    },
    
        async function (request, reply) {
            const courseDelete = request.body as { code: string }
            const data = await deleteCourse(courseDelete.code);
            reply.send(data);
    }); 
    
}


export default courseRoutes;
