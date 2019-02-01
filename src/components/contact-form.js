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

        const { senderName, senderEmail, senderCompany, senderPhone, senderMessage } = this.state;
        
        const { REACT_APP_EMAILJS_RECEIVER: receiverEmail, 
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

        this.sendMessage(
            templateID, 
            templateParams,
            userID
        )
        this.setState({ 
            senderName: '',
            senderEmail: '',
            senderCompany: '',
            senderPhone: '',
            senderMessage: ''
        });
    }

    sendMessage(templateID, templateParams, userID) {
        emailjs.send('mailgun', templateID, templateParams, userID)
        .then(res => {
            this.setState({ submitted: true });
            setInterval(() => this.setState({ submitted: false }), 4000);
        })
        .catch(err => alert('Failed to send message. Error ', err));
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
                    value={ this.state.senderName }
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
                    value={ this.state.senderEmail }
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
                    value={ this.state.senderCompany }
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
                    value={ this.state.senderPhone }
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
                    value={ this.state.senderMessage }
                    onChange={ this.handleChange }
                ></textarea>
            </div>
            <button> SEND </button>
            <div 
                id="confirmation" 
                style={{ top: this.state.submitted ? '20px' : '-300px', 
                opacity: this.state.submitted ? '1' : '0' }}
            >
                <i className="fas fa-check"></i>
                <div id="confirmation-text">
                    <p>Form successfully submitted!</p>
                    <p>Thanks for contacting me. I'll get back to you ASAP!</p>
                </div>
            </div>
        </form>
    );
    }
}
 
export default Form;