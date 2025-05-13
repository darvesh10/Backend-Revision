const https = require('https');
const fs = require('fs');
const path = require('path');

// Generate self-signed certificates for development (run once)
// function generateCerts() {
//   const { execSync } = require('child_process');
//   try {
//     execSync('openssl version', { stdio: 'ignore' });
//     if (!fs.existsSync(path.join(__dirname, 'key.pem')) || 
//         !fs.existsSync(path.join(__dirname, 'cert.pem'))) {
//       console.log('Generating self-signed certificates...');
//       execSync(
//         'openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"'
//       );
//     }
//   } catch (e) {
//     console.error('OpenSSL not found. Please install OpenSSL or provide your own certificates.');
//     process.exit(1);
//   }
// }

// // Generate certificates if they don't exist
// generateCerts();

// // Read certificate files
// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
// };

// // Create HTTPS server
// const server = https.createServer(options, (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello from HTTPS server!\n');
// });

// // Start server
// const PORT = 443;
// server.listen(PORT, () => {
//   console.log(`HTTPS server running on https://localhost:${PORT}`);
//   console.log('Note: You may need to accept the self-signed certificate in your browser');
// });

// // Handle errors
// server.on('error', (err) => {
//   console.error('Server error:', err);
// });