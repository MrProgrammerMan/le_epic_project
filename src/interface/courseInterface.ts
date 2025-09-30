/* 
MULIG VI ENDRER SYSTEM TIL KYSELY SIN TYPES ISTEDET.
---------------------------------------------------

*/

interface courseObj {
    /* 
    Klasse for course objekter som følger database tabell strukturen til course.
    */
    fagkode: number;
    name: string;
    id: number;
    description: string;
    cover_img: string;
}

export type { courseObj };
