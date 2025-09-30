import Fastify from "fastify";

export const errorHandler = function (error, request, reply) {
    if (error.validation) {
        reply.status(422).send(new Error('validation failed')) // bruke denne til å redirecte brukere tilbake til andre sider ved errorer.
    }
}