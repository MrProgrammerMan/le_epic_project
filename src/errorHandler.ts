import Fastify from "fastify";
// NOTE: change to something other than 'any'??
export const errorHandler = function (error: any, request: any, reply: any) {
    if (error.validation) {
        reply.status(422).send(new Error('validation failed')) // bruke denne til å redirecte brukere tilbake til andre sider ved errorer.
    }
}