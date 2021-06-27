const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

//connect to gmail with nodemailer
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "will.crone11@gmail.com",
    pass: "Il@1403Gdale.Dr.",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

//router
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const partnerName = req.body.partnerName;
  const preferDate = req.body.preferDate;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "will.crone11@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
          <p>Partner Name: ${partnerName}</p>
          <p>Preferred Date: ${preferDate}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});