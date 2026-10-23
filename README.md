# 📚 Library Management System

A full-stack web application for managing library records digitally: books, users, and who has borrowed what. Built as my final project for **CS50: Introduction to Computer Science**.

▶️ **Video Demo:** [Watch on YouTube](https://youtu.be/hWb1G5fWrgM)

---

## Why this project?

Many small libraries still track books in paper registers or spreadsheets. That leads to errors, missing records, and no clear answer to the question *"who has this book?"*

This project replaces that with a centralized, database-driven system where every book, and the user holding it, is recorded in one place.

## Features

- **View all books** with their title, author, and the user who currently has it
- **Add new books** through a simple form
- **Link books to users** to track responsibility and availability
- **Persistent storage** in a SQL database
- **Server-side rendered pages** using EJS templates

The scope is intentionally focused on core functionality to show a solid grasp of CS50 fundamentals rather than a long feature list.

## Tech Stack

| Layer      | Technology                |
|------------|---------------------------|
| Backend    | Node.js, Express          |
| Database   | SQL                       |
| Templating | EJS                       |
| Frontend   | HTML, CSS                 |

## Project Structure

```
.
├── server.js            # App entry point: Express setup, middleware, view engine, route wiring
├── routes/
│   └── books.js         # GET/POST routes for viewing and adding books
├── models/
│   ├── bookModel.js     # SQL queries for books
│   └── userModel.js     # SQL queries for users
├── views/
│   ├── books.ejs        # Lists all books, authors, and issuing users
│   └── addBook.ejs      # Form for adding a new book
└── public/              # Static assets (CSS)
```

## Architecture

The app follows an MVC-style layout and a clear request–response cycle:

```
Browser ──► Route (routes/books.js) ──► Model (models/*.js) ──► SQL Database
   ▲                                                                  │
   └────────────── EJS view (views/*.ejs) ◄───── data ◄───────────────┘
```

- **Routes** handle HTTP requests and connect views to data logic.
- **Models** hold all database queries, so no SQL lives inside route handlers.
- **Views** render the data into HTML on the server, with no separate frontend framework needed.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- A SQL database set up with the tables used by the app (books and users)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

# 2. Install dependencies
npm install

# 3. Configure your database connection
#    (update the connection settings in the model files or your config)

# 4. Start the server
node server.js
```

Then open `http://localhost:<PORT>` in your browser (replace `<PORT>` with the port set in `server.js`).

## Design Decisions

- **Minimal `server.js`.** It only bootstraps the app, which keeps it readable and easy to maintain.
- **Separated models and routes.** Keeping SQL out of route handlers makes debugging much easier and the code easier to extend.
- **Server-side rendering with EJS.** It simplifies the stack and lets the server inject database values directly into HTML.
- **No authentication (yet).** The current version assumes a trusted librarian environment to stay focused and stable. The database structure and routing were designed so auth can be added later without major restructuring.
- **Minimal styling.** CS50 values correctness, clarity, and understanding over appearance, so the CSS is deliberately simple.

## Challenges & What I Learned

The hardest part was getting data to flow correctly between SQL queries, Express routes, and EJS templates. Failed queries and undefined variables caused books not to load. I resolved these by debugging step by step with console logging and checking query output at each stage.

Key takeaways:

- Backend development with Node.js and Express
- Integrating a SQL database
- MVC-style project organization
- Server-side rendering
- Writing clean, documented, well-structured code

## Roadmap
- User authentication and role-based access control
- Book return functionality with due dates
- Fine calculation for late returns
- Search and filtering for books and users
- improved UI responsiveness and accessibility
- Deployment to a cloud platform

## Acknowledgements

Built as the final project for [CS50: Introduction to Computer Science](https://cs50.harvard.edu/x/) by Harvard University.

## Author

**Hussain Sitamouwala**
