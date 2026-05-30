import { useReveal } from '../components/useReveal'
import { achievements } from '../assets/data/portfolio'

export default function Achievements() {
  const titleRef    = useReveal(0.1, 0)
  const timelineRef = useReveal(0.1, 120)

  return (
    <section id="achievements" style={{ padding: '96px 48px', background: '#0a0a0a' }}>
      <div ref={titleRef} className="reveal">
        <div className="sec-label">// 03 — milestones</div>
        <h2 className="sec-title" style={{ color: '#f0ede6' }}>
          Achievements<em style={{ fontStyle: 'italic', color: 'var(--brown2)' }}>.</em>
        </h2>
      </div>

      <div ref={timelineRef} className="reveal" style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>

        {/* Center vertical line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0, bottom: 0,
          width: 1,
          background: 'rgba(255,255,255,0.08)',
          transform: 'translateX(-50%)',
        }} />

        {achievements.map((a, i) => {
          const isLeft = i % 2 === 0
          return (
            <div key={a.num} style={{
              display: 'flex',
              justifyContent: isLeft ? 'flex-start' : 'flex-end',
              alignItems: 'center',
              marginBottom: i === achievements.length - 1 ? 0 : 56,
              position: 'relative',
            }}>

              {/* Card */}
              <div
                style={{
                  width: 'calc(50% - 48px)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  padding: '24px 28px',
                  position: 'relative',
                  transition: 'border-color .25s, transform .25s, background .25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(232,160,69,0.35)'
                  e.currentTarget.style.background = 'rgba(232,160,69,0.04)'
                  e.currentTarget.style.transform = isLeft ? 'translateX(-4px)' : 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {/* Arrow toward center (retaining logic but matching color) */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  [isLeft ? 'right' : 'left']: -8,
                  transform: 'translateY(-50%)',
                  width: 0, height: 0,
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  [isLeft ? 'borderLeft' : 'borderRight']: '8px solid rgba(255,255,255,0.04)',
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{a.icon}</span>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 16, fontWeight: 700,
                    color: '#f0ede6', lineHeight: 1.3,
                  }}>
                    {a.title}
                  </h3>
                </div>

                <p style={{ fontSize: 13, color: 'var(--brown2)', lineHeight: 1.75, marginBottom: 12 }}>
                  {a.desc}
                </p>

                <span style={{
                  fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase',
                  color: 'var(--gold)', fontWeight: 500,
                }}>
                  {a.tag}
                </span>
              </div>

              {/* Center dot + date */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                zIndex: 2,
              }}>
                <div style={{
                  width: 14, height: 14,
                  borderRadius: '50%',
                  background: '#0a0a0a',
                  border: '2.5px solid var(--gold)',
                  transition: 'background .2s, border-color .2s, transform .2s',
                  flexShrink: 0,
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--gold)'
                    e.currentTarget.style.transform = 'scale(1.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#0a0a0a'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
                <div style={{
                  background: 'var(--gold)',
                  color: '#0a0a0a',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '.08em',
                  padding: '3px 10px',
                  whiteSpace: 'nowrap',
                  fontFamily: 'Playfair Display, serif',
                }}>
                  {a.date}
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}