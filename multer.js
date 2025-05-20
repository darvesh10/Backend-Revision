// // Disk Storage Configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// // Memory Storage Configuration
// const memoryStorage = multer.memoryStorage();

// // Initialize upload with storage
// const upload = multer({ storage: storage });

// const fileFilter = (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    
//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error('Invalid file type'), false);
//     }
// };

// const uploads = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 1024 * 1024 * 5 } // 5MB limit
// });

// // Single file upload
// app.post('/single', upload.single('avatar'), (req, res) => {
//     console.log(req.file);
//     res.send('Single file uploaded');
// });

// // Multiple files with same field name
// app.post('/array', upload.array('photos', 5), (req, res) => {
//     console.log(req.files);
//     res.send('Multiple files uploaded (array)');
// });

// // Multiple fields with different names
// app.post('/fields', upload.fields([
//     { name: 'avatar', maxCount: 1 },
//     { name: 'gallery', maxCount: 5 }
// ]), (req, res) => {
//     console.log(req.files);
//     res.send('Multiple fields uploaded');
// });

// // Any file from any field
// app.post('/any', upload.any(), (req, res) => {
//     console.log(req.files);
//     res.send('All files uploaded');
// });



// app.post('/upload', (req, res) => {
//     upload.single('file')(req, res, (err) => {
//         if (err instanceof multer.MulterError) {
//             // A Multer error occurred when uploading
//             return res.status(400).send(err.message);
//         } else if (err) {
//             // An unknown error occurred
//             return res.status(500).send(err.message);
//         }
        
//         // Everything went fine
//         res.send('File uploaded successfully');
//     });
// });



// const profileUpload = multer({ dest: 'uploads/profiles/' });
// const documentUpload = multer({ dest: 'uploads/documents/' });

// app.post('/profile', profileUpload.single('avatar'), (req, res) => {
//     // Handle profile picture upload
// });

// app.post('/document', documentUpload.single('file'), (req, res) => {
//     // Handle document upload
// });