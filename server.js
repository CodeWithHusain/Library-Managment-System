// Import express framework
const express = require("express");

// Create express application
const app = express();

// Parse form data (IMPORTANT for UI forms)
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON request bodies
app.use(express.json());

// Serve static files from public folder (CSS, JS)
app.use(express.static("public"));

// Set EJS as view engine
app.set("view engine", "ejs");

// Set views folder
app.set("views", "./views");

// Import route files
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/users");

// Use routes
app.use("/books", bookRoutes);
app.use("/users", userRoutes);

// Home route - render index.ejs
app.get("/", (req, res) => {
  res.render("index");
});

// Define server port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
