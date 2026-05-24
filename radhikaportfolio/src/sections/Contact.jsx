import { useState } from 'react'
import { useReveal } from '../components/useReveal'
import { personal } from '../assets/data/portfolio'

export default function Contact() {
  const leftRef  = useReveal(0.1, 0)
  const rightRef = useReveal(0.1, 120)

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens mail client with pre-filled content
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Hi Radhika,\n\n${form.message}\n\n— ${form.name} (${form.email})`)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const links = [
    { icon: '✉', label: personal.email,                    href: `mailto:${personal.email}` },
    { icon: '🐙', label: 'github.com/radhika',             href: personal.github },
    { icon: 'in', label: 'linkedin.com/in/radhika',        href: personal.linkedin },
    { icon: '🧩', label: `LeetCode · radhikaag18`,         href: personal.leetcode },
  ]

  const inputStyle = {
    background: 'var(--bg)', border: '1.5px solid var(--border)',
    color: 'var(--text)', padding: '13px 16px',
    fontFamily: 'DM Sans, sans-serif', fontSize: 13, outline: 'none',
    transition: 'border-color .2s, background .2s', width: '100%',
  }

  return (
    <section id="contact" style={{ padding: '96px 48px', background: 'var(--cream)' }}>
      <div className="sec-label">// 06 — get in touch</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>

        {/* LEFT */}
        <div ref={leftRef} className="reveal">
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 800, letterSpacing: '-.03em',
            lineHeight: 1.05, marginBottom: 20, color: 'var(--brown)',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
          }}>
            Let's build<br />something<br /><em style={{ fontStyle: 'italic', color: 'var(--brown2)' }}>together.</em>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--muted)', marginBottom: 32 }}>
            Whether it's an internship, a collab on an AI project, or just a good tech conversation — reach out. I reply fast.
          </p>
          <div>
            {links.map(({ icon, label, href }) => (
              <a key={label} href={href}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0',
                  borderBottom: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--brown2)', fontSize: 13, transition: 'color .2s, paddingLeft .25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--brown)'; e.currentTarget.style.paddingLeft = '8px' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--brown2)'; e.currentTarget.style.paddingLeft = '0px' }}
              >
                <span style={{
                  width: 34, height: 34, border: '1.5px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, flexShrink: 0, background: 'var(--bg2)',
                }}>
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <form ref={rightRef} className="reveal" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { label: 'Name',  key: 'name',  type: 'text',  placeholder: 'Your name' },
              { label: 'Email', key: 'email', type: 'email', placeholder: 'you@email.com' },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <label style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500 }}>
                  {label}
                </label>
                <input
                  type={type} placeholder={placeholder} required
                  value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--brown3)'; e.target.style.background = 'var(--cream)' }}
                  onBlur={e  => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--bg)' }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <label style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500 }}>Subject</label>
            <input type="text" placeholder="Internship / Collab / Just saying hi" required
              value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--brown3)'; e.target.style.background = 'var(--cream)' }}
              onBlur={e  => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--bg)' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <label style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500 }}>Message</label>
            <textarea placeholder="Tell me what you're building..." required rows={5}
              value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => { e.target.style.borderColor = 'var(--brown3)'; e.target.style.background = 'var(--cream)' }}
              onBlur={e  => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--bg)' }}
            />
          </div>
          <button type="submit" style={{
            background: sent ? '#5a8a3a' : 'var(--brown)', color: 'var(--cream)',
            padding: '15px 32px', border: 'none',
            fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700,
            cursor: 'pointer', transition: 'transform .2s, box-shadow .2s, background .3s',
            alignSelf: 'flex-start', letterSpacing: '.02em',
          }}
            onMouseEnter={e => { if(!sent){ e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '4px 4px 0 var(--brown3)' }}}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {sent ? '✓ Opening mail client...' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  )
}
