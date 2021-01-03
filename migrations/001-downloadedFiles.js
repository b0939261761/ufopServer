const tableName = 'downloadedFiles';

export const up = knex => knex.raw(`
  CREATE TABLE "${tableName}" (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  COMMENT ON table "${tableName}" IS 'Скаченные файлы';
  COMMENT ON COLUMN "${tableName}".id IS 'Уникальный идентификатор';
  COMMENT ON COLUMN "${tableName}".date IS 'Дата скаченного файла';
`);

export const down = knex => knex.raw(`
  DROP TABLE IF EXISTS "${tableName}";
`);

export default { up, down };
