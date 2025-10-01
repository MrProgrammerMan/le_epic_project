import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
    await db
    .insertInto('course')
    .values([
        {
            name: "Introduksjon til båt fargelegging",
            code: "VANN1234",
            description: "Ved å arbeide med emnet vil studentene opparbeide innsikt i deler av båtfargelegging som står sentralt når man skal fargelegge båter og se på båter og hvordan de fargelegges.",
            cover_img: "https://www.stardustcolors.co.uk/img/cms/how-to-paint-a-varnished-boat.jpg"
        },
        {
            name: "Fra Kjøtt til Kult: Döner reisen",
            code: "KBAB5678",
            description: "Kurset tar deg med på en kulinarisk reise gjennom historien og kulturen til Döner Kebab, fra dens opprinnelse til dens plass i dagens matlandskap.",
            cover_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/1200px-Lula_kebab_2.jpg"
        },
        {
            name: "Utvikling av lekeplasser",
            code: "LEKE9001",
            description: "Hvor fikk vi sklier? Hvorfor er det alltid sand i sandkassen? Dette og mye mer lærer du i dette kurset.",
            cover_img: "https://res.cloudinary.com/ssp/image/fetch/w_833/http://sarpsborg.com/globalassets/bilder/lekeplass-i-kulasparken/lekeplass4.jpg"
        }])
        .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.deleteFrom('course') 
        .where('code', 'in', ['VANN1234', 'KBAB5678', 'LEKE9001']) 
        .execute();
}