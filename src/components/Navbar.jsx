// Sticky navigation bar — transparent at top, solid black when scrolled
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Show solid background after scrolling 60px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const firstName = personalInfo.brandName.split(' ')[0]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand / logo */}
        <a href="#home" className="text-white font-black text-xl tracking-tight">
          {firstName}<span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/70 hover:text-[#ff2a2a] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Resume button */}
          <li>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-[#ff2a2a] text-[#ff2a2a] text-sm font-semibold rounded-full hover:bg-[#ff2a2a] hover:text-white transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger — three animated bars */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-white/80 hover:text-[#ff2a2a] text-sm font-medium py-1 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1.5 border border-[#ff2a2a] text-[#ff2a2a] text-sm font-semibold rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
