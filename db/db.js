import pg from 'pg';

let pool;

export const connect = () => {
  pool = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
};

export const query = async (sql, values) => pool.query(sql, values);

export default {
  query,
  connect
};
