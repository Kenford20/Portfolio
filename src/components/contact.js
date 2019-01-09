import React from 'react';
import '../styles/contact.scss';

const Contact = () => {
    return ( 
        <div>
            <div id="contact-header">
                <span><i class="fas fa-code"></i></span>
                <h2 className="section-headers"> Contact </h2>
                <h3> Use the form below to begin a conversation </h3>
            </div>

            <div id="contact-form-card">
                <div id="form-wrapper">
                    <h3> Fill out the form </h3>
                    <div className="form-items-wrapper">
                        <p className="form-item-label"> Name: </p>
                        <input className="form-inputs" type="text" placeholder="Enter name..."></input>
                    </div>
                    <div className="form-items-wrapper">
                        <p className="form-item-label"> E-mail: </p>
                        <input className="form-inputs" type="email" placeholder="Enter e-mail..."></input>
                    </div>
                    <div className="form-items-wrapper">
                        <p className="form-item-label"> Company: </p>
                        <input className="form-inputs" type="text" placeholder="Enter company..."></input>
                    </div>
                    <div className="form-items-wrapper">
                        <p className="form-item-label"> Phone: </p>
                        <input className="form-inputs" type="number" placeholder="Enter phone..."></input>
                    </div>
                    <div id="abc" className="form-items-wrapper">
                        <p className="form-item-label"> Message: </p>
                        <textarea className="form-inputs" type="text" placeholder="Enter message..." rows="10"></textarea>
                    </div>
                    <button> SEND </button>
                </div>

                <div id="contact-info-wrapper">
                    <h3> Contact Information </h3>
                    <hr />
                    <span><i class="fas fa-code"></i></span>
                    <h5> Kenny Zhou </h5>
                    <br />
                    <span><i class="fas fa-code"></i></span>
                    <h5> Chicago, Illinois </h5>
                    <br />
                    <span><i class="fas fa-code"></i></span>
                    <h5> United States </h5>
                    <br />
                    <span><i class="fas fa-code"></i></span>
                    <h5> 312-532-0066 </h5>
                    <br />
                    <span><i class="fas fa-code"></i></span>
                    <h5> kzhou1013@gmail.com </h5>
                    <br />
                    <hr />

                    <p id="alt-contact-header">...or contact me via: </p>
                    <div id="alt-contact-wrapper">
                        <span><i class="fas fa-code"></i></span>
                        <span><i class="fas fa-code"></i></span>
                        <span><i class="fas fa-code"></i></span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;