import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane, FaFacebookMessenger } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = React.forwardRef((props, ref) => {
  const EMAIL_JS = {
    SERVICE_ID: "service_4l3kitz",
    TEMPLATE_ID: "template_4t844yy",
    PUBLIC_KEY: "2iTb_58MLioVaygZ8",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAIL_JS.SERVICE_ID,
        EMAIL_JS.TEMPLATE_ID,
        form.current,
        EMAIL_JS.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email has been successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" ref={ref}>
      <div className="section__name">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h3>Email</h3>
            <h5>lethaiduc11@gmail.com</h5>
            <a href="mailto:lethaiduc11@gmail.com">Send an email</a>
          </div>
          <div className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h3>Messenger</h3>
            <h5>fb/lethaiduc</h5>
            <a href="https://m.me/lethaiduc" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </div>
          <div className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h3>Telegram</h3>
            <h5>t.me/lethaiduc</h5>
            <a href="https://t.me/ltduc11" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </div>
        </div>

        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary contact__form-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
