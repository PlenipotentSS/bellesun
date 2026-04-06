import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero1.jpg" alt="Havanese puppy in grass" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <span className="badge badge-gold animate-badge">🏆 AKC Champion Bloodlines</span>
          <h1>
            The Belle Sun<br />
            <em>Difference</em>
          </h1>
          <p>Lovingly raised Havanese puppies with champion bloodlines, expert health screening, and a lifetime of support — based in Seattle, WA since 2008.</p>
          <div className="hero-ctas">
            <Link to="/available-dogs" className="btn btn-gold">🐾 Meet Available Puppies</Link>
            <Link to="/why-us" className="btn btn-outline hero-outline-btn">Learn Our Story</Link>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden>
          <span>scroll</span>
          <div className="scroll-arrow" />
        </div>
        {/* Floating paws */}
        <span className="paw-deco delay-1" style={{ top: '20%', right: '8%', fontSize: '3.5rem' }}>🐾</span>
        <span className="paw-deco delay-3" style={{ top: '60%', right: '15%', fontSize: '2.5rem' }}>🐾</span>
        <span className="paw-deco delay-2" style={{ top: '75%', left: '6%', fontSize: '2rem' }}>🐾</span>
      </section>

      {/* ── Stats Strip ── */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '16+',  label: 'Years Breeding' },
              { num: '1',    label: 'Litter/Year Avg.' },
              { num: '100%', label: 'Health Screened' },
              { num: '$3,500', label: 'Per Puppy (All-In)' },
            ].map((s, i) => (
              <div key={i} className="stat-item animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Belle Sun ── */}
      <section className="section why-preview">
        <div className="container">
          <div className="why-layout">
            <div className="why-text animate-on-scroll">
              <span className="eyebrow">Our Promise</span>
              <h2>Why Belle Sun?</h2>
              <p>At Belle Sun, we're committed to producing well-adjusted, confident, healthy championship Havanese. We health screen both parents and select for the loving, goofy temperament that makes Havanese special.</p>
              <p>Our puppies receive comprehensive socialization and basic training before coming home — crate training, potty training, and grooming preparation so your puppy is ready for the world.</p>
              <p>Our commitment extends beyond adoption day. Belle Sun owners receive <strong>lifetime support</strong> — whether you need training recommendations, nutrition advice, or answers to questions throughout your dog's life.</p>
              <Link to="/why-us" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Discover Our Process →</Link>
            </div>
            <div className="why-image animate-on-scroll delay-200">
              <div className="why-img-wrap">
                <img src="/images/hero2.jpg" alt="Happy Havanese" />
                <div className="why-img-badge">
                  <span>🏡</span>
                  <strong>Family Raised</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values Cards ── */}
      <section className="section values-section">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">What Sets Us Apart</span>
            <h2>Raised With Love, Ready for Life</h2>
          </div>
          <div className="values-grid">
            {[
              {
                icon: '❤️‍🩹',
                title: 'Health First',
                desc: 'Rigorous health screening including genetic testing, OFA certification, and CHIC certification on all breeding dogs. Zero instances of heart disease or cancer in over a decade.',
                color: 'blue',
                delay: '0s',
              },
              {
                icon: '🏠',
                title: 'Family Raised',
                desc: 'Our puppies live in the heart of our home from day one, spending their first weeks in our bedroom for round-the-clock monitoring and daily human interaction.',
                color: 'gold',
                delay: '0.1s',
              },
              {
                icon: '🌍',
                title: 'World Ready',
                desc: 'Desensitization training starting at three days old. By the time they go home, puppies are crate trained, litter box trained, and comfortable with grooming routines.',
                color: 'teal',
                delay: '0.2s',
              },
              {
                icon: '🎁',
                title: 'Complete Package',
                desc: 'Your puppy comes fully vaccinated (2x DHPP, Rabies, Bordatella), microchipped, and AKC registered — plus a full starter kit.',
                color: 'blue',
                delay: '0.3s',
              },
            ].map((v, i) => (
              <div key={i} className={`value-card value-${v.color} animate-on-scroll`} style={{ transitionDelay: v.delay }}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Dogs teaser ── */}
      <section className="section dogs-teaser">
        <div className="dogs-teaser-bg">
          <img src="/images/whyus-hero.jpg" alt="Belle Sun Havanese" />
          <div className="dogs-teaser-overlay" />
        </div>
        <div className="container dogs-teaser-content">
          <div className="animate-on-scroll">
            <span className="eyebrow">Our Breeding Program</span>
            <h2>Meet The Dogs</h2>
            <p>Carefully selected boys and girls with champion bloodlines, full health certifications, and the irresistible Havanese personality.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link to="/dogs" className="btn btn-gold">Meet The Dogs</Link>
              <Link to="/available-dogs" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>See Available Puppies</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <section className="section contact-strip">
        <div className="container">
          <div className="contact-strip-inner animate-on-scroll">
            <div className="contact-strip-text">
              <span className="eyebrow">Get in Touch</span>
              <h2>Interested in a Belle Sun Puppy?</h2>
              <p>We are always excited to place our puppies in their forever homes. We don't maintain a waiting list, so check back often for available litters.</p>
            </div>
            <div className="contact-strip-ctas">
              <Link to="/picking-a-puppy" className="btn btn-primary">Start the Process</Link>
              <Link to="/contact" className="btn btn-outline">Contact Anne</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
