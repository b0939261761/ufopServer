import { query } from './db.js';

export const getLastPerson = async () => {
  const sql = `
    SELECT "fullName", address, activity, status
    FROM "Persons" WHERE "isNewUsrInfo" ORDER BY "createdAt" LIMIT 1
  `;
  const { rows } = await query(sql);
  return rows[0];
};

export const setIsNewUsrInfoPerson = (fullName, address) => {
  const sql = `
    UPDATE "Persons" SET
      "isNewUsrInfo" = false,
      "updatedAt" = CURRENT_TIMESTAMP
    WHERE "fullName" = $1 AND address = $2
  `;
  return query(sql, [fullName, address]);
};

export default {
  getLastPerson,
  setIsNewUsrInfoPerson
};
