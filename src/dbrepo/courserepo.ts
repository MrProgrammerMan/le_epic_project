import * as path from 'path';
import { Pool } from 'pg';
import { promises as fs } from 'fs';
import {
Kysely,
Migrator,
PostgresDialect,
FileMigrationProvider,
} from 'kysely';
import type { DB } from "./types.ts";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import 'dotenv/config';
import type { Course } from '../db/types.ts';
import { uuidv7 } from "uuidv7";


/* MIDLERTIDIG COURSE REPO?*/

const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            host: process.env.DATABASE_HOST,
            database: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            port: Number(process.env.POSTGRES_PORT)
        }),
    }),
});

export async function getCourse(code: string){
    const courseData = await db
        .selectFrom('course')
        .selectAll()
        .where('code', '=', code)
        .execute();

    return courseData;
}

export async function getAllCourse(){
    const courseData = await db
        .selectFrom('course')
        .selectAll()
        .execute();
    return courseData;
}

export async function postCourse(course: Course){
    const courseData = await db
        .insertInto('course')
        .values(course)
        .execute();
    return courseData;
}

export async function putCourse(course: Course){
    const courseData = await db
        .updateTable('course')
        .set(course)
        .where('code', '=', course.code) // bruker code
        .executeTakeFirst();
    return courseData;
}

export async function deleteCourse(code: string){
    const courseData = await db
        .deleteFrom('course')
        .where('code', '=', code)
        .execute();
    return courseData;
}
