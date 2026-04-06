import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire to a real form backend (e.g. Formspree, Netlify Forms)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">Say Hello</span>
          <h1>Contact Us</h1>
          <p>We are always excited to place our puppies in their forever homes.</p>
        </div>
        <span className="paw-deco delay-2" style={{ top: '30%', right: '10%', fontSize: '4rem' }}>🐾</span>
        <span className="paw-deco delay-1" style={{ bottom: '20%', left: '6%', fontSize: '3rem' }}>🐾</span>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Info */}
            <div className="contact-info animate-on-scroll">
              <span className="eyebrow">Get In Touch</span>
              <h2>We'd Love to Hear From You</h2>
              <p>
                Due to our goal of breeding show quality dogs, the small number of litters we have, and the fact that we prioritize show homes, <strong>we do not have any form of waiting list.</strong>
              </p>
              <p>
                Please continue checking the form on our <Link to="/picking-a-puppy">Picking A Puppy</Link> page to see if we have any puppies to place.
              </p>
              <p>
                If you are interested in learning more about our show dogs, have questions about the Havanese breed, or questions about owning one, please use the form. We will read every e-mail but if the auto reply does not answer your question, we will communicate further.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <strong>Location</strong>
                    <span>Seattle, WA</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">✉️</div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:anne@bellesunhavanese.com">anne@bellesunhavanese.com</a>
                  </div>
                </div>
              </div>

              {/* Puppy image */}
              <div className="contact-img-wrap">
                <img src="/images/contact-puppies.jpg" alt="A pile of adorable Belle Sun puppies" />
                <div className="contact-img-caption">🐾 A typical Belle Sun litter</div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap animate-on-scroll delay-200">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">🐾</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out! Anne will be in touch soon.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3>Send a Message</h3>
                  <div className="form-group">
                    <label htmlFor="name">Your Name <span className="required">*</span></label>
                    <input
                      id="name" name="name" type="text"
                      value={formState.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email <span className="required">*</span></label>
                      <input
                        id="email" name="email" type="email"
                        value={formState.email} onChange={handleChange}
                        placeholder="jane@example.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone <span className="optional">(optional)</span></label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={formState.phone} onChange={handleChange}
                        placeholder="(206) 555-0100"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                      id="message" name="message"
                      value={formState.message} onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about yourself and what you're looking for in a Havanese companion..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary contact-submit">
                    🐾 Send Message
                  </button>
                  <p className="form-note">
                    We read every message. If our auto-reply doesn't fully answer your question, Anne will follow up personally.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="contact-social-section">
        <div className="container">
          <div className="contact-social animate-on-scroll">
            <h3>Follow Along</h3>
            <p>Stay up to date with our latest litters, show results, and puppy updates!</p>
            <div className="social-links">
              <a href="https://www.instagram.com/BelleSHavanese/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>@BelleSHavanese</span>
              </a>
              <a href="https://www.facebook.com/bellesunhavanese" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Belle Sun Havanese</span>
              </a>
              <a href="https://twitter.com/BelleSHavanese" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>@BelleSHavanese</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
