const tableName = 'Persons';

export const up = knex => knex.raw(`
  CREATE TABLE "${tableName}" (
    id SERIAL PRIMARY KEY,
    "fullName" VARCHAR(254) NOT NULL DEFAULT ''::character varying,
    address VARCHAR(500) NOT NULL DEFAULT ''::character varying,
    activity VARCHAR(254) NOT NULL DEFAULT ''::character varying,
    status VARCHAR(254) NOT NULL DEFAULT ''::character varying,
    "isNewUsrInfo" BOOL NOT NULL DEFAULT true,
    "downloadedFile" date NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE UNIQUE INDEX "${tableName}_fullName_address_idx" ON "${tableName}" ("fullName", address);
  CREATE INDEX "${tableName}_createdAt_idx" ON "${tableName}" ("createdAt") WHERE "isNewUsrInfo";

  COMMENT ON TABLE "${tableName}" IS 'ФОП';
  COMMENT ON COLUMN "${tableName}".id IS 'Уникальный идентификатор';
  COMMENT ON COLUMN "${tableName}"."fullName" IS 'ФИО';
  COMMENT ON COLUMN "${tableName}".address IS 'Місце знаходження';
  COMMENT ON COLUMN "${tableName}".activity IS 'Вид діяльності';
  COMMENT ON COLUMN "${tableName}".status IS 'Статус';
  COMMENT ON COLUMN "${tableName}"."isNewUsrInfo" IS 'Статус для парсера usrInfo';
  COMMENT ON COLUMN "${tableName}"."downloadedFile" IS 'Загруженный файл';
  COMMENT ON COLUMN "${tableName}"."createdAt" IS 'Дата создания записи';
  COMMENT ON COLUMN "${tableName}"."updatedAt" IS 'Дата обновления записи';
`);

export const down = knex => knex.raw(`
  DROP TABLE IF EXISTS "${tableName}";
`);

export default { up, down };
