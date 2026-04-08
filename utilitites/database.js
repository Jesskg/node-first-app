const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'jezz@mysqlrootpass',
  database: 'node_complete'
});

module.exports = pool.promise();