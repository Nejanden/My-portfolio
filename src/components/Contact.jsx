import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>
        Get In <span>Touch</span>
      </h2>
      <p className="subtitle">
        Have a project in mind or just want to say hello? Drop me a message.
      </p>

      <div className="contact-container">
        {/* LEFT FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Nejanden" />
          <input type="email" placeholder="anejanden@gmail.com" />
          <textarea placeholder="Tell me about your project..." />
          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>nejanden@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 7550260021</p>
            </div>
          </div>

          <div className="info-card">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;