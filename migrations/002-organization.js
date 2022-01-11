const tableName = 'Organizations';

export const up = knex => knex.raw(`
  CREATE TABLE "${tableName}" (
    code VARCHAR(10) NOT NULL DEFAULT ''::character varying UNIQUE,
    manager VARCHAR(254) NOT NULL DEFAULT ''::character varying,
    "fullName" VARCHAR(500) NOT NULL DEFAULT ''::character varying,
    "name" VARCHAR(500) NOT NULL DEFAULT ''::character varying,
    address VARCHAR(500) NOT NULL DEFAULT ''::character varying,
    activity VARCHAR(254) NOT NULL DEFAULT ''::character varying,
    status VARCHAR(254) NOT NULL DEFAULT ''::character varying,
    "isNewUsrInfo" BOOL NOT NULL DEFAULT true,
    "downloadedFile" date NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX "${tableName}_createdAt_idx" ON "${tableName}" ("createdAt") WHERE "isNewUsrInfo";

  COMMENT ON TABLE "${tableName}" IS 'Организации';
  COMMENT ON COLUMN "${tableName}".code IS 'Ідентифікаційний код юридичної особи';
  COMMENT ON COLUMN "${tableName}"."fullName" IS 'Повне найменування юридичної особи';
  COMMENT ON COLUMN "${tableName}".name IS 'Назва юридичної особи';
  COMMENT ON COLUMN "${tableName}".address IS 'Місце знаходження юридичної особи';
  COMMENT ON COLUMN "${tableName}".manager IS 'Керівник';
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
