const express = require("express");
const router = express.Router();

const userModel = require("../models/userModel");

/**
 * GET /users/view
 * Show all users
 */
router.get("/view", (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      console.error("GET USERS ERROR 👉", err.message);
      return res.send("Error loading users");
    }

    res.render("users", { users });
  });
});

/**
 * POST /users/add
 * Add new user
 */
router.post("/add", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.send("User name is required");
  }

  userModel.addUser(name, () => {
    res.redirect("/users/view");
  });
});

/**
 * POST /users/delete/:id
 * Delete user
 */
router.post("/delete/:id", (req, res) => {
  userModel.deleteUser(req.params.id, (err) => {
    if (err) {
      console.error("DELETE USER ERROR 👉", err.message);
      return res.send(err.message);
    }
    res.redirect("/users/view");
  });
});

/**
 * GET /users/:id/books
 * Show borrowed books of a user
 */
router.get("/:id/books", (req, res) => {
  const userId = req.params.id;

  userModel.getBorrowedBooksByUser(userId, (err, books) => {
    if (err) {
      console.error("BORROWED BOOKS ERROR 👉", err.message);
      return res.send("Error loading borrowed books");
    }

    res.render("userBooks", { books });
  });
});

module.exports = router;
