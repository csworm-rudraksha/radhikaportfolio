import Cursor        from './components/Cursor'
import Navbar        from './components/Navbar'
import SkillsTicker  from './components/SkillsTicker'
import Hero          from './sections/Hero'
import Projects      from './sections/Projects'
import Achievements  from './sections/Achievements'
import Certifications from './sections/Certifications'
import ClubEvents    from './sections/ClubEvents'
import Contact       from './sections/Contact'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Hero />

        <SkillsTicker />
        <div className="sec-divider" />

        <Projects />
        <div className="sec-divider" />

        <Achievements />

        <Certifications />
        <div className="sec-divider" />

        <ClubEvents />
        <div className="sec-divider" />

        <Contact />
      </main>

      <footer style={{
        background: '#060606', color: 'rgba(255,255,255,0.4)',
        padding: '28px 48px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', fontSize: 12, letterSpacing: '.05em',
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
          Radhika Agarwal
        </span>
        <span>© 2026 · Built with curiosity, deployed with ambition</span>
        <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
        </span>
      </footer>
    </>
  )
}
