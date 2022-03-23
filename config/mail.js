
module.exports =  {
    config: {
        port: 465,               // true for 465, false for other ports
        host: "your smtp host",
        auth: {
            user: 'your email',
            pass: 'your email password',
        },
        secure: true,
    },
    mailData: {
        from: 'your email',  // sender address
        //to: 'myfriend@gmail.com',   // list of receivers
        subject: 'Title email',
        //text: 'That was easy!',
        //html: tplMail,
        /*attachments: [
            {
                filename: 'logo.png',
                path: '/assets/logo.png'
            }
        ]*/
    }
}

/*
const transporter = nodemailer.createTransport(mailConfig)
mailData.to = emailUser
mail.text = test
mail.html = html structure message
transporter.sendMail(mailData, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
*/
