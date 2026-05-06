import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks Lucy! Message sent (demo).");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-wrap">
      <header className="contact-hero">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Drop me a message if you have any questions, want to work together, or
          just wish to connect! Fill out the form and I’ll get back to you as soon
          as possible.
        </p>
        <div className="contact-glow-line" />
      </header>

      <div className="contact-grid">
        <form className="contact-card contact-form" onSubmit={onSubmit}>
          <div className="contact-row">
            <label className="field">
              <span className="sr-only">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                type="text"
                placeholder="Name"
                autoComplete="name"
              />
            </label>

            <label className="field">
              <span className="sr-only">Email</span>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                type="email"
                placeholder="Email *"
                required
                autoComplete="email"
              />
            </label>
          </div>

          <label className="field">
            <span className="sr-only">Phone number</span>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              type="tel"
              placeholder="Phone number"
              autoComplete="tel"
            />
          </label>

          <label className="field">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Message"
              rows="6"
              required
            />
          </label>

          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </form>

        <aside className="contact-card contact-info">
          <h3 className="info-title">Contact Info</h3>

          <div className="info-item">
            <span className="info-ico" aria-hidden="true">✉</span>
            <a className="info-link" href="mailto:tomon5609@gmail.com">
              tomon5609@gmail.com
            </a>
          </div>

          <div className="info-item">
            <span className="info-ico" aria-hidden="true">☎</span>
            <a className="info-link" href="tel:+941574675">
              +9 41574675
            </a>
          </div>

          <p className="info-note">
            Available for collaborations, freelance projects, and junior frontend roles.
          </p>
        </aside>
      </div>
    </section>
  );
}
