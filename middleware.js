// const express = require('express');
// const app = express();

// // Logger Middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next(); // Pass control to next middleware
// });

// // Authentication Middleware
// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token === 'secret123') next();
//   else res.status(403).send('Forbidden');
// };

// // Route with Middleware
// app.get('/protected', authMiddleware, (req, res) => {
//   res.send('Access granted!');
// });

// app.listen(3000, () => console.log('Server running'));



// // Async Middleware with Error Handling
// app.use(async (req, res, next) => {
//     try {
//       await someAsyncTask();
//       next();
//     } catch (err) {
//       next(err); // Pass error to error-handler
//     }
//   });
  
//   // Error Handler (MUST have 4 args)
//   app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send('Server Error');
//   });


//   // Middleware with options
// const rateLimitMiddleware = (options) => {
//     const { windowMs, maxRequests } = options;
//     const requests = {};
  
//     return (req, res, next) => {
//       const ip = req.ip;
//       requests[ip] = (requests[ip] || 0) + 1;
  
//       if (requests[ip] > maxRequests) {
//         return res.status(429).send('Too many requests');
//       }
//       next();
//     };
//   };
  
//   // Usage
//   app.use(rateLimitMiddleware({ windowMs: 60000, maxRequests: 100 }));


//   const router = express.Router();

// // Router-specific middleware
// router.use((req, res, next) => {
//   console.log('Router middleware hit');
//   next();
// });

// router.get('/user', (req, res) => {
//   res.send('User data');
// });

// app.use('/api', router); // Mount router


// // Skip middleware for specific routes
// app.use((req, res, next) => {
//     if (req.path === '/public') {
//       next(); // Skip for /public
//     } else {
//       authMiddleware(req, res, next);
//     }
//   });

