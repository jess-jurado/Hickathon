const express = require('express');
const pool = require('../db');
const db = require('./db.js');

async function createUsersTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KeyboardEvent,
        email VARCHAR(100) NOT NULL,
        pass VARCHAR(20) NOT NULL,
        username VARCHAR(100) NOT NULL,
      );
    `);
  } finally {
    client.release();
  }
}

createUsersTable();


