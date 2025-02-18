const { Pool } = require('pg');
require('dotenv').config(); 

const pool = new Pool({
  user: process.env.DB_USER || 'postgres', 
  password: process.env.DB_PASSWORD || 'Ka$h5353', 
  host: 'localhost',
  port: 5432,
  database: 'employee_tracker'
});

module.exports = pool;
