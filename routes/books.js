const express = require("express");
const router = express.Router();

const bookModel = require("../models/bookModel");
const userModel = require("../models/userModel");

// View books
router.get("/view", (req, res) => {
  bookModel.getAllBooks((err, books) => {
    if (err) {
      return res.send("Error loading books");
    }

    console.log(books); 
    res.render("books", { books });
  });
});


// Show add book form
router.get("/add", (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) return res.send("Error loading users");
    const admins = users;
    res.render("addbook", { users, admins });
  });
});

// Add book
router.post("/add", (req, res) => {
  const { title, author } = req.body;

  bookModel.addBook(title, author, null, (err) => {
    if (err) {
      return res.send("Failed to add book");
    }

    res.redirect("/books/view");
  });
});


// Delete book
router.post("/delete/:id", (req, res) => {
  bookModel.deleteBook(req.params.id, () => {
    res.redirect("/books/view");
  });
});

module.exports = router;
