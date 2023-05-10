const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'person',
  password: '013462',
  port: 5432,
});

app.get('/datos', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tu_tabla');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } finally {
    client.release();
  }
});

app.listen(3000, () => {
  console.log('API REST en ejecución en http://localhost:3000');
});
