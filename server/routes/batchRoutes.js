// const router = require("express").Router();
// const fs = require("fs");
// const qr = require("qr-image");
// const PDFDocument = require("pdfkit");
// const dotenv = require("dotenv");
// const mysql = require('mysql2');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'user1',
//     password: 'pass1', // replace with your MySQL password
//     database: 'test'
//   });
// const contentDisposition = require("content-disposition");

// dotenv.config();

// // Function to generate QR code and return as a buffer
// function generateQRCodeBuffer(data, size) {
//     const qrImage = qr.imageSync(data, { type: "png", size });
//     return qrImage;
// }

// // Function to create PDF from QR codes
// function createPDF(res, qrCodeDataArray, pdfFileName, numOfQrInRow) {
//     const pdfWidth = 21; // A4 width in cm
//     const pdfHeight = 29.7; // A4 height in cm
//     const pdfWidthInPts = pdfWidth * 28.346;
//     const pdfHeightInPts = pdfHeight * 28.346;

//     const doc = new PDFDocument({
//         size: [pdfWidthInPts, pdfHeightInPts],
//         margins: { top: 15, bottom: 15, left: 15, right: 15 },
//     });

//     let buffers = [];
//     doc.on("data", buffers.push.bind(buffers));
//     doc.on("end", () => {
//         let pdfData = Buffer.concat(buffers);
//         res.setHeader("Content-Type", "application/octet-stream");
//         res.setHeader("Content-Disposition", contentDisposition(pdfFileName));
//         res.send(pdfData);
//     });

//     // Add QR codes to the PDF
//     qrCodeDataArray.forEach((qrCodeItem, index) => {
//         const { qrCodeData, uniqueSerialText } = qrCodeItem;

//         if (numOfQrInRow === 2) {
//             if (index % 2 === 0 && index !== 0) {
//                 doc.addPage();
//             }

//             const qrCodeWidth = 150; // QR code width in points
//             const qrCodeHeight = 150;
//             const marginBetweenCodes = 20;
//             const qrX = (index % 2) * (pdfWidthInPts / 2) + marginBetweenCodes;
//             const qrY = 100;

//             doc.image(qrCodeData, qrX, qrY, { width: qrCodeWidth, height: qrCodeHeight });
//             doc.fontSize(10).text(uniqueSerialText, qrX, qrY + qrCodeHeight + 5, { width: 150, align: "center" });
//         } else {
//             if (index !== 0) {
//                 doc.addPage();
//             }

//             const qrCodeWidth = 200;
//             const qrCodeHeight = 200;
//             const qrX = (pdfWidthInPts - qrCodeWidth) / 2;
//             const qrY = 200;

//             doc.image(qrCodeData, qrX, qrY, { width: qrCodeWidth, height: qrCodeHeight });
//             doc.fontSize(10).text(uniqueSerialText, qrX, qrY + qrCodeHeight + 10, { width: qrCodeWidth, align: "center" });
//         }
//     });

//     doc.end();
// }

// // GET route to generate QR codes for all products
// router.get("/", async (req, res) => {
//     const sql = "SELECT * FROM test.products WHERE batch_no IS NOT NULL"; // Ensure batch_no exists
//     connection.query(sql, (err, products) => {
//         if (err) {
//             console.error("Error fetching products:", err);
//             return res.status(500).send("Database error");
//         }

//         if (products.length === 0) {
//             return res.status(404).send("No products found");
//         }

//         const qrCodeDataArray = products.map((product) => {
//             const data = `https://docs.google.com/document/d/1ugdDIDxy-B9Zn7L3XnMlj_NmtMaJCD874Yzax1sVwTE/edit?usp=sharing`;
//             const qrCodeBuffer = generateQRCodeBuffer(data, 5);

//             const uniqueSerialText = `Product: ${product.product_name}\nBatch: ${product.batch_no}\nMfg: ${product.manufacturing_date}\nExp: ${product.expiry_date}`;
//             return { qrCodeData: qrCodeBuffer, uniqueSerialText };
//         });

//         const pdfFileName = "product_qrcodes.pdf";
//         const numOfQrInRow = 2; // Set layout preference
//         createPDF(res, qrCodeDataArray, pdfFileName, numOfQrInRow);
//     });
// });

// module.exports = router;





// const express = require("express");
// const qr = require("qr-image");
// const mysql = require("mysql2");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// const PORT = 3000;

// // MySQL Database Connection
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "user1", // Update with your DB username
//     password: "pass1", // Update with your DB password
//     database: "test", // Update with your DB name
// });

// connection.connect((err) => {
//     if (err) {
//         console.error("Error connecting to database:", err);
//         process.exit(1);
//     }
//     console.log("Connected to the database");
// });

// // Function to generate QR code as buffer
// function generateQRCode(data) {
//     return qr.imageSync(data, { type: "png", size: 5 });
// }

