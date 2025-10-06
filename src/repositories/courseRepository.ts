import { db } from '../db/database.js';
import { Insertable, Selectable } from 'kysely';
import { DB } from '../db/types.js';

export type Course = Selectable<DB['course']>;
export type NewCourse = Insertable<DB['course']>;

export async function createCourse(course: NewCourse): Promise<Course | undefined> {
  return await db.insertInto('course')
    .values(course)
    .returningAll()
    .executeTakeFirst();
}

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

export async function deleteCourseByCode(code: string): Promise<Course | undefined> {
  return await db.deleteFrom('course')
      .where('code', '=', code)
      .returningAll()
      .executeTakeFirst();
}

export async function updateCourse(course: Course): Promise<Course | undefined> {
  return await db
        .updateTable('course')
        .set(course)
        .where('code', '=', course.code)
        .returningAll()
        .executeTakeFirst();
}
