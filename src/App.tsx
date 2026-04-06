import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Dogs from './pages/Dogs'
import AvailableDogs from './pages/AvailableDogs'
import PickingAPuppy from './pages/PickingAPuppy'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Nav />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/home"              element={<Navigate to="/" replace />} />
          <Route path="/about"             element={<About />} />
          <Route path="/why-us"            element={<WhyUs />} />
          <Route path="/why-belle-sun-puppies" element={<Navigate to="/why-us" replace />} />
          <Route path="/dogs"              element={<Dogs />} />
          <Route path="/available-dogs"    element={<AvailableDogs />} />
          <Route path="/available-dogs/*"  element={<AvailableDogs />} />
          <Route path="/picking-a-puppy"   element={<PickingAPuppy />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="*"                  element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
