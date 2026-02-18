
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
});

async function initDb() {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Database connected.");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // stop server if DB fails
  }
}

module.exports = { pool, initDb };