// // GET route to generate QR codes for all products
// app.get("/generate-qr", (req, res) => {
//     const sql = "SELECT * FROM products WHERE batch_no IS NOT NULL";
//     connection.query(sql, (err, products) => {
//         if (err) {
//             console.error("Database query error:", err);
//             return res.status(500).send("Database error");
//         }

//         if (products.length === 0) {
//             return res.status(404).send("No products found");
//         }

//         // Generate QR codes
//         const qrCodeDataArray = products.map((product) => {
//             const productLink = `https://docs.google.com/document/d/1ugdDIDxy-B9Zn7L3XnMlj_NmtMaJCD874Yzax1sVwTE/edit?usp=sharing#product-id=${product.id}`;
//             const qrCodeBuffer = generateQRCode(productLink);
//             return { qrCode: qrCodeBuffer, product };
//         });

//         res.setHeader("Content-Type", "application/json");
//         res.send(
//             qrCodeDataArray.map((item) => ({
//                 product_name: item.product.product_name,
//                 qr_code: `data:image/png;base64,${item.qrCode.toString("base64")}`,
//             }))
//         );
//     });
// });

// // GET route to serve product details dynamically
// app.get("/product-details", (req, res) => {
//     const productId = req.query["product-id"];
//     if (!productId) {
//         return res.status(400).send("Product ID is required");
//     }

//     const sql = "SELECT * FROM products WHERE id = ?";
//     connection.query(sql, [productId], (err, results) => {
//         if (err) {
//             console.error("Database query error:", err);
//             return res.status(500).send("Database error");
//         }

//         if (results.length === 0) {
//             return res.status(404).send("Product not found");
//         }

//         const product = results[0];
//         res.send(`
//             <h1>Product Details</h1>
//             <p><b>Product Name:</b> ${product.product_name}</p>
//             <p><b>Batch No:</b> ${product.batch_no}</p>
//             <p><b>Manufacturing Date:</b> ${product.manufacturing_date}</p>
//             <p><b>Expiry Date:</b> ${product.expiry_date}</p>
//             <p><b>Serving Size:</b> ${product.serving_size}</p>
//             <p><b>Flavour:</b> ${product.flavour}</p>
//             <p><b>Ingredients:</b> ${product.ingredients}</p>
//         `);
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });






const express = require("express");
const fs = require("fs");
const qr = require("qr-image");
const PDFDocument = require("pdfkit");
const mysql = require("mysql2");
const { log } = require("console");
const router = express.Router();
const port = 3000;

// Database connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "user1", // Replace with your MySQL username
    password: "pass1", // Replace with your MySQL password
    database: "test", // Replace with your database name
});

// Function to generate QR code buffer
function generateQRCodeBuffer(data, size) {
    return qr.imageSync(data, { type: "png", size });
}

// Function to create PDF from QR codes
function createPDF(res, qrCodeDataArray, pdfFileName) {
    const doc = new PDFDocument({ margin: 30 });
    doc.pipe(fs.createWriteStream(pdfFileName)); // Save the PDF to a file

    qrCodeDataArray.forEach((item, index) => {
        if (index !== 0) doc.addPage();

        doc.image(item.qrCodeBuffer, { fit: [200, 200], align: "center", valign: "center" });
        doc.moveDown();
        doc.fontSize(12).text(item.text, { align: "center" });
    });

    doc.end();

    // Respond with the PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${pdfFileName}`);
    const fileStream = fs.createReadStream(pdfFileName);
    fileStream.pipe(res);
}

// Endpoint to generate QR codes and PDF
router.get("/", (req, res) => {
    console.log("hiiii");
    
    const sql = "SELECT * FROM products WHERE batch_no IS NOT NULL";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Database error");
        }

        if (results.length === 0) {
            return res.status(404).send("No products found");
        }

        const qrCodeDataArray = results.map((product) => {
            const googleDocLink = `https://docs.google.com/document/d/1ugdDIDxy-B9Zn7L3XnMlj_NmtMaJCD874Yzax1sVwTE/edit?usp=sharing&product_name=${encodeURIComponent(
                product.product_name
            )}&batch_no=${encodeURIComponent(product.batch_no)}&mfg_date=${encodeURIComponent(
                product.manufacturing_date
            )}&exp_date=${encodeURIComponent(product.expiry_date)}`;

            const qrCodeBuffer = generateQRCodeBuffer(googleDocLink, 5);

            return {
                qrCodeBuffer,
                text: `Product: ${product.product_name}\nBatch No: ${product.batch_no}\nMfg: ${product.manufacturing_date}\nExp: ${product.expiry_date}`,
            };
        });

        const pdfFileName = "Product_QRCodes.pdf";
        createPDF(res, qrCodeDataArray, pdfFileName);
    });
});

module.exports = router;
















// const express = require("express");
// const fs = require("fs");
// const qr = require("qr-image");
// const PDFDocument = require("pdfkit");
// const mysql = require("mysql2");
// const router = express.Router();

// // Database connection
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "user1", // Replace with your MySQL username
//     password: "pass1", // Replace with your MySQL password
//     database: "test", // Replace with your database name
// });

