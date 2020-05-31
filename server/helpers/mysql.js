'use-strict';
const mysql = require('mysql2/promise');
((dbHelper) => {
  let dbClient = null;
  dbHelper.init = async () => {
    try {
      if (!dbClient)
        dbClient = await mysql.createPool({
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          database: process.env.DB_NAME,
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });
      return dbClient;
    } catch (err) {
      throw err;
    }
  };
  dbHelper.getConnection = async () => {
    try {
      return await dbClient.getConnection();
    } catch (error) {
      throw error;
    }
  };
  dbHelper.releaseConnection = async (connection) => {
    try {
      return await dbClient.releaseConnection(connection);
    } catch (error) {
      throw error;
    }
  };
})(module.exports);
