import { useReveal } from '../components/useReveal'
import { personal, stats } from '../assets/data/portfolio'

export default function Hero() {
  const leftRef  = useReveal(0.1, 0)
  const rightRef = useReveal(0.1, 150)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '110px 48px 80px', position: 'relative', overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* bg circle */}
      <div style={{
        position: 'absolute', right: -120, top: '50%', transform: 'translateY(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--bg3) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: 40, flexWrap: 'wrap' }}>

        {/* LEFT */}
        <div ref={leftRef} className="reveal" style={{ flex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase',
            color: 'var(--brown2)', marginBottom: 24, fontWeight: 500,
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
            CS Student · GL Bajaj · Batch {personal.batch}
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: .92,
            letterSpacing: '-.03em', marginBottom: 16,
            fontSize: 'clamp(56px, 7vw, 88px)',
          }}>
            {personal.nameShort}<br />
            <span style={{ fontStyle: 'italic', color: 'var(--brown2)' }}>Agarwal.</span>
          </h1>

          <div style={{ fontSize: 14, color: 'var(--muted)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 28, fontWeight: 400 }}>
            {personal.role} &nbsp;·&nbsp; <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>{personal.roleAlt}</strong>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--brown2)', maxWidth: 420, marginBottom: 40, fontWeight: 300 }}>
            {personal.bio}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href="#contact"  className="btn-outline">Say Hello ↗</a>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={rightRef} className="reveal" style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* status */}
          <div style={{
            background: 'var(--cream)', border: '1px solid var(--border)',
            padding: 20, display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{
              width: 9, height: 9, borderRadius: '50%', background: '#5a8a3a', flexShrink: 0,
              animation: 'pulse 2s infinite',
            }} />
            <div>
              <strong style={{ color: 'var(--brown)', display: 'block', fontSize: 14, marginBottom: 2 }}>
                Open to Opportunities
              </strong>
              <span style={{ fontSize: 13, color: 'var(--brown2)' }}>{personal.availability}</span>
            </div>
          </div>

          {/* stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
            {stats.map(({ number, label }) => (
              <div key={label} style={{ background: 'var(--cream)', padding: 20, textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 34, fontWeight: 700, color: 'var(--brown)', lineHeight: 1 }}>
                  {number}
                </div>
                <div style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div style={{
        position: 'absolute', bottom: 36, left: 48,
        display: 'flex', alignItems: 'center', gap: 12,
        fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)',
      }}>
        <span style={{ width: 40, height: 1, background: 'var(--brown3)', display: 'inline-block' }} />
        Scroll down
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(90,138,58,.4); }
          50%      { box-shadow: 0 0 0 8px rgba(90,138,58,0); }
        }
      `}</style>
    </section>
  )
}
