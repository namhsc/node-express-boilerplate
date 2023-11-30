const nodemailer = require('nodemailer');
const config = require('../config/config');

const transport = nodemailer.createTransport(config.email.smtp);

const sendEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};

module.exports = {
  transport,
  sendEmail,
};
