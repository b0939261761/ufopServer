import { query } from './db.js';

export const getOrganization = async code => {
  const sql = `
    SELECT code, manager, "fullName", name, address, activity, status
    FROM "Organizations"
    WHERE code = $1
  `;

  const { rows } = await query(sql, [code]);
  return rows?.[0];
};

export const getLastCode = async () => {
  const sql = 'SELECT code FROM "Organizations" WHERE "isNewUsrInfo" ORDER BY "createdAt" LIMIT 1';
  const { rows } = await query(sql);
  return rows?.[0]?.code;
};

export const setIsNewUsrInfo = code => {
  const sql = 'UPDATE "Organizations" SET "isNewUsrInfo" = false WHERE code = $1';
  return query(sql, [code]);
};

export default {
  getOrganization,
  getLastCode,
  setIsNewUsrInfo
};
