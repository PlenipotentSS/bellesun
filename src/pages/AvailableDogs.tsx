import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AvailableDogs.css'

export default function AvailableDogs() {
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
    <div className="available-page">
      {/* Hero */}
      <section className="page-hero available-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">Find Your Companion</span>
          <h1>Available Dogs</h1>
          <p>Our puppies are well-socialized, progressing wonderfully with potty training, and are now ready to find their loving forever homes!</p>
        </div>
        <span className="paw-deco delay-2" style={{ top: '30%', right: '10%', fontSize: '4rem' }}>🐾</span>
        <span className="paw-deco delay-4" style={{ bottom: '20%', left: '6%', fontSize: '2.5rem' }}>🐾</span>
      </section>

      {/* Listing */}
      <section className="section">
        <div className="container">
          <div className="available-intro animate-on-scroll">
            <span className="eyebrow">Current Availability</span>
            <h2>Meet Our Available Dogs</h2>
          </div>

          <div className="available-grid">
            {/* Natasha */}
            <div className="available-card animate-on-scroll delay-100">
              <div className="available-img-wrap">
                <img src="/images/natasha.jpg" alt="Natasha — Belle Sun Havanese" />
                <div className="available-img-badge">
                  <span className="available-status">Available Now</span>
                </div>
              </div>
              <div className="available-card-body">
                <div className="available-header">
                  <h3>Natasha</h3>
                  <span className="available-price">$3,500</span>
                </div>
                <div className="available-tags">
                  <span className="badge badge-gold">Adult Dog</span>
                  <span className="badge badge-teal">Retiring Champion</span>
                </div>
                <p>She has a wonderful, balanced temperament and truly adapts to her environment, making her an ideal companion for just about anyone. Above all else, she is exceptionally sweet, affectionate, and eager to bond with her person.</p>
                <p>She thrives on love and companionship and will bring warmth, loyalty, and joy to her forever home.</p>
                <blockquote className="available-quote">
                  "This special girl is ready to retire from the spotlight and be someone's best friend."
                </blockquote>
                <Link to="/contact" className="btn btn-primary available-cta">
                  🐾 Interested? Submit an Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Waitlist Note */}
      <section className="available-note-section">
        <div className="container">
          <div className="available-note animate-on-scroll">
            <div className="available-note-icon">📋</div>
            <div className="available-note-text">
              <h3>About Our Process</h3>
              <p>Due to our goal of breeding show quality dogs, the small number of litters we have, and the fact that we prioritize show homes, <strong>we do not maintain a waiting list.</strong></p>
              <p>Please continue checking this page for updated availability, or visit our <Link to="/picking-a-puppy">Picking a Puppy</Link> page to learn about our process and complete an introduction form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="section available-process">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">How It Works</span>
            <h2>Getting a Belle Sun Puppy</h2>
          </div>
          <div className="process-steps">
            {[
              { num: '01', icon: '📝', title: 'Complete Intro Form', desc: 'Fill out a brief introduction form to start the conversation.' },
              { num: '02', icon: '💬', title: 'Receive Questionnaire', desc: 'We\'ll send a detailed questionnaire and schedule a virtual home visit.' },
              { num: '03', icon: '🐶', title: 'Meet the Puppies', desc: 'Visit (virtually or in-person) to meet the puppies and adult dogs.' },
              { num: '04', icon: '🏠', title: 'Go Home Together', desc: 'Receive guidance on puppy-proofing and bring your new companion home at 16 weeks.' },
            ].map((step, i) => (
              <div key={i} className={`process-step animate-on-scroll delay-${i * 100}`}>
                <div className="process-num">{step.num}</div>
                <div className="process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/picking-a-puppy" className="btn btn-primary">Learn More About Our Process</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
