const express = require('express');
const app = express();
const PORT = 3000;

// ======================
// 1. Application Setup
// ======================

// Basic middleware
// app.use(express.json()); // Parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// // Custom middleware example
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
//   next();
// });

// // ======================
// // 2. Routing
// // ======================

// // Basic route
// app.get('/', (req, res) => {
//   res.send('Home Page');
// });

// // Route parameters
// app.get('/users/:userId', (req, res) => {
//   res.send(`User ID: ${req.params.userId}`);
// });

// // Query parameters
// app.get('/search', (req, res) => {
//   res.json({ query: req.query });
// });

// // Route chaining
// app.route('/books')
//   .get((req, res) => res.send('Get all books'))
//   .post((req, res) => res.send('Add a book'))
//   .put((req, res) => res.send('Update all books'));

// // ======================
// // 3. Advanced Routing
// // ======================

// // Router instance
// const router = express.Router();
// router.get('/', (req, res) => res.send('Router Home'));
// router.get('/about', (req, res) => res.send('Router About'));
// app.use('/router', router);

// // ======================
// // 4. Response Methods
// // ======================

// app.get('/response', (req, res) => {
//   // res.send() - Send various types
//   // res.json() - Send JSON
//   // res.sendFile() - Send file
//   // res.download() - Force download
//   // res.redirect() - Redirect
//   // res.status() - Set status code
  
//   res.status(200).json({ message: 'All response methods available' });
// });

// // ======================
// // 5. Error Handling
// // ======================

// // 404 handler
// app.use((req, res, next) => {
//   res.status(404).send("Sorry can't find that!");
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // ======================
// // 6. Template Engines
// // ======================

// // Uncomment to use EJS:
// // app.set('view engine', 'ejs');
// // app.get('/ejs', (req, res) => {
// //   res.render('template', { title: 'EJS Example' });
// // });

// // ======================
// // 7. Static Files
// // ======================

// app.use(express.static('public'));

// // ======================
// // 8. Server Startup
// // ======================

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
//   console.log('Available routes:');
//   console.log(`- GET /`);
//   console.log(`- GET /users/:userId`);
//   console.log(`- GET /search?q=term`);
//   console.log(`- GET/POST/PUT /books`);
//   console.log(`- GET /router`);
//   console.log(`- GET /router/about`);
//   console.log(`- GET /response`);
// });

const app = require("express")