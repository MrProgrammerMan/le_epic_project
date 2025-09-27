import Fastify from "fastify";


export const courseGetSchema = {
    type: 'object',
    properties: {
        kode: { 
            type: 'string',
            minLength: 8,
            maxLength: 8,
            pattern: "[a-zA-Z]{4}\\d{4}"
        },
    },
    required: ['kode']
}
