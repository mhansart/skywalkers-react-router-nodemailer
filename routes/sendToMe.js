const express = require('express');
const sendToMeRouter = express.Router();
const nodemailer = require('nodemailer');

console.log('from sendToMe');
module.exports = sendToMeRouter;
const transport = {
  // all of the configuration for making a site send an email.

  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
}
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    // if error happened code ends here
    console.error(error);
  } else {
    // this means success
    console.log('users ready to mail myself');
  }
});

sendToMeRouter.post('/', (req, res, next) => {
  // make mailable object
  const mail = {
    from: `${req.body.email}`,
    to: process.env.THE_EMAIL,
    subject: "Contact du site des Skys",
    html:`<h2>Informations</h2>
      <p>De: ${req.body.name} ${req.body.firstname} </p>
      <p>Adresse e-mail: ${req.body.email}</p>

      <h2>Message:</h2> 
      ${req.body.text}`,
  };
  transporter.sendMail(mail, (err,data) => {
    if(err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
});



