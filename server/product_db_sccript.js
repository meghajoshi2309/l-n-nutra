const fs = require('fs');
const xlsx = require('xlsx');
const mysql = require('mysql2');

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost', // Update with your MySQL host
    user: 'user1',      // Update with your MySQL user
    password: 'pass1', // Update with your MySQL password
    database: 'test' // Update with your database name
});

// Read the Excel file
const workbook = xlsx.readFile('/home/megha/extra/1 TO 500 QR CODE.xlsx'); // Replace with your file path
const sheetName = workbook.SheetNames[0]; // Get the first sheet
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Iterate and insert each row into the database
sheetData.forEach(row => {
    const query = `
        INSERT INTO products 
        (product_name, quantity, product_number, serving_size, flavour, ingredients, batch_no, manufacturing_date, expiry_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        row['PRODUCT NAME'], 
        row['QUANTITY'], 
        row['PRODUCT NUMBER'], 
        row['SERVING SIZE'], 
        row['FLAVOUR'], 
        row['INGREDIANTS'], 
        row['BATCH NO'], 
        new Date(row['MFG. DATE']), 
        new Date(row['EXP. DATE'])
    ];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting row:', err);
        } else {
            console.log('Row inserted:', result.insertId);
        }
    });
});

// Close the connection
connection.end();


// const router = require("express").Router();
// const fs = require('fs');
// const qr = require('qr-image');
// const PDFDocument = require('pdfkit');
// const dotenv = require('dotenv');
// var connection = require('../database');
// const contentDisposition = require('content-disposition');
// dotenv.config();

// // Function to generate QR code and return as a buffer
// function generateQRCodeBuffer(data, size) {
//     const qrImage = qr.imageSync(data, { type: 'png', size });
//     return qrImage;
// }

// // Function to create PDF from QR codes
// function createPDF(res, qrCodeDataArray, pdfFileName, pdfWidth, pdfHeight, product, numOfQrInRow) {
//     const pdfWidthInPts = pdfWidth * 29;
//     const pdfHeightInPts = pdfHeight * 29;

//     const doc = new PDFDocument({
//         size: [pdfWidthInPts, pdfHeightInPts],
//         margins: { top: 15, bottom: 15, left: 15, right: 15 },
//     });

//     let buffers = [];
//     doc.on('data', buffers.push.bind(buffers));
//     doc.on('end', () => {
//         const pdfData = Buffer.concat(buffers);
//         res.setHeader('Content-type', "application/pdf");
//         res.setHeader('Content-disposition', contentDisposition(pdfFileName));
//         res.send(pdfData);
//     });

//     const stream = fs.createWriteStream(pdfFileName);
//     doc.pipe(stream);

//     qrCodeDataArray.forEach((qrCodeData, index) => {
//         const serialNumber = product.batch_no + "-" + (index + 1);
//         const qrLabel = `${product.product_name} (${serialNumber})`;

//         if (numOfQrInRow === 2) {
//             if (index % 2 === 0 && index !== 0) doc.addPage();

//             const scaleFactor = 23;
//             const qrCodeWidth = 2 * scaleFactor;
//             const qrCodeHeight = 2 * scaleFactor;
//             const qrPositionX = (index % 2) * (pdfWidthInPts / 2);
//             const qrPositionY = (pdfHeightInPts / 3);

//             doc.image(qrCodeData, qrPositionX + 20, qrPositionY, { width: qrCodeWidth, height: qrCodeHeight });
//             doc.fontSize(8).text(qrLabel, qrPositionX + 20, qrPositionY + qrCodeHeight + 10, { width: 130, align: 'center' });
//         } else {
//             if (index !== 0) doc.addPage();

//             const scaleFactor = 23;
//             const qrCodeWidth = 2 * scaleFactor;
//             const qrCodeHeight = 2 * scaleFactor;

//             const qrPositionX = (pdfWidthInPts - qrCodeWidth) / 2;
//             const qrPositionY = (pdfHeightInPts - qrCodeHeight) / 3;

//             doc.image(qrCodeData, qrPositionX, qrPositionY, { width: qrCodeWidth, height: qrCodeHeight });
//             doc.fontSize(8).text(qrLabel, qrPositionX, qrPositionY + qrCodeHeight + 10, { width: 130, align: 'center' });
//         }
//     });

//     doc.end();
// }

// // Router POST endpoint
// router.post('/', async (req, res) => {
//     const productId = req.body.product_id;
//     const startingRange = parseInt(req.body.starting_range, 10);
//     const endingRange = parseInt(req.body.ending_range, 10);
//     const totalQrCodes = endingRange - startingRange + 1;

//     const pdfFileName = 'product_qrcodes.pdf';

//     const sql = "SELECT * FROM products WHERE id = ? AND batch_no IS NOT NULL";
//     connection.query(sql, [productId], (err, results) => {
//         if (err) throw err;

//         if (results.length === 0) {
//             res.status(404).send("Product not found or missing batch number.");
//             return;
//         }

//         const product = results[0];
//         const qrCodeDataArray = [];

//         for (let i = startingRange; i <= endingRange; i++) {
//             const data = `${process.env.LINK_OF_QR}/product/${product.product_number}/${product.batch_no}-${i}`;
//             const qrCodeBuffer = generateQRCodeBuffer(data, 5);
//             qrCodeDataArray.push(qrCodeBuffer);
//         }

//         const numOfQrInRow = 1;
//         const pdfWidth = 5; // Width in cm
//         const pdfHeight = 5; // Height in cm

//         createPDF(res, qrCodeDataArray, pdfFileName, pdfWidth, pdfHeight, product, numOfQrInRow);
//     });
// });

// module.exports = router;