// // Function to generate QR code buffer
// function generateQRCodeBuffer(data, size) {
//     return qr.imageSync(data, { type: "png", size });
// }

// // Function to create PDF from product details
// function createPDF(res, product) {
//     const doc = new PDFDocument({ margin: 50 });
//     doc.pipe(res);

//     // Add product details to PDF
//     doc.font('Helvetica-Bold').fontSize(18).text(`Product: ${product.product_name}`);
//     doc.font('Helvetica').fontSize(12).text(`Batch Number: ${product.batch_no}`);
//     doc.text(`Manufacturing Date: ${product.manufacturing_date}`);
//     doc.text(`Expiry Date: ${product.expiry_date}`);
//     doc.text(`Description: ${product.description}`);

//     doc.end();
// }

// // Endpoint to generate QR codes and PDF for all products
// router.get("/", (req, res) => {
//     const sql = "SELECT * FROM products WHERE batch_no IS NOT NULL";
//     connection.query(sql, (err, results) => {
//         if (err) {
//             console.error("Database error:", err);
//             return res.status(500).send("Database error");
//         }

//         if (results.length === 0) {
//             return res.status(404).send("No products found");
//         }

//         // Create a PDF with QR codes for each product
//         const doc = new PDFDocument({ margin: 50 });
//         doc.pipe(res);

//         const doc2 = new PDFDocument({margin: 50})
//         doc2.pipe(res);
//         doc2.font('Helvetica-Bold').fontSize(18).text("product.product_name", 280, 50);
//         results.forEach((product, index) => {
//             if (index !== 0) doc.addPage();
            
//             // Create a URL to be encoded in the QR code
//             const qrUrl = `${doc2}`;  // This URL will be scanned to generate the product PDF
//             const qrCodeBuffer = generateQRCodeBuffer(qrUrl, 5);
            
//             // Add QR code to the PDF
//             doc.image(qrCodeBuffer, 50, 50, { fit: [200, 200] });
            
//             // Add product details text
//             doc.font('Helvetica-Bold').fontSize(18).text(product.product_name, 280, 50);
//             doc.font('Helvetica').fontSize(12).text(`Batch Number: ${product.batch_no}`, 280, 80);
//             doc.text(`Manufacturing Date: ${product.manufacturing_date}`, 280, 100);
//             doc.text(`Expiry Date: ${product.expiry_date}`, 280, 120);
            
//             // Add a border
//             doc.rect(40, 40, 520, 220).stroke();
//         });
        
//         doc.end();
//         doc2.end();
//     });
// });

// // Endpoint to generate a PDF for the product when the QR code is scanned
// router.get("/product/:productId", (req, res) => {
//     const productId = req.params.productId;
//     const sql = "SELECT * FROM products WHERE product_id = ?";

//     connection.query(sql, [productId], (err, results) => {
//         if (err) {
//             console.error("Database error:", err);
//             return res.status(500).send("Database error");
//         }

//         if (results.length === 0) {
//             return res.status(404).send("Product not found");
//         }

//         // Generate PDF with product details
//         const product = results[0];
//         res.setHeader("Content-Type", "application/pdf");
//         res.setHeader("Content-Disposition", `attachment; filename=${product.product_name}_details.pdf`);
        
//         createPDF(res, product);
//     });
// });

// module.exports = router;




// router.get("/", (req, res) => {
//     const sql = "SELECT * FROM products WHERE batch_no IS NOT NULL";
//     connection.query(sql, (err, results) => {
//         if (err) {
//             console.error("Database error:", err);
//             return res.status(500).send("Database error");
//         }

//         if (results.length === 0) {
//             return res.status(404).send("No products found");
//         }

//         const baseUrl = "http://localhost:3000"; // Replace with your domain or local server URL

//         // Create a PDF with QR codes for each product
//         const doc = new PDFDocument({ margin: 50 });
//         doc.pipe(res);

//         results.forEach((product, index) => {
//             if (index !== 0) doc.addPage();
            
//             // Create a URL to be encoded in the QR code
//             const qrUrl = `${baseUrl}/${product.product_id}`; // Endpoint for generating the product-specific PDF
//             const qrCodeBuffer = generateQRCodeBuffer(qrUrl, 5);
            
//             // Add QR code to the PDF
//             doc.image(qrCodeBuffer, 50, 50, { fit: [200, 200] });
            
//             // Add product details text
//             doc.font('Helvetica-Bold').fontSize(18).text(product.product_name, 280, 50);
//             doc.font('Helvetica').fontSize(12).text(`Batch Number: ${product.batch_no}`, 280, 80);
//             doc.text(`Manufacturing Date: ${product.manufacturing_date}`, 280, 100);
//             doc.text(`Expiry Date: ${product.expiry_date}`, 280, 120);
            
//             // Add a border
//             doc.rect(40, 40, 520, 220).stroke();
//         });

//         doc.end();
//     });
// });
