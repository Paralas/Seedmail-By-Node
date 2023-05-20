const nodemailer = require('nodemailer');
const fs = require('fs');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth : {
        user : '--', // input user / pass from mail service
        pass : '--',
    },
    tls: {
        rejectUnauthorized: false
    }
});

let video = fs.readFileSync('../Kafka_Home/Kafka_Internet.mp4');

let mailOptions = {
    from: '--', //input sender and reciveer
    to: '--',
    subject: 'Kafka Ultimate Home',
    text: 'Indi Home Phaket phoenix',
    attachments: [{
        filename: 'Kafka_Internet.mp4',
        content: video
    }]
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
