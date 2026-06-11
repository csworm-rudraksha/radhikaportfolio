import { useReveal } from '../components/useReveal'
import { certifications } from '../assets/data/portfolio'

export default function Certifications() {
  const ref = useReveal(0.1, 0)

  return (
    <div id="certs" style={{ padding: '64px 48px', background: '#0d0d0d' }}>
      <div className="sec-label" style={{ marginBottom: 24 }}>// 04 — certifications</div>
      <div ref={ref} className="reveal" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {certifications.map((c) => (
          <div key={c.name}
            style={{
              flex: '1 1 220px', background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)', padding: 28,
              transition: 'transform .25s, border-color .25s, background .25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.borderColor = 'rgba(232,160,69,0.35)'
              e.currentTarget.style.background = 'rgba(232,160,69,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10, fontWeight: 500 }}>
              {c.org}
            </div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 17, fontWeight: 700, color: '#f0ede6', marginBottom: 8 }}>
              {c.name}
            </div>
            <div style={{ fontSize: 12, color: 'var(--brown2)', lineHeight: 1.6 }}>{c.detail}</div>
            <div style={{ fontSize: 11, color: 'var(--brown3)', marginTop: 12, fontWeight: 500 }}>
              {c.icon} {c.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
