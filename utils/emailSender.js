const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: `"GCAM INTERNATIONAL" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Our Church!",
    html: `<p>Hello ${name}, your profile has been created successfully!</p>`,
  });
};