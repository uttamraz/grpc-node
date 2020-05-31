'use strict';
(() => {
  const { dbHelper } = require('../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: 'Create Failed' };
      let insert = {
        firstName: call.firstName,
        lastName: call.lastName,
        email: call.email,
        age: call.age,
        location: call.location,
      };
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`insert into users set ? `, insert);
      if (rows.insertId > 0) {
        response.status = true;
        response.message = 'Created Successfully';
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.releaseConnection(connection);
    }
  };
})();
