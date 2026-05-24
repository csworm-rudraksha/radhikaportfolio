import { useState, useEffect } from 'react'
import { personal } from '../assets/data/portfolio'

const LINKS = [
  { label: 'Home',         href: '#hero' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Club',         href: '#events' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive  ] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = document.querySelectorAll('section[id], div[id]')
      let cur = 'hero'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: scrolled ? '14px 48px' : '20px 48px',
        background: 'rgba(245,240,232,0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(61,43,31,0.10)',
        boxShadow: scrolled ? '0 2px 20px rgba(61,43,31,.06)' : 'none',
        transition: 'padding .3s, box-shadow .3s',
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--brown)' }}>
        {personal.nameShort}<span style={{ color: 'var(--gold)' }}>.</span>
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0 }}>
        {LINKS.map(({ label, href }) => {
          const id  = href.replace('#', '')
          const isA = active === id
          return (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: 13, color: isA ? 'var(--brown)' : 'var(--muted)',
                  textDecoration: 'none', fontWeight: 500, letterSpacing: '.04em',
                  position: 'relative', paddingBottom: 4, transition: 'color .2s',
                }}
              >
                {label}
                <span style={{
                  position: 'absolute', bottom: 0, left: 0,
                  width: isA ? '100%' : '0%', height: 1.5,
                  background: 'var(--gold)', transition: 'width .3s',
                }} />
              </a>
            </li>
          )
        })}
      </ul>

      {/* Avatar */}
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        background: 'var(--bg3)', border: '2px solid var(--brown3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 17, cursor: 'pointer', transition: 'transform .2s, border-color .2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.borderColor = 'var(--brown3)' }}
      >
        👩‍💻
      </div>
    </nav>
  )
}
