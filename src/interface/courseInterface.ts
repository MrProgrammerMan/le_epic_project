/* 
MULIG VI ENDRER SYSTEM TIL KYSELY SIN TYPES ISTEDET.
---------------------------------------------------

*/

interface courseObj {
    /* 
    Klasse for course objekter som følger database tabell strukturen til course.
    */
    code: string;
    name?: string;
    id?: string;
    description?: string;
    cover_img?: string;
}

export type { courseObj };
