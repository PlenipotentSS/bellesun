import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PickingAPuppy.css'

export default function PickingAPuppy() {
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
    <div className="picking-page">
      {/* Hero */}
      <section className="page-hero picking-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">The Adoption Journey</span>
          <h1>Picking A Puppy</h1>
          <p>When you purchase a Belle Sun Havanese, you're purchasing a companion for life.</p>
        </div>
        <span className="paw-deco delay-1" style={{ top: '30%', right: '8%', fontSize: '3.5rem' }}>🐾</span>
        <span className="paw-deco delay-3" style={{ bottom: '25%', left: '5%', fontSize: '2.5rem' }}>🐾</span>
      </section>

      {/* Available puppies intro */}
      <section className="section">
        <div className="container">
          <div className="picking-intro animate-on-scroll">
            <div className="picking-intro-text">
              <span className="eyebrow">Availability</span>
              <h2>Available Puppies</h2>
              <p>Our puppies are ready to go home at <strong>16 weeks</strong>. Learn more about our process, including why we wait until they are 16 weeks old to send our puppies home.</p>
              <p>When you purchase a Belle Sun Havanese, you're purchasing a companion for life.</p>
            </div>
            <Link to="/available-dogs" className="picking-cta-box">
              <span className="picking-cta-emoji">🐶</span>
              <div>
                <strong>View Available Dogs</strong>
                <span>See who's looking for their forever home</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="section picking-highlights-section">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">What You're Getting</span>
            <h2>The Belle Sun Promise</h2>
          </div>
          <div className="highlights-grid">
            {[
              { icon: '🔬', title: 'Limited Litters', desc: 'We produce only one litter per year on average, ensuring each puppy receives individualized attention and care.' },
              { icon: '🧬', title: 'Careful Pairings', desc: 'Every sire and dam pairing is chosen meticulously for the best genetic health, temperament, and conformation match.' },
              { icon: '🏥', title: 'Parental Health Screening', desc: 'Both parents are thoroughly tested before any litter is produced — OFA, CHIC, genetic panels, and more.' },
              { icon: '🌱', title: 'Early Sensory Training', desc: 'Neurological stimulation starting at 3 days old prepares puppies for a confident, adaptable life.' },
              { icon: '🤝', title: 'Comprehensive Socialization', desc: 'Puppies interact with people, sounds, environments, and experiences before they ever leave our home.' },
              { icon: '💑', title: 'Personalized Matching', desc: 'We guide you through choosing the right puppy for your lifestyle and family dynamic.' },
            ].map((h, i) => (
              <div key={i} className={`highlight-item animate-on-scroll delay-${(i % 4) * 100}`}>
                <div className="highlight-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section picking-process-section">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">Step by Step</span>
            <h2>Our Adoption Process</h2>
          </div>
          <div className="picking-steps">
            {[
              {
                num: '1',
                icon: '📝',
                title: 'Complete the Intro Form',
                desc: 'Start by completing a brief introductory form so we can learn about you and your family. This helps us understand what you\'re looking for in a companion.',
                color: 'blue',
              },
              {
                num: '2',
                icon: '🎥',
                title: 'Questionnaire & Virtual Visit',
                desc: 'We\'ll send a more detailed questionnaire and schedule a virtual home visit so we can get to know each other and ensure our puppies are going to the right families.',
                color: 'gold',
              },
              {
                num: '3',
                icon: '🐶',
                title: 'Meet the Puppies',
                desc: 'You\'ll have the opportunity to meet the puppies and our adult dogs, see how they interact, and receive guidance on which puppy might be the best fit for you.',
                color: 'teal',
              },
              {
                num: '4',
                icon: '🏡',
                title: 'Bring Your Puppy Home',
                desc: 'Receive personalized guidance on puppy-proofing your home. At 16 weeks, your fully vaccinated, trained, and loved Belle Sun puppy comes home.',
                color: 'blue',
              },
            ].map((step, i) => (
              <div key={i} className={`picking-step animate-on-scroll delay-${i * 100}`}>
                <div className={`picking-step-num step-${step.color}`}>{step.num}</div>
                <div className="picking-step-icon">{step.icon}</div>
                <div className="picking-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {i < 3 && <div className="picking-step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Summary */}
      <section className="picking-cost-section animate-on-scroll">
        <div className="container">
          <div className="picking-cost-inner">
            <div className="picking-cost-text">
              <span className="eyebrow">Investment</span>
              <h2>$3,500</h2>
              <p>Total cost for a Belle Sun puppy. A sales contract is required for all placements. Amendments to contract terms are available through direct discussion with Anne.</p>
            </div>
            <div className="picking-cost-includes">
              <h4>Everything Included:</h4>
              <div className="cost-items">
                {[
                  '2× DHPP Vaccinations',
                  'Rabies Vaccination',
                  'Bordetella Vaccination',
                  'Microchip & Registration',
                  'AKC Papers',
                  'Pedigree',
                  'Vet Records File',
                  'Revolution Treatment',
                  'Starter Food',
                  'Potty Turf Tray',
                  'Toys',
                  'Toothbrush & Paste',
                ].map((item, i) => (
                  <div key={i} className="cost-item">
                    <span>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="animate-on-scroll">
            <h2 style={{ color: 'var(--blue)', marginBottom: '0.8rem' }}>Ready to Begin?</h2>
            <p style={{ color: 'var(--text-mid)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Check if we have any puppies currently available, or reach out with any questions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/available-dogs" className="btn btn-gold">View Available Dogs</Link>
              <Link to="/contact" className="btn btn-outline">Contact Anne</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
