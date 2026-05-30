import { useReveal } from '../components/useReveal'
import { clubEvents } from '../assets/data/portfolio'

export default function ClubEvents() {
  const titleRef = useReveal(0.1, 0)
  const cardsRef = useReveal(0.1, 120)

  return (
    <section id="events" style={{ padding: '80px 48px', background: '#0a0a0a' }}>
      <div ref={titleRef} className="reveal">
        <div className="sec-label">// 05 — community</div>
        <h2 className="sec-title" style={{ color: '#f0ede6' }}>
          Geeks for Geeks<br />
          <em style={{ fontStyle: 'italic', color: 'var(--brown2)' }}>Club Events.</em>
        </h2>
      </div>

      <div ref={cardsRef} className="reveal" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {clubEvents.map((ev, i) => (
          <div key={i} style={{
            flex: '1 1 260px', background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)', overflow: 'hidden',
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
            {/* Photo or placeholder */}
            {ev.photo ? (
              <img src={ev.photo} alt={ev.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{
                height: 140, background: '#0d0d0d', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
                fontFamily: 'Playfair Display, serif', fontWeight: 900,
                fontSize: 48, color: 'var(--brown3)', letterSpacing: '-.04em',
              }}>
                GFG
              </div>
            )}
            <div style={{ padding: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 8 }}>
                {ev.tag}
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: '#f0ede6', marginBottom: 6 }}>
                {ev.title}
              </h3>
              <p style={{ fontSize: 12, color: 'var(--brown2)', lineHeight: 1.65 }}>{ev.desc}</p>
              <div style={{ fontSize: 11, color: 'var(--brown3)', marginTop: 10, fontWeight: 500 }}>📅 {ev.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tip for adding photos */}
      <p style={{ fontSize: 12, color: 'var(--brown3)', marginTop: 24, fontStyle: 'italic' }}>
        📸 Add club photos to <code style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', padding: '2px 6px', fontSize: 11 }}>public/events/</code> and update the <code style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', padding: '2px 6px', fontSize: 11 }}>photo</code> field in <code style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', padding: '2px 6px', fontSize: 11 }}>portfolio.js</code>
      </p>
    </section>
  )
}
