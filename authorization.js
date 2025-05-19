// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const { v4: uuidv4 } = require('uuid');

// // Mock database for authorization codes (in production, use a real database)
// const authCodes = new Map();

// // Client configuration (in production, store this securely)
// const clients = {
//   'client123': {
//     clientSecret: 'secret456',
//     redirectUris: ['http://localhost:3000/callback'],
//     name: 'Example Client'
//   }
// };

// // Generate authorization code
// router.get('/authorize', (req, res) => {
//   const { response_type, client_id, redirect_uri, scope, state } = req.query;

//   // Validate client
//   if (!clients[client_id]) {
//     return res.status(400).json({ error: 'invalid_client' });
//   }

//   // Validate redirect URI
//   if (!clients[client_id].redirectUris.includes(redirect_uri)) {
//     return res.status(400).json({ error: 'invalid_redirect_uri' });
//   }

//   // Only support "code" response type for authorization code flow
//   if (response_type !== 'code') {
//     return res.redirect(`${redirect_uri}?error=unsupported_response_type&state=${state}`);
//   }

//   // Generate authorization code
//   const code = uuidv4();
//   authCodes.set(code, {
//     clientId: client_id,
//     redirectUri: redirect_uri,
//     scope: scope,
//     createdAt: Date.now(),
//     userId: 'user123' // In production, this would come from authenticated session
//   });

//   // Redirect back with authorization code
//   res.redirect(`${redirect_uri}?code=${code}&state=${state}`);
// });

// // Exchange authorization code for access token
// router.post('/token', (req, res) => {
//   const { grant_type, code, redirect_uri, client_id, client_secret } = req.body;

//   // Validate grant type
//   if (grant_type !== 'authorization_code') {
//     return res.status(400).json({ error: 'unsupported_grant_type' });
//   }

//   // Validate client credentials
//   if (!clients[client_id] || clients[client_id].clientSecret !== client_secret) {
//     return res.status(401).json({ error: 'invalid_client' });
//   }

//   // Validate authorization code
//   const authCode = authCodes.get(code);
//   if (!authCode) {
//     return res.status(400).json({ error: 'invalid_grant' });
//   }

//   // Validate redirect URI matches
//   if (authCode.redirectUri !== redirect_uri) {
//     return res.status(400).json({ error: 'invalid_grant' });
//   }

//   // Check if code is expired (10 minutes)
//   if (Date.now() - authCode.createdAt > 600000) {
//     authCodes.delete(code);
//     return res.status(400).json({ error: 'expired_code' });
//   }

//   // Clean up used code
//   authCodes.delete(code);

//   // Generate access token (and optionally refresh token)
//   const accessToken = jwt.sign(
//     { 
//       sub: authCode.userId,
//       client_id: client_id,
//       scope: authCode.scope 
//     }, 
//     'your-secret-key', // In production, use a proper secret from environment variables
//     { expiresIn: '1h' }
//   );

//   const refreshToken = uuidv4();

//   res.json({
//     access_token: accessToken,
//     token_type: 'Bearer',
//     expires_in: 3600,
//     refresh_token: refreshToken,
//     scope: authCode.scope
//   });
// });

// module.exports = router;


// To use this, mount the router in your main Express app:

// const express = require('express');
// const authRouter = require('./auth-code-router');

// const app = express();
// app.use(express.json());
// app.use('/oauth', authRouter);

// app.listen(3000, () => console.log('Auth server running on port 3000'));