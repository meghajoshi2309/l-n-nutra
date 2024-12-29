// email.service.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Explicit host for Gmail
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS 
    },
    secure: false, // Use SSL
    tls: {
        rejectUnauthorized: false, // Add this line if there are TLS issues
    },
    debug: true, // Show debug information
    logger: true, // Log connection activity
    connectionTimeout: 10000
});

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        text: `Please click the following link to verify your email: http://localhost:3000/verify/${verificationToken}`
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }

};