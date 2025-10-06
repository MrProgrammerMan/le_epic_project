// run-sql-v7.ts
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { uuidv7 } from "uuidv7"; // riktig pakke
import 'dotenv/config';

const db = new Kysely<any>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: process.env.DATABASE_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT),
    }),
  }),
});

async function run() {
  try {
    // --- Lag tabellen hvis den ikke finnes ---
    await db.schema
      .createTable('course')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.notNull().primaryKey())
      .addColumn('name', 'varchar', (col) => col.notNull())
      .addColumn('code', 'varchar', (col) => col.notNull())
      .addColumn('description', 'varchar')
      .addColumn('cover_img', 'varchar')
      .execute();

    // --- Sett inn kursene med UUIDv7 ---
    await db.insertInto('course').values([
      {
        id: uuidv7(),
        name: "Introduksjon til båt fargelegging",
        code: "VANN1234",
        description: "Ved å arbeide med emnet vil studentene opparbeide innsikt i deler av båtfargelegging som står sentralt når man skal fargelegge båter og se på båter og hvordan de fargelegges.",
        cover_img: "https://www.stardustcolors.co.uk/img/cms/how-to-paint-a-varnished-boat.jpg"
      },
      {
        id: uuidv7(),
        name: "Fra Kjøtt til Kult: Döner reisen",
        code: "KBAB5678",
        description: "Kurset tar deg med på en kulinarisk reise gjennom historien og kulturen til Döner Kebab, fra dens opprinnelse til dens plass i dagens matlandskap.",
        cover_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/1200px-Lula_kebab_2.jpg"
      },
      {
        id: uuidv7(),
        name: "Utvikling av lekeplasser",
        code: "LEKE9001",
        description: "Hvor fikk vi sklier? Hvorfor er det alltid sand i sandkassen? Dette og mye mer lærer du i dette kurset.",
        cover_img: "https://res.cloudinary.com/ssp/image/fetch/w_833/http://sarpsborg.com/globalassets/bilder/lekeplass-i-kulasparken/lekeplass4.jpg"
      }
    ]).execute();

    console.log("Tabellen og kursene er lagt til med UUIDv7!");
  } catch (err) {
    console.error("Feil:", err);
  } finally {
    await db.destroy();
  }
}

run();
