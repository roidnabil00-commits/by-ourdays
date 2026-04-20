'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Catalog', href: '#arsenal' },
    { label: 'Testimony', href: '#testimony' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-white text-lg tracking-[0.3em] italic hover:text-[#b89053] transition-colors duration-300">
          ourdays
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-white text-[0.6rem] tracking-[0.3em] uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/6281931656410?text=Halo%20Ourdays%2C%20gue%20mau%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-[0.6rem] tracking-[0.25em] uppercase px-5 py-2 border border-[#b89053]/40 text-[#b89053] hover:bg-[#b89053] hover:text-black transition-all duration-300"
        >
          Order Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-[#050505] border-t border-[#1a1a1a] px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white text-[0.65rem] tracking-[0.3em] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281931656410?text=Halo%20Ourdays%2C%20gue%20mau%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] tracking-[0.25em] uppercase px-5 py-3 border border-[#b89053]/40 text-[#b89053] text-center hover:bg-[#b89053] hover:text-black transition-all duration-300"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  )
}