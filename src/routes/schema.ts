import Fastify from "fastify";


export const courseGetSchema = {
    type: 'object',
    properties: {
        code: { 
            type: 'string',
            minLength: 8,
            maxLength: 8,
            pattern: "[a-zA-Z]{4}\\d{4}"
        },
    },
    required: ['code']
}

export const newCoursePostSchema = {
    type: 'object',
    properties: {
        code: { 
            type: 'string',
            minLength: 8,
            maxLength: 8,
            pattern: "[a-zA-Z]{4}\\d{4}"
        },
        name: { 
            type: 'string'
        },
        description: { 
            type: 'string',
            nullable: true
        },
        cover_img: { 
            type: 'string',
            nullable: true
        },
    },
    required: ['code']
}