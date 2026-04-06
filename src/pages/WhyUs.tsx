import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WhyUs.css'

const pillars = [
  {
    icon: '❤️‍🩹',
    title: 'Health First',
    body: 'We conduct rigorous health screening on all breeding dogs, including genetic testing, OFA certification, and CHIC certification. Our puppies receive carefully spaced vaccinations and eat a specialized diet that has resulted in zero instances of heart disease or cancer in over a decade of breeding.',
    badge: 'OFA & CHIC Certified',
    color: 'blue',
  },
  {
    icon: '🏠',
    title: 'Family Raised',
    body: 'Our puppies live in the heart of our home from day one, spending their first three weeks in our bedroom for round-the-clock monitoring. They grow up playing with littermates and humans daily, learning communication and developing their unique personalities through constant interaction.',
    badge: 'In-Home from Day 1',
    color: 'gold',
  },
  {
    icon: '🌍',
    title: 'World Ready',
    body: "Starting at three days old, our puppies undergo desensitization training to help them adapt to life's sounds and experiences. By the time they go home, they're already crate trained, litter box trained, and comfortable with grooming routines including baths, brushing, and nail clipping.",
    badge: 'ENS Protocol',
    color: 'teal',
  },
  {
    icon: '🎁',
    title: 'Complete Package',
    body: 'Your $3,500 Belle Sun puppy comes fully vaccinated (2x DHPP, Rabies, Bordatella), microchipped, and AKC registered — plus a full starter kit with Revolution flea treatment, puppy food, potty turf tray, toys, vet records, and more.',
    badge: '$3,500 All-In',
    color: 'blue',
  },
]

const faqs = [
  {
    q: 'What health testing do you do on your breeding dogs?',
    a: 'All our breeding dogs undergo rigorous health screening including genetic testing for abnormal markers, OFA certification, and CHIC certification. We breed for conformation to maintain the quality and integrity of the Havanese breed.',
  },
  {
    q: 'Why do your puppies go home later than other breeders?',
    a: 'We extend the time between puppy vaccinations because standard vaccine doses can overwhelm small dogs like Havanese. Spacing out vaccinations prevents interference with their natural immunities and reduces system overload, which is why our puppies stay with us until 16 weeks.',
  },
  {
    q: 'What kind of diet do you feed your puppies?',
    a: 'Starting at one month old, our puppies eat a grain-free diet including beef, pork, lamb, and salmon to reduce allergy potential. Around one year, they transition to an adult diet that includes healthy grains like quinoa and spelt. This specialized nutrition has resulted in zero instances of heart disease or cancer in over a decade of breeding.',
  },
  {
    q: 'How do you prepare puppies for life in their new homes?',
    a: 'Our puppies undergo desensitization training starting at three days old to help them adapt to everyday sounds. We begin crate training at 8–10 weeks, teach litter box training, and regularly groom (bathing, brushing, nail clipping, teeth brushing) so they\'re comfortable with all maintenance routines.',
  },
  {
    q: "What's included when I purchase a Belle Sun puppy?",
    a: "Your $3,500 puppy comes with 2x DHPP, Rabies, and Bordatella vaccinations, microchip, AKC registration, plus a starter pack including Revolution flea treatment, puppy food, potty turf tray, toys, complete veterinary file, microchip registration, pedigree, and a toothbrush and toothpaste!",
  },
]

export default function WhyUs() {
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
    <div className="why-page">
      {/* Hero */}
      <section className="page-hero why-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">Our Philosophy</span>
          <h1>Why Belle Sun Puppies?</h1>
          <p>At Belle Sun, we raise healthy, happy, well-adjusted Havanese puppies who become lifelong family companions.</p>
        </div>
        <span className="paw-deco delay-1" style={{ top: '25%', right: '10%', fontSize: '4rem' }}>🐾</span>
        <span className="paw-deco delay-4" style={{ bottom: '25%', left: '5%', fontSize: '2.5rem' }}>🐾</span>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="why-intro animate-on-scroll">
            <h2>We Raise Happy Havanese</h2>
            <p>Every Belle Sun puppy is the result of meticulous preparation, genuine love for the breed, and a commitment to placing happy, healthy companions in wonderful homes. Here's what makes us different.</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars-section">
        {pillars.map((p, i) => (
          <div key={i} className={`pillar-row ${i % 2 !== 0 ? 'pillar-row-reverse' : ''}`}>
            <div className="container">
              <div className="pillar-content">
                <div className={`pillar-text animate-on-scroll ${i % 2 !== 0 ? 'delay-200' : ''}`}>
                  <span className={`badge badge-${p.color === 'gold' ? 'gold' : p.color === 'teal' ? 'teal' : 'blue'}`}>{p.badge}</span>
                  <div className="pillar-icon">{p.icon}</div>
                  <h2>{p.title}</h2>
                  <p>{p.body}</p>
                </div>
                <div className={`pillar-visual animate-on-scroll ${i % 2 !== 0 ? '' : 'delay-200'}`}>
                  <div className={`pillar-shape pillar-${p.color}`}>
                    <span className="pillar-big-icon">{p.icon}</span>
                    {p.color === 'gold' && <div className="pillar-dots" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Price Highlight */}
      <section className="price-section">
        <div className="container">
          <div className="price-card animate-on-scroll">
            <div className="price-left">
              <span className="eyebrow">Investment</span>
              <h2>What's Included at $3,500</h2>
              <p>Every Belle Sun puppy comes fully prepared for their new life.</p>
            </div>
            <div className="price-right">
              <div className="price-items">
                {[
                  '2× DHPP Vaccination',
                  'Rabies Vaccination',
                  'Bordetella Vaccination',
                  'Microchip (registered to you)',
                  'AKC Registration',
                  'Revolution Flea Treatment',
                  'Starter Puppy Food',
                  'Potty Turf Tray',
                  'Toys & Toothbrush',
                  'Complete Vet Records',
                  'Pedigree Paperwork',
                  'Lifetime Breeder Support',
                ].map((item, i) => (
                  <div key={i} className="price-item">
                    <span className="price-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Questions & Answers</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details key={i} className={`faq-item animate-on-scroll delay-${(i % 4) * 100}`}>
                <summary>{f.q}</summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section why-cta">
        <div className="container">
          <div className="why-cta-box animate-on-scroll">
            <span className="why-cta-emoji">🐶</span>
            <h2>Ready to Start Your Journey?</h2>
            <p>Browse available puppies or learn about our adoption process.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link to="/available-dogs" className="btn btn-primary">See Available Dogs</Link>
              <Link to="/picking-a-puppy" className="btn btn-outline">Our Process</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
