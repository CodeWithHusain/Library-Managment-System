const db = require("../config/db");

// Add a new user
const addUser = (name, callback) => {
  const sql = "INSERT INTO users (name) VALUES (?)";
  db.run(sql, [name], callback);
};

// Get all users  ✅ (THIS WAS THE BUG)
const getAllUsers = (callback) => {
  const sql = "SELECT * FROM users";
  db.all(sql, [], callback);
};

// Delete user + related issues
const deleteUser = (id, callback) => {
  db.run("DELETE FROM issues WHERE user_id = ?", [id], (err) => {
    if (err) return callback(err);
    db.run("DELETE FROM users WHERE id = ?", [id], callback);
  });
};

// Get borrowed books of a user
const getBorrowedBooksByUser = (userId, callback) => {
  const sql = `
    SELECT books.title, books.author, issues.issue_date
    FROM issues
    JOIN books ON books.id = issues.book_id
    WHERE issues.user_id = ?
      AND issues.return_date IS NULL
  `;
  db.all(sql, [userId], callback);
};

module.exports = {
  addUser,
  getAllUsers,
  deleteUser,
  getBorrowedBooksByUser
};
