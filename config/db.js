const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// path to database file
const dbPath = path.join(__dirname, "../database/library.db");

// Create and connect to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Failed to connect to SQLite database:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Enable foreign key constraints
db.run("PRAGMA foreign_keys = ON;");

// Export database connection
module.exports = db;
