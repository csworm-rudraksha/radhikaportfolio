import { useRef, useState } from 'react'
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

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        flex: '0 0 340px', scrollSnapAlign: 'start',
        background: 'var(--cream)', border: '1px solid var(--border)',
        overflow: 'hidden', position: 'relative', cursor: 'pointer',
        transform: open ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: open ? '0 24px 48px rgba(61,43,31,.12)' : 'none',
        transition: 'transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s',
      }}
    >
      {/* Image area */}
      <div style={{ height: 190, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: COLOR_MAP[project.colorClass],
          fontFamily: 'Playfair Display, serif', fontSize: 72, fontWeight: 900,
          color: TEXT_COLOR[project.colorClass], letterSpacing: '-.05em',
          transition: 'transform .5s ease',
          transform: open ? 'scale(1.07)' : 'scale(1)',
        }}>
          {project.initials}
        </div>
        <span style={{
          position: 'absolute', top: 14, left: 14,
          fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase',
          background: 'rgba(245,240,232,.92)', color: 'var(--brown)',
          padding: '5px 12px', fontWeight: 500, border: '1px solid var(--border)',
        }}>
          {project.badge}
        </span>
        <span style={{ position: 'absolute', top: 14, right: 14, fontSize: 10, color: 'rgba(245,240,232,.6)', letterSpacing: '.08em' }}>
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: 24, borderTop: '1px solid var(--border)' }}>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--brown)', marginBottom: 6 }}>
          {project.title}
        </h3>
        <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 500, letterSpacing: '.04em', marginBottom: 10 }}>
          ✦ {project.tagline}
        </div>

        {/* Expandable description */}
        {open && (
          <p style={{ fontSize: 13, color: 'var(--brown2)', lineHeight: 1.75, marginBottom: 16 }}>
            {project.description}
          </p>
        )}

        {/* Stack */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {project.stack.map(t => (
            <span key={t} style={{
              fontSize: 10, letterSpacing: '.06em', padding: '4px 10px',
              background: 'var(--bg3)', color: 'var(--brown2)',
              border: '1px solid var(--border)', fontWeight: 500,
            }}>{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href={project.github} style={{ fontSize: 12, color: 'var(--brown3)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
              GitHub ↗
            </a>
            {project.live && project.live !== '#' && (
              <a href={project.live} style={{ fontSize: 12, color: 'var(--brown3)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
                Live ↗
              </a>
            )}
          </div>
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              width: 32, height: 32, border: '1.5px solid var(--border)',
              background: open ? 'var(--brown)' : 'transparent',
              color: open ? 'var(--cream)' : 'var(--brown3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: 18, fontFamily: 'inherit',
              transform: open ? 'rotate(45deg)' : 'none',
              transition: 'background .2s, color .2s, transform .3s',
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const trackRef    = useRef(null)
  const headerRef   = useReveal(0.1, 0)
  const trackReveal = useReveal(0.1, 100)

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 364, behavior: 'smooth' })
  }

  return (
    <section id="projects" style={{ padding: '96px 48px', background: 'var(--bg2)' }}>
      <div ref={headerRef} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div className="sec-label">// 02 — selected work</div>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>
            Projects<em style={{ fontStyle: 'italic', color: 'var(--brown2)' }}>.</em>
          </h2>
        </div>
        <a href="https://github.com" style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brown3)', textDecoration: 'none', borderBottom: '1px solid var(--brown3)', paddingBottom: 2 }}>
          All on GitHub →
        </a>
      </div>

      <div ref={trackReveal} className="reveal">
        {/* Slider */}
        <div ref={trackRef} style={{
          display: 'flex', gap: 24, overflowX: 'auto',
          scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch',
          paddingBottom: 8, scrollbarWidth: 'none',
        }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        {/* Arrow nav */}
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          {['←', '→'].map((arrow, i) => (
            <button key={arrow} onClick={() => scroll(i === 0 ? -1 : 1)} style={{
              width: 44, height: 44, border: '1.5px solid var(--brown3)',
              background: 'transparent', cursor: 'pointer',
              fontSize: 18, color: 'var(--brown)', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background .2s, color .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--brown)'; e.currentTarget.style.color = 'var(--cream)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--brown)' }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
