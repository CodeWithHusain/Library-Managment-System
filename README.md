# Library Management System
#### Video Demo: https://youtu.be/hWb1G5fWrgM
#### Description:

The Library Management System is a full-stack web application developed as my final project for CS50: Introduction to Computer Science. The goal of this project is to create a simple and efficient way to manage library records digitally, including books, users, and issued book information. In many small libraries, book tracking is still done manually using registers or spreadsheets, which can lead to errors, missing records, and difficulty in knowing which user has borrowed which book. This project addresses that problem by providing a centralized, database-driven system.

The application allows a librarian to view all books in the system, add new books, and associate books with users who have issued them. Each book contains information such as title and author, and optionally links to a user. This makes it easy to track responsibility and availability. The project intentionally focuses on core functionality rather than advanced features, in order to demonstrate strong understanding of fundamental concepts taught in CS50.

The backend of the application is built using Node.js and Express. SQL is used as the database to store persistent data related to books and users. The frontend uses EJS templates along with HTML and CSS to dynamically render data received from the backend. This combination allows the application to follow a clear request–response cycle and reflect real-world web development practices.

The main entry point of the application is `server.js`. This file initializes the Express server, sets up middleware, configures the view engine, and connects routes to their respective handlers. It is responsible for starting the server and defining the overall structure of the application. Keeping this file minimal was a deliberate design choice to improve readability and maintainability.

The `routes` folder contains route-handling logic. The `books.js` file defines routes related to viewing and adding books. It handles HTTP GET and POST requests and acts as a bridge between the frontend views and backend database logic. Separating routes into their own files makes the project easier to scale and keeps the code modular.

The `models` folder contains database interaction logic. The `bookModel.js` file is responsible for querying the database to retrieve and insert book data. Similarly, `userModel.js` handles queries related to users. This separation of concerns was a key design decision, as it prevents SQL logic from being mixed directly into route handlers and makes debugging easier.

The `views` folder contains EJS templates used to render dynamic HTML pages. The `books.ejs` file displays a list of all books along with their authors and issuing users. The `addBook.ejs` file contains a form for adding new books to the system. Using EJS allows the server to inject database values directly into HTML, which simplifies frontend logic and avoids the need for a separate frontend framework.

The `public` folder stores static assets such as CSS files. Styling was kept minimal and clean to focus on functionality rather than visual complexity. This decision was intentional, as CS50 emphasizes correctness, clarity, and understanding over appearance.

One of the biggest challenges during development was handling database errors and ensuring correct data flow between SQL queries, Express routes, and EJS templates. Errors such as failed queries or undefined variables initially caused issues like books not loading correctly. These problems were solved through careful debugging, console logging, and verifying query outputs step by step.

Another design decision involved whether to implement authentication. While user login functionality could have been added, I decided against it in the current version to keep the project focused and stable. Instead, the system assumes a trusted librarian environment. However, the database structure and routing logic are designed so authentication can be added later without major restructuring.

Through this project, I gained practical experience with backend development, SQL database integration, MVC-style project organization, and server-side rendering. I also learned the importance of writing clean, well-structured code and documenting design choices clearly.

Overall, the Library Management System represents a complete and functional web application that demonstrates the core principles taught in CS50. While simple in scope, it is built with extensibility in mind and serves as a solid foundation for future improvements.

#### TODO:

- Add user authentication and role-based access control  
- Implement book return functionality with due dates  
- Add fine calculation for late returns  
- Improve UI responsiveness and accessibility  
- Add search and filtering for books and users  
- Deploy the application to a cloud platform  

This project reflects my growth throughout CS50 and demonstrates my understanding of both computer science fundamentals and practical software development.
