import Fastify from "fastify";
import type { FastifyPluginAsync } from "fastify";
import { findAllCourses, findCourseByCode } from "../repositories/courseRepository.js";

const courseRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/course/:fagkode", function (request, reply) {
        const parameters = request.params as { fagkode: string }
        const kode = parameters.fagkode;
        reply.send(findCourseByCode(kode));
    });

    fastify.get("/courses", function (request, reply) {
        reply.send(findAllCourses());
    });
}

export default courseRoutes;
