import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const resources = [
  { name: 'American Kennel Club', url: 'https://www.akc.org/', desc: 'Official AKC breed standards and registration' },
  { name: 'Grandview Havanese', url: 'https://www.grandviewhavanese.com/', desc: 'Fellow champion Havanese breeders' },
  { name: 'Cascade Havanese Club', url: 'https://www.cascadehavanese.org/', desc: 'Pacific Northwest Havanese community' },
  { name: 'Aviddog', url: 'https://www.aviddog.com/', desc: 'Microchip registration and pet ID services' },
  { name: 'Havanese Rescue Inc.', url: 'https://www.havaneserescue.com/', desc: 'Dedicated to rehoming Havanese in need' },
  { name: 'Puppy Culture', url: 'https://shoppuppyculture.com/', desc: 'Early neurological stimulation & socialization protocol' },
]

export default function About() {
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
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">Our Story</span>
          <h1>Belle Sun Havanese</h1>
          <p>We breed happy, healthy, champion Havanese and raise them to be capable, confident companions for life.</p>
        </div>
        <span className="paw-deco delay-1" style={{ top: '30%', right: '12%', fontSize: '4rem' }}>🐾</span>
        <span className="paw-deco delay-3" style={{ bottom: '20%', left: '8%', fontSize: '3rem' }}>🐾</span>
      </section>

      {/* Anne Bio */}
      <section className="section">
        <div className="container">
          <div className="about-bio-layout">
            <div className="about-portrait animate-on-scroll">
              <div className="portrait-frame">
                <img src="/images/anne.jpg" alt="Anne Stevenson - Owner and Breeder" />
              </div>
              <div className="portrait-tag">
                <span className="portrait-tag-emoji">🌟</span>
                <div>
                  <strong>Anne Stevenson</strong>
                  <span>Owner & Breeder since 2008</span>
                </div>
              </div>
            </div>

            <div className="about-bio-text animate-on-scroll delay-200">
              <span className="eyebrow">Meet Anne</span>
              <h2>Anne Stevenson<br /><em>Owner &amp; Breeder</em></h2>

              <p>I have lived with dogs all my life and was responsible for a dog before I was out of college. When I met and owned my first Havanese, I knew I wanted to continue the experience. Dogs cannot speak for themselves, but if you truly listen you can know what they want. I make sure that every dog I own has access to the greatest care I can provide. It is with this attitude that I established my breeding program.</p>

              <p>I studied the Havanese Standard both in Europe and the United States. Since 2008, I have endeavored to produce Havanese as close to standard as possible. Though I breed only once a year on average, I work towards that goal every day. I choose my matings very carefully, selecting the best match possible for the best quality pups.</p>

              <p>All my breeding dogs are thoroughly tested and I aim to be as transparent as I can. If there is any health problem in a litter, I will pass any information onto owners of all pups from that litter. Through all my hard work, major problems are a rarity with my pups and I have consistently produced champion dogs from almost every litter.</p>

              <div className="bio-highlight">
                <span className="bio-highlight-icon">🐾</span>
                <p>Because I am a small-time breeder, with a single litter per year on average, each puppy out of my breeding program is special. They are treated as family. My puppies stay with me longer than any breeder I know, placed at <strong>4 months</strong> rather than the average 2 months of other breeders.</p>
              </div>

              <p>I keep my puppies longer for multiple reasons: to fully begin socialization and potty-training, and ensure that shots are given so that they do not interfere with the natural immunities passed on by the mother. I wait one week after the last series of vaccinations to give them their rabies shot and chip. When the puppy is chosen and taken into its new family, the AKC papers are all filled out with their new chosen name and the chip is registered to the new owner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Ribbon */}
      <section className="about-values-ribbon">
        <div className="container">
          <div className="ribbon-grid">
            {[
              { icon: '🏆', label: 'Champion Bloodlines' },
              { icon: '🧬', label: 'Genetic Health Tested' },
              { icon: '📋', label: 'OFA & CHIC Certified' },
              { icon: '❤️', label: 'Lifetime Breeder Support' },
              { icon: '🌱', label: 'Puppy Culture Protocol' },
              { icon: '🤝', label: 'AKC Registered' },
            ].map((v, i) => (
              <div key={i} className={`ribbon-item animate-on-scroll delay-${i % 5 * 100}`}>
                <span className="ribbon-icon">{v.icon}</span>
                <span>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section resources-section">
        <div className="container">
          <div className="text-center animate-on-scroll" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Helpful Links</span>
            <h2>Resources</h2>
            <p style={{ color: 'var(--text-mid)', maxWidth: '520px', margin: '0 auto' }}>
              Organizations and partners we trust and recommend for Havanese owners.
            </p>
          </div>
          <div className="resources-grid">
            {resources.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`resource-card animate-on-scroll delay-${(i % 4) * 100}`}
              >
                <span className="resource-icon">🔗</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.desc}</span>
                </div>
                <svg className="resource-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta animate-on-scroll">
        <div className="container">
          <div className="about-cta-inner">
            <h2>Ready to Meet Your Puppy?</h2>
            <p>Contact us to learn more about our current and upcoming litters.</p>
            <div className="cta-buttons">
              <Link to="/available-dogs" className="btn btn-gold">View Available Dogs</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
