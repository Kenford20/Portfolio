import React from 'react';
import * as emailjs from 'emailjs-com';

require('dotenv').config();

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        this.state = {
            senderName: '',
            senderEmail: '',
            senderCompany: '',
            senderPhone: '',
            senderMessage: '',
            submitted: false
        }
    }

    handleChange(e) {
        switch(e.target.id) {
            case 'name-input': this.setState({ senderName: e.target.value }); break;
            case 'email-input': this.setState({ senderEmail: e.target.value }); break;
            case 'company-input': this.setState({ senderCompany: e.target.value }); break;
            case 'phone-input': this.setState({ senderPhone: e.target.value }); break;
            case 'message-input': this.setState({ senderMessage: e.target.value }); break;
            default: alert('Something went wrong with your inputs...');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.submitted ? 'submitted' : 'failed to submit');

        const { senderName, senderEmail, senderCompany, senderPhone, senderMessage } = this.state;
        const { REACT_APP_EMAILJS_RECEIVER: receiverEmail, 
                REACT_APP_EMAILJS_TEMPLATEID: templateID, 
                REACT_APP_EMAILJS_USERID: userID 
        } = process.env;

        this.sendMessage(
            templateID, 
            receiverEmail,
            senderName,
            senderEmail,
            senderCompany,
            senderPhone,
            senderMessage,
            userID
        )
        this.setState({ submitted: true });
    }

    sendMessage(templateID, receiverEmail, name, senderEmail, company, phone, message, userID) {
        emailjs.send('mailgun', templateID, 
            receiverEmail,
            senderEmail,
            name,
            company,
            phone,
            message,
        userID).then(res => {
            alert('submitted message successfully!')
        }).catch(err => alert('Failed to send message. Error ', err));
    }

    render() {
    return ( 
        <form id="form-wrapper" onSubmit={ this.handleSubmit }>
            <h3> Fill out the form </h3>
            <div className="form-items-wrapper">
                <p className="form-item-label"> Name: </p>
                <input 
                    id="name-input"
                    className="form-inputs" 
                    type="text" 
                    maxLength="50"
                    placeholder="Enter name..." 
                    required
                    onChange={ this.handleChange }
                ></input>
            </div>
            <div className="form-items-wrapper">
                <p className="form-item-label"> E-mail: </p>
                <input 
                    id="email-input"
                    className="form-inputs" 
                    maxLength="50"
                    type="email" 
                    placeholder="Enter e-mail..." 
                    required
                    onChange={ this.handleChange }
                ></input>
            </div>
            <div className="form-items-wrapper">
                <p className="form-item-label"> Company: (optional)</p>
                <input 
                    id="company-input"
                    className="form-inputs" 
                    type="text" 
                    maxLength="50"
                    placeholder="Enter company..."
                    onChange={ this.handleChange }
                ></input>
            </div>
            <div className="form-items-wrapper">
                <p className="form-item-label"> Phone: (optional)</p>
                <input 
                    id="phone-input"
                    className="form-inputs" 
                    type="tel" 
                    maxLength="20"
                    placeholder="Enter phone..."
                    onChange={ this.handleChange }
                ></input>
            </div>
            <div className="form-items-wrapper">
                <p className="form-item-label"> Message: </p>
                <textarea 
                    id="message-input"
                    className="form-inputs" 
                    type="text" placeholder="Enter message..." 
                    maxLength="500" 
                    rows="10"
                    required
                    onChange={ this.handleChange }
                ></textarea>
            </div>
            <button> SEND </button>
        </form>
    );
    }
}
 
export default Form;