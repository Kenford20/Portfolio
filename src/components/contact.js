import React from 'react';
import Form from './contact-form';

const Contact = (props) => {
    return ( 
        <div id="contact">
            <div id="contact-header">
                <span><i className="fas fa-comment"></i></span>
                <h2 className="section-headers"> Get in touch </h2>
                <h3> Use the form below to begin a conversation </h3>
            </div>

            <div id="contact-form-card">
                <Form />
                <div id="contact-info-wrapper">
                    <h3> Contact Information </h3>
                    <hr />
                    <div id="abc">
                        <i className="fas fa-user-alt"></i>
                        <h5> Kenny Zhou </h5>
                        <br />
                        <i className="fas fa-city city-icon"></i>
                        <h5> Chicago, Illinois </h5>
                        <br />
                        <i className="fas fa-globe-americas"></i>
                        <h5> United States </h5>
                        <br />
                        <i className="fas fa-phone-volume phone-icon"></i>
                        <h5> 312-532-0066 </h5>
                        <br />
                        <i className="fas fa-envelope-open"></i>
                        <h5> kzhou1013@gmail.com </h5>
                        <br />
                    </div>
                    <hr />

                    <p id="alt-contact-header">...or contact me via: </p>
                    <div id="alt-contact-wrapper">
                        <i className="fas fa-code"></i>
                        <i className="fas fa-code"></i>
                        <i className="fas fa-code"></i>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;