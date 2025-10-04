import { db } from '../db/database.js';
import { Insertable, Selectable } from 'kysely';
import { DB } from '../db/types.js';

type Course = Selectable<DB['course']>;
type NewCourse = Insertable<DB['course']>;


export async function findCourseByCode(code: string): Promise<Course | undefined> {
  return await db.selectFrom('course')
    .where('code', '=', code)
    .selectAll()
    .executeTakeFirst();
}

export async function findAllCourses(): Promise<Course[]> {
  return await db.selectFrom('course')
    .selectAll()
    .execute();
}