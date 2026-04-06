import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/',                  label: 'Home'       },
  { to: '/about',             label: 'About'      },
  { to: '/why-us',            label: 'Why Us?'    },
  { to: '/available-dogs',    label: 'Available'  },
  { to: '/dogs',              label: 'The Dogs'   },
  { to: '/picking-a-puppy',   label: 'Picking a Puppy' },
  { to: '/contact',           label: 'Contact'    },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [])

  return (
    <header className={`nav-header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Belle Sun Havanese" />
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/available-dogs" className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>
            🐾 Find a Puppy
          </Link>
        </nav>

        <button
          className={`nav-burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
