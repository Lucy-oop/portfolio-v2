import React, { useState } from "react";
import { ArrowUp } from "lucide-react"; 
import "./Contact.css";

// Get a free key at https://web3forms.com (no account/login required).
// Paste it below — submissions are delivered straight to your email.
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from your portfolio",
          from_name: form.name || "Portfolio visitor",
          ...form,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

          <button
            className="contact-btn"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact-status is-success" role="status">
              ✓ Thanks! Your message has been sent — I’ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact-status is-error" role="alert">
              Something went wrong. Please try again, or email me directly.
            </p>
          )}
        </form>

        <aside className="contact-card contact-info">
          <h3 className="info-title">Contact Info</h3>

          <a className="info-item" href="mailto:tomon5609@gmail.com">
            <span className="info-ico" aria-hidden="true">✉</span>
            <span className="info-link">tomon5609@gmail.com</span>
          </a>

          <a className="info-item" href="tel:+941574675">
            <span className="info-ico" aria-hidden="true">☎</span>
            <span className="info-link">+9 41574675</span>
          </a>

          <p className="info-note">
            Available for collaborations, freelance projects, and junior frontend roles.
          </p>
        </aside>
      </div>

     
      <a href="#about" className="scroll-top-btn" aria-label="Scroll to top">
        <ArrowUp size={24} strokeWidth={2.5} />
      </a>
      
    </section>
  );
}