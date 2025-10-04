import { db } from '../db/database.js';

export async function findCourseByCode(code: string) {
  return await db.selectFrom('course')
    .where('code', '=', code)
    .selectAll()
    .executeTakeFirst();
}

export async function findAllCourses() {
  return await db.selectFrom('course')
    .selectAll()
    .execute();
}