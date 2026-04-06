import { useEffect } from 'react'
import './Dogs.css'

export default function Dogs() {
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
    <div className="dogs-page">
      {/* Hero */}
      <section className="page-hero dogs-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">Our Breeding Program</span>
          <h1>The Dogs</h1>
          <p>Meet the champions at the heart of Belle Sun Havanese. Each dog is health-tested, AKC registered, and chosen for exceptional temperament and conformation.</p>
        </div>
        <span className="paw-deco delay-2" style={{ top: '30%', right: '8%', fontSize: '4rem' }}>🐾</span>
      </section>

      {/* The Boys */}
      <section className="section">
        <div className="container">
          <div className="dogs-section-header animate-on-scroll">
            <div className="dogs-section-title">
              <span className="dogs-gender-badge boys-badge">♂ The Boys</span>
              <h2>Our Sires</h2>
            </div>
            <p>Champion-titled males selected for health, temperament, and breed standard conformity.</p>
          </div>
          <div className="dogs-grid">
            <div className="dog-card animate-on-scroll delay-100">
              <div className="dog-img-wrap">
                <img src="/images/theboys.jpg" alt="The Boys — Belle Sun Sires" />
                <div className="dog-img-overlay">
                  <span>The Boys 🏆</span>
                </div>
              </div>
              <div className="dog-card-body">
                <div className="dog-badges">
                  <span className="badge badge-blue">AKC Registered</span>
                  <span className="badge badge-teal">Health Tested</span>
                </div>
                <p>Our boys are championship-titled Havanese selected for exceptional conformation, temperament, and genetic health. Each sire is OFA and CHIC certified before being included in our program.</p>
                <div className="dog-traits">
                  {['OFA Certified', 'CHIC Certified', 'Genetic Tested', 'Champion Lines'].map(t => (
                    <span key={t} className="dog-trait">✓ {t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="dogs-divider">
        <div className="dogs-divider-paws" aria-hidden>
          {'🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾'.split(' ').map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>
      </div>

      {/* The Girls */}
      <section className="section">
        <div className="container">
          <div className="dogs-section-header animate-on-scroll">
            <div className="dogs-section-title">
              <span className="dogs-gender-badge girls-badge">♀ The Girls</span>
              <h2>Our Dams</h2>
            </div>
            <p>Loving mothers selected for gentle temperament, health, and champion bloodlines.</p>
          </div>
          <div className="dogs-grid">
            <div className="dog-card animate-on-scroll delay-100">
              <div className="dog-img-wrap">
                <img src="/images/thegirls.jpg" alt="The Girls — Belle Sun Dams" />
                <div className="dog-img-overlay">
                  <span>The Girls 💕</span>
                </div>
              </div>
              <div className="dog-card-body">
                <div className="dog-badges">
                  <span className="badge badge-gold">Champion Dams</span>
                  <span className="badge badge-teal">Health Tested</span>
                </div>
                <p>Our girls are carefully selected for loving temperament, perfect breed conformation, and verified genetic health. They are the heart of our breeding program and wonderful mothers.</p>
                <div className="dog-traits">
                  {['OFA Certified', 'CHIC Certified', 'Loving Mothers', 'Champion Lines'].map(t => (
                    <span key={t} className="dog-trait">✓ {t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Testing Info */}
      <section className="dogs-health-section animate-on-scroll">
        <div className="container">
          <div className="dogs-health-inner">
            <div className="dogs-health-text">
              <span className="eyebrow">Health &amp; Certification</span>
              <h2>Our Health Testing Standard</h2>
              <p>Every breeding dog at Belle Sun undergoes comprehensive health testing before entering our program. We don't cut corners — because healthy parents produce healthy puppies.</p>
            </div>
            <div className="health-certifications">
              {[
                { icon: '🧬', title: 'Genetic Testing', desc: 'Full panel genetic health screening for breed-specific markers' },
                { icon: '🦴', title: 'OFA Certification', desc: 'Orthopedic Foundation for Animals hip, elbow, and eye clearances' },
                { icon: '📋', title: 'CHIC Certification', desc: 'Canine Health Information Center database registration' },
                { icon: '👁️', title: 'Eye Clearances', desc: 'CAER eye examinations by board-certified ophthalmologists' },
              ].map((c, i) => (
                <div key={i} className="health-cert-item">
                  <span className="health-cert-icon">{c.icon}</span>
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
