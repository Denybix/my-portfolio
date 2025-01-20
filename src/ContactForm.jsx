import React, { useRef } from "react";
import { forwardRef } from "react";
import emailjs from "emailjs-com";
import './form.css'
import Footer from "./Footer";

const ContactForm = forwardRef((props, ref) => 
{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_9d2q31t",
            "template_ut8ffls",
            form.current,
            "QEXuOCt8Fai58knr2"
        )
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully");
        })
        .catch((error) => {
            console.log(error.text);
            alert("Failed to send message, please try again.");
        });

        e.target.reset();
    };

    return(
        <div className="contact-form" ref={ref}>
            <h2>Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-data">
                    <label>Name</label>
                    <input type="text" name="user_name" required className="input1"/>
                </div>
                <div className="form-data">
                    <label>Email</label>
                    <input type="email" name="user_email" required className="input2"/>
                </div>
                <div className="form-data">
                    <label className="label">Message</label>
                    <textarea name="message" required className="input3"/>
                </div>
                <button type="submit">Send</button>
            </form>

            <p>email: borthakurkatyayan@gmail.com | contact no: +91-70865-67052</p>

            <div className="media-icons">
                <a href=" https://github.com/Denybix" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/katyayan-borthakur-59b60131a/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <Footer/>
        </div>
    )
});

export default ContactForm;