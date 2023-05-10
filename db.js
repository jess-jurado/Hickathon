const { Pool } = require('pg');

const pool = new Pool({
  //user: attachDefaultImportDeclaration,
  user: 'admin',
  host: 'localhost',
  database: 'holiday-selector',
  password: '013462',
  port: 5432, // default port
});

module.exports = pool;
