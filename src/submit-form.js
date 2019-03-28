import * as emailjs from 'emailjs-com';
require('dotenv').config();

export const submitForm = (contactFormData) => {
    const { senderName, senderEmail, senderCompany, senderPhone, senderMessage } = contactFormData;

    const { 
        REACT_APP_EMAILJS_RECEIVER: receiverEmail, 
        REACT_APP_EMAILJS_TEMPLATEID: templateID, 
        REACT_APP_EMAILJS_USERID: userID 
    } = process.env;

    const templateParams = {
        "name": senderName,
        "receiverEmail": receiverEmail,
        "company": senderCompany,
        "phone": senderPhone,
        "senderEmail": senderEmail,
        "message": senderMessage
    };

    return emailjs.send('mailgun', templateID, templateParams, userID)
    .then(res => {
        console.log(res);
        return [false, true]; // for updating the formStatus state ie: [loading, submitted]
    })
    .catch(err => alert('Failed to send message. Error ', err));
}