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
       background: 'rgba(10,10,10,0.88)',
backdropFilter: 'blur(16px)',
borderBottom: '1px solid rgba(255,255,255,.08)',
boxShadow: scrolled ? '0 6px 40px rgba(0,0,0,.45)' : 'none',
        transition: 'padding .3s, box-shadow .3s',
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: '#f0ede6' }}>
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
                  fontSize: 13,
color: isA ? '#f0ede6' : 'rgba(160,152,136,0.6)',
textDecoration: 'none',
fontWeight: 500,
letterSpacing: '.08em',
position: 'relative',
paddingBottom: 4,
transition: 'color .25s',
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
        background: 'linear-gradient(135deg, #1c2230, #151922)',
border: '1px solid rgba(232,160,69,.4)',
boxShadow: '0 8px 30px rgba(0,0,0,.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 17, cursor: 'pointer', transition: 'transform .2s, border-color .2s',
      }}
       onMouseEnter={e => {
  e.currentTarget.style.transform = 'scale(1.08)'
  e.currentTarget.style.borderColor = 'var(--gold)'
  e.currentTarget.style.boxShadow = '0 10px 35px rgba(232,160,69,.25)'
}}

onMouseLeave={e => {
  e.currentTarget.style.transform = 'scale(1)'
  e.currentTarget.style.borderColor = 'rgba(232,160,69,.4)'
  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,.35)'
}}
      >
        👩‍💻
      </div>
    </nav>
  )
}
