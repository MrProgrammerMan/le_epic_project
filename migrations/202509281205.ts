import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable('course')
        .addColumn('id', 'uuid', (col) => col.defaultTo(sql`uuidv7()`).primaryKey())
        .addColumn('name', 'varchar', (col) => col.notNull())
        .addColumn('code', 'varchar', (col) => col.notNull())
        .addColumn('description', 'varchar')
        .addColumn('cover_img', 'varchar')
        .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('course').execute();
}