// src/components/Contact.js
import { useRef } from "react";
import emailjs from "emailjs-com";
import "../css/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e0d7meq", // from EmailJS
        "template_374u8o4", // from EmailJS
        form.current,
        "H1hSh_nuH1Vjy6cbc", // from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h1>Get in Touch</h1>
      <p className="subtitle">Contact Me</p>
      <div className="contact-container">
        <div className="contact-info">
          <div className="card">
            <h3>📧 Email</h3>
            <p>vanshikakakkar1225@gmail.com</p>
            <a href="mailto:vanshikakakkar1225@gmail.com">Write Me →</a>
          </div>
          <div className="card">
            <h3>💼 LinkedIn</h3>
            <p>@Vanshika Kakkar</p>
            <a
              href="https://www.linkedin.com/in/er-vanshika-kakkar-04769721b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write Me →
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Insert your name"
              required
            />

            <label>Mail</label>
            <input
              type="email"
              name="user_email"
              placeholder="Insert your email"
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message"
              required
            />

            <button type="submit">Send Message ✈️</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
