-- test data legg inn
-- @block
INSERT INTO course (name, code, description, cover_img, id) VALUES
(
    'Introduksjon til båt fargelegging',
    'VANN1234',
    'Ved å arbeide med emnet vil studentene opparbeide innsikt i deler av båtfargelegging som står sentralt når man skal fargelegge båter og se på båter og hvordan de fargelegges.',
    uuidv7()
),
(
    'Fra Kjøtt til Kult: Döner reisen',
    'KBAB5678',
    'Kurset tar deg med på en kulinarisk reise gjennom historien og kulturen til Döner Kebab, fra dens opprinnelse til dens plass i dagens matlandskap.',
    uuidv7()
),
(
    'Utvikling av lekeplasser',
    'LEKE9001',
    'Hvor fikk vi sklier? Hvorfor er det alltid sand i sandkassen? Dette og mye mer lærer du i dette kurset.',
    uuidv7()
);

-- -- fjern data
-- -- @block
-- DELETE FROM course
-- WHERE code IN ('VANN1234', 'KBAB5678', 'LEKE9001');

-- -- @block
-- SELECT * FROM course;
