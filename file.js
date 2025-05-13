const fs = require('fs');
const path = require('path');


//basic file system operations

// 1. Create a directory
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// 2. Create and write to file
// fs.writeFile(
//   path.join(__dirname, 'test', 'hello.txt'),
//   'Hello World!',
//   (err) => {
//     if (err) throw err;
//     console.log('File written to...');

    // 3. Append to file
//     fs.appendFile(
//       path.join(__dirname, 'test', 'hello.txt'),
//       '\nI love Node.js',
//       (err) => {
//         if (err) throw err;
//         console.log('File appended to...');
//       }
//     );
//   }
// );

// 4. Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // 5. Rename file
// fs.rename(
//   path.join(__dirname, 'test', 'hello.txt'),
//   path.join(__dirname, 'test', 'helloworld.txt'),
//   (err) => {
//     if (err) throw err;
//     console.log('File renamed...');
//   }
// );

// Promise-based Operations (fs/promises)

// const fs = require('fs').promises;
// const path = require('path');

// async function fileOperations() {
//   try {
//     // Create directory
//     await fs.mkdir(path.join(__dirname, 'promise-dir'));
    
//     // Write file
//     await fs.writeFile(
//       path.join(__dirname, 'promise-dir', 'promise.txt'),
//       'Hello from promises!'
//     );
    
//     // Read file
//     const data = await fs.readFile(
//       path.join(__dirname, 'promise-dir', 'promise.txt'),
//       'utf8'
//     );
//     console.log(data);
    
//     // Delete file
//     await fs.unlink(path.join(__dirname, 'promise-dir', 'promise.txt'));
    
//     // Delete directory
//     await fs.rmdir(path.join(__dirname, 'promise-dir'));
//   } catch (err) {
//     console.error(err);
//   }
// }

// fileOperations();