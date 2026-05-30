import { useState } from 'react'
import { useReveal } from '../components/useReveal'
import { projects } from '../assets/data/portfolio'

const COLOR_MAP = {
  pi1: 'linear-gradient(135deg,#2a1f0a,#4a3a1a)',
  pi2: 'linear-gradient(135deg,#0a1f2a,#1a3a4a)',
  pi3: 'linear-gradient(135deg,#1f0a0a,#3a1a1a)',
}
const TEXT_COLOR = {
  pi1: 'rgba(196,154,60,.18)',
  pi2: 'rgba(100,180,220,.12)',
  pi3: 'rgba(220,120,100,.12)',
}

export default function Projects() {
  const [stack, setStack] = useState(projects) // stack[0] is always on top
  const [animating, setAnimating] = useState(false)
  const [leaving, setLeaving] = useState(false)

  const headerRef = useReveal(0.1, 0)
  const deckRef   = useReveal(0.1, 120)

  const handleNext = () => {
    if (animating) return
    setAnimating(true)
    setLeaving(true)
    setTimeout(() => {
      setStack(prev => {
        const [first, ...rest] = prev
        return [...rest, first]
      })
      setLeaving(false)
      setAnimating(false)
    }, 420)
  }

  const handlePrev = () => {
    if (animating) return
    setAnimating(true)
    setStack(prev => {
      const last = prev[prev.length - 1]
      return [last, ...prev.slice(0, -1)]
    })
    setTimeout(() => setAnimating(false), 420)
  }

  const top    = stack[0]
  const second = stack[1]
  const third  = stack[2]

  return (
    <section id="projects" style={{ padding: '96px 48px', background: '#0d0d0d' }}>

      {/* Header */}
      <div ref={headerRef} className="reveal" style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <div className="sec-label">// 02 — selected work</div>
          <h2 className="sec-title" style={{ marginBottom: 0, color: '#f0ede6' }}>
            Projects<em style={{ fontStyle: 'italic', color: 'var(--brown2)' }}>.</em>
          </h2>
        </div>
        <a href="https://github.com" style={{
          fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase',
          color: 'var(--brown3)', textDecoration: 'none',
          borderBottom: '1px solid var(--brown3)', paddingBottom: 2,
        }}>
          All on GitHub →
        </a>
      </div>

      {/* Deck + Info */}
      <div ref={deckRef} className="reveal" style={{
        display: 'flex', gap: 80, alignItems: 'center', flexWrap: 'wrap',
      }}>

        {/* STACKED DECK */}
        <div style={{ position: 'relative', width: 340, height: 420, flexShrink: 0, margin: '40px auto' }}>

          {/* Card 3 — bottom */}
          {third && (
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: 340, height: 400,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              transform: 'rotate(6deg) translateY(16px)',
              zIndex: 1,
              transition: 'transform .4s ease',
            }} />
          )}

          {/* Card 2 — middle */}
          {second && (
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: 340, height: 400,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              transform: 'rotate(3deg) translateY(8px)',
              zIndex: 2,
              transition: 'transform .4s ease',
              overflow: 'hidden',
            }}>
              <div style={{
                height: 180,
                background: COLOR_MAP[second.colorClass],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Playfair Display, serif', fontSize: 64, fontWeight: 900,
                color: TEXT_COLOR[second.colorClass],
              }}>
                {second.initials}
              </div>
            </div>
          )}

          {/* Card 1 — TOP (interactive) */}
          <div
            onClick={handleNext}
            style={{
              position: 'absolute', top: 0, left: 0,
              width: 340, height: 400,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              zIndex: 3,
              cursor: 'pointer',
              overflow: 'hidden',
              transform: leaving
                ? 'rotate(-8deg) translateX(-120%) translateY(-20px)'
                : 'rotate(0deg) translateY(0px)',
              transition: 'transform .42s cubic-bezier(.4,0,.2,1), box-shadow .3s, border-color .3s, background .3s',
              boxShadow: '0 20px 48px rgba(0,0,0,.25)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(232,160,69,0.35)'
              e.currentTarget.style.background = 'rgba(232,160,69,0.04)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            {/* Image */}
            <div style={{
              height: 180, background: COLOR_MAP[top.colorClass],
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Playfair Display, serif', fontSize: 72, fontWeight: 900,
              color: TEXT_COLOR[top.colorClass], letterSpacing: '-.05em',
              position: 'relative',
            }}>
              {top.initials}
              <span style={{
                position: 'absolute', top: 14, left: 14,
                fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase',
                background: 'var(--gold)', color: '#0a0a0a',
                padding: '5px 12px', fontWeight: 600, border: '1px solid rgba(0,0,0,0.1)',
              }}>
                {top.badge}
              </span>
              <span style={{
                position: 'absolute', top: 14, right: 14,
                fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '.08em',
              }}>
                {top.year}
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: 24 }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif', fontSize: 20,
                fontWeight: 700, color: '#f0ede6', marginBottom: 6,
              }}>
                {top.title}
              </h3>
              <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 500, marginBottom: 12 }}>
                ✦ {top.tagline}
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {top.stack.slice(0, 4).map(t => (
                  <span key={t} style={{
                    fontSize: 10, letterSpacing: '.06em', padding: '4px 10px',
                    background: 'rgba(255,255,255,0.07)', color: '#b0a898',
                    border: '1px solid rgba(255,255,255,0.1)', fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
              {/* Tap hint */}
              <div style={{
                marginTop: 20, fontSize: 11, color: 'var(--muted)',
                letterSpacing: '.1em', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ width: 24, height: 1, background: 'var(--muted)', display: 'inline-block' }} />
                tap to flip
              </div>
            </div>
          </div>

          {/* Counter */}
          <div style={{
            position: 'absolute', bottom: -36, left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: 8,
          }}>
            {projects.map((p, i) => (
              <span key={p.id} style={{
                width: i === 0 ? 24 : 8, height: 8,
                borderRadius: 4,
                background: stack[0].id === p.id ? 'var(--gold)' : 'var(--border)',
                transition: 'all .3s',
                display: 'inline-block',
              }} />
            ))}
          </div>
        </div>

        {/* PROJECT INFO PANEL */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{
            fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: 8,
          }}>
            {projects.indexOf(stack[0]) + 1} / {projects.length}
          </div>
          <h3 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 32,
            fontWeight: 800, color: '#f0ede6', marginBottom: 8,
            letterSpacing: '-.02em', lineHeight: 1.1,
          }}>
            {top.title}
          </h3>
          <div style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 500, marginBottom: 20 }}>
            ✦ {top.tagline}
          </div>
          <p style={{ fontSize: 14, color: 'var(--brown2)', lineHeight: 1.85, marginBottom: 24 }}>
            {top.description}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {top.stack.map(t => (
              <span key={t} style={{
                fontSize: 11, letterSpacing: '.06em', padding: '5px 12px',
                background: 'rgba(255,255,255,0.07)', color: '#b0a898',
                border: '1px solid rgba(255,255,255,0.1)', fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href={top.github} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--gold)', color: '#0a0a0a',
              padding: '12px 24px', fontSize: 12, letterSpacing: '.06em',
              textDecoration: 'none', fontWeight: 600,
              transition: 'transform .2s, box-shadow .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '4px 4px 0 rgba(232,160,69,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              GitHub ↗
            </a>
            {top.live && top.live !== '#' && (
              <a href={top.live} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1.5px solid var(--gold)', color: 'var(--gold)',
                padding: '11px 24px', fontSize: 12, letterSpacing: '.06em',
                textDecoration: 'none', fontWeight: 500,
                transition: 'background .2s, color .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#0a0a0a' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
              >
                Live Site ↗
              </a>
            )}
          </div>

          {/* Nav arrows */}
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            {['←', '→'].map((arrow, i) => (
              <button key={arrow} onClick={i === 0 ? handlePrev : handleNext}
                style={{
                  width: 44, height: 44, border: '1.5px solid var(--gold)',
                  background: 'transparent', cursor: 'pointer',
                  fontSize: 18, color: 'var(--gold)', fontFamily: 'inherit',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background .2s, color .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#0a0a0a' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
              >
                {arrow}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
  }