import { useReveal } from '../components/useReveal'
import { achievements } from '../assets/data/portfolio'

export default function Achievements() {
  const titleRef = useReveal(0.1, 0)
  const gridRef  = useReveal(0.1, 120)

  return (
    <section id="achievements" style={{ padding: '96px 48px', background: 'var(--bg)' }}>
      <div ref={titleRef} className="reveal">
        <div className="sec-label">// 03 — milestones</div>
        <h2 className="sec-title">
          Achievements<em style={{ fontStyle: 'italic', color: 'var(--brown2)' }}>.</em>
        </h2>
      </div>

      <div ref={gridRef} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
        {achievements.map((a) => (
          <AchCard key={a.num} {...a} />
        ))}
      </div>
    </section>
  )
}

function AchCard({ num, icon, title, desc, tag }) {
  return (
    <div
      style={{ background: 'var(--cream)', padding: 32, position: 'relative', cursor: 'pointer', transition: 'background .2s' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.querySelector('.ach-num').style.color = 'var(--gold2)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.querySelector('.ach-num').style.color = 'var(--bg3)' }}
    >
      <div className="ach-num" style={{
        fontFamily: 'Playfair Display, serif', fontSize: 48, fontWeight: 900,
        color: 'var(--bg3)', lineHeight: 1, position: 'absolute', top: 20, right: 24,
        transition: 'color .2s',
      }}>{num}</div>
      <div style={{ fontSize: 24, marginBottom: 12 }}>{icon}</div>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 17, fontWeight: 700, color: 'var(--brown)', marginBottom: 8, lineHeight: 1.3 }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
      <span style={{ display: 'inline-block', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: 12, fontWeight: 500 }}>
        {tag}
      </span>
    </div>
  )
}
