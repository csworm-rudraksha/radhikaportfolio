import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../components/useReveal'
import { personal, stats } from '../assets/data/portfolio'

// ── Constellation ─────────────────────────────────────────────────────────────
function Constellation() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 140) {
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(232,160,69,${0.13 * (1 - d / 140)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      nodes.forEach(n => {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(232,160,69,0.4)'; ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />
}

// ── Typewriter ────────────────────────────────────────────────────────────────
const PHRASES = ['Full-Stack Developer.', 'AI Engineer.', 'LLM Builder.', 'Open Source Contributor.']
function Typewriter() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = PHRASES[phraseIdx]
    const pause = !deleting && charIdx === current.length ? 1600 : deleting ? 38 : 75
    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) { setText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }
      else if (!deleting && charIdx === current.length) setDeleting(true)
      else if (deleting && charIdx > 0) { setText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }
      else { setDeleting(false); setPhraseIdx(i => (i + 1) % PHRASES.length) }
    }, pause)
    return () => clearTimeout(timer)
  }, [text, charIdx, deleting, phraseIdx])
  return (
    <div style={{
      fontSize: 14, color: 'var(--muted)', letterSpacing: '.12em',
      textTransform: 'uppercase', marginBottom: 28, fontWeight: 400, minHeight: 24,
    }}>
      {text}<span style={{ color: 'var(--gold)', animation: 'blink 1s infinite', fontWeight: 700 }}>|</span>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const leftRef  = useReveal(0.1, 0)
  const rightRef = useReveal(0.1, 150)
  const statsRef = useReveal(0.1, 250)

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: '110px 48px 80px', position: 'relative', overflow: 'hidden',
      background: '#0a0a0a',
    }}>
      <Constellation />

      {/* glow */}
      <div style={{
        position: 'absolute', right: -120, top: '40%', transform: 'translateY(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,160,69,.07) 0%, transparent 70%)',
        filter: 'blur(10px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Top row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        width: '100%', gap: 40, flexWrap: 'wrap', position: 'relative', zIndex: 1,
      }}>

        {/* LEFT */}
        <div ref={leftRef} className="reveal" style={{ flex: 1 }}>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase',
            color: '#a09888', marginBottom: 24, fontWeight: 500,
            background: 'rgba(232,160,69,0.07)', border: '1px solid rgba(232,160,69,0.18)',
            padding: '7px 16px',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#5a8a3a', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Available for internships
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: .92,
            letterSpacing: '-.03em', marginBottom: 16,
            fontSize: 'clamp(52px, 6.5vw, 82px)', color: '#f0ede6',
          }}>
            {personal.nameShort}<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Agarwal.</span>
          </h1>

          <Typewriter />

          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#6a6058', maxWidth: 420, marginBottom: 40, fontWeight: 300 }}>
            {personal.bio}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href="/resume.pdf" download style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              border: '1.5px solid rgba(232,160,69,0.45)', color: 'var(--gold)',
              padding: '12px 24px', fontSize: 13, letterSpacing: '.06em',
              fontWeight: 500, textDecoration: 'none',
              transition: 'background .2s, color .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#0a0a0a' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
            >
              Resume ↓
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={rightRef} className="reveal" style={{
          flex: '0 0 220px', maxWidth: 220,
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          {/* Status card */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 18px',
            display: 'flex', alignItems: 'flex-start', gap: 12,
            width: '100%', boxSizing: 'border-box',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#5a8a3a', flexShrink: 0, marginTop: 4,
              animation: 'pulse 2s infinite',
            }} />
            <div style={{ minWidth: 0 }}>
              <strong style={{ color: '#f0ede6', display: 'block', fontSize: 13, marginBottom: 4, lineHeight: 1.3 }}>
                Open to Opportunities
              </strong>
              <span style={{ fontSize: 12, color: '#6a6058', lineHeight: 1.5, display: 'block' }}>
                {personal.availability}
              </span>
            </div>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              { display: 'GH', href: personal.github },
              { display: 'in', href: personal.linkedin },
              { display: '✉',  href: `mailto:${personal.email}` },
              { display: 'LC', href: personal.leetcode },
            ].map(({ display, href }) => (
              <a key={display} href={href} target="_blank" rel="noreferrer" style={{
                width: 36, height: 36,
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, color: '#555', textDecoration: 'none',
                fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase',
                transition: 'border-color .2s, color .2s, background .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(232,160,69,0.07)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#555'; e.currentTarget.style.background = 'transparent' }}
              >
                {display}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* STATS ROW — full width below */}
      <div ref={statsRef} className="reveal" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1, background: 'rgba(255,255,255,0.05)',
        marginTop: 64, position: 'relative', zIndex: 1,
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {stats.map(({ number, label }) => (
          <div key={label} style={{
            background: 'rgba(255,255,255,0.03)', padding: '28px 20px', textAlign: 'center',
            transition: 'background .2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,160,69,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
          >
            <div style={{
              fontFamily: 'Playfair Display, serif', fontSize: 30,
              fontWeight: 800, color: 'var(--gold)', lineHeight: 1,
            }}>
              {number}
            </div>
            <div style={{
              fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase',
              color: '#888070', marginTop: 8,
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* scroll hint */}
      <div style={{
        position: 'absolute', bottom: 36, left: 48, zIndex: 1,
        display: 'flex', alignItems: 'center', gap: 12,
        fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#333',
      }}>
        <span style={{ width: 40, height: 1, background: 'rgba(232,160,69,0.3)', display: 'inline-block' }} />
        Scroll down
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(90,138,58,.4);}50%{box-shadow:0 0 0 8px rgba(90,138,58,0);} }
        @keyframes blink { 0%,100%{opacity:1;}50%{opacity:0;} }
      `}</style>
    </section>
  )
}