const db = require("../config/db");

const addBook = (title, author, issuedBy, callback) => {
  const sql = `
    INSERT INTO books (title, author)
    VALUES (?, ?)
  `;

  db.run(sql, [title, author], function (err) {
    if (err) {
      console.error("ADD BOOK ERROR 👉", err.message);
      return callback(err);
    }
    callback(null);
  });
};



// Get all books

const getAllBooks = (callback) => {
  const sql = `
    SELECT 
      books.id,
      books.title,
      books.author,
      CASE 
        WHEN books.available = 1 THEN 'Available'
        ELSE 'Issued'
      END AS status,
      u1.name AS issued_to,
      u2.name AS issued_by
    FROM books
    LEFT JOIN users u1 ON books.issued_to = u1.id
    LEFT JOIN users u2 ON books.issued_by = u2.id
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("SQLite Error:", err.message);
      return callback(err);
    }
    callback(null, rows);
  });
};





const deleteBook = (id, callback) => {
  db.run("DELETE FROM books WHERE id = ?", [id], callback);
};

module.exports = {
  addBook,
  getAllBooks,
  deleteBook
};
