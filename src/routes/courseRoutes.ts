import type { FastifyPluginAsync } from "fastify";
import { NewCourse, findAllCourses, findCourseByCode, createCourse, deleteCourseByCode } from "../repositories/courseRepository.js";
import { newCoursePostSchema, courseGetSchema } from "./schema.js";


const courseRoutes: FastifyPluginAsync = async (fastify, _options) => {
    fastify.post<{ Body: NewCourse }>("/courses", { schema: { body: newCoursePostSchema } }, async (request, reply) => {
        const newCourse = request.body;
        const created = await createCourse(newCourse);
        return reply.code(201).send(created);
    });

    fastify.get("/course/:code", { schema: { params: courseGetSchema } }, async (request, reply) => {
        const parameters = request.params as { code: string }
        const kode = parameters.code;
        reply.send(await findCourseByCode(kode));
    });

    fastify.get("/courses", async (request, reply) => {
        reply.send(await findAllCourses());
    });

    fastify.delete("/course",{schema: {body: courseGetSchema}},
        async function (request, reply) {
            const coursefrombody = request.body as { code: string }
            reply.send(await deleteCourseByCode(coursefrombody.code));
    }); 
}

export default courseRoutes;
