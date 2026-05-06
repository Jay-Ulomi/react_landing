const links = {
  Product:   ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
  Company:   ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Docs', 'API', 'Guides', 'Status'],
  Legal:     ['Privacy', 'Terms', 'Security'],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)' }}>

      {/* ── Main links area ── */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '64px 0 56px' }}>
        <div className="container">
          <div className="footer-grid">

            {/* Brand column */}
            <div>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: 'var(--orange)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                  </svg>
                </div>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--text)' }}>NexPOS</span>
              </a>

              <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.7, maxWidth: 240, marginBottom: 24 }}>
                All-in-one POS, inventory &amp; accounting — built for African businesses.
              </p>

              {/* Social icons */}
              <div style={{ display: 'flex', gap: 8 }}>
                {(['twitter', 'github', 'linkedin'] as const).map(n => (
                  <a
                    key={n} href="#"
                    style={{
                      width: 34, height: 34, borderRadius: 9,
                      background: 'var(--bg-2)',
                      border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'color 180ms, border-color 180ms, background 180ms',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--primary)'
                      e.currentTarget.style.borderColor = 'var(--primary)'
                      e.currentTarget.style.background = 'var(--primary-glow)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-muted)'
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'var(--bg-2)'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      {n === 'twitter'  && <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.2 4.2 0 0 0-7.2 3.8A12 12 0 0 1 3 4.6a4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.6a12 12 0 0 0 6.5 1.9c7.8 0 12-6.5 12-12.1v-.6A8.6 8.6 0 0 0 22 5.8z"/>}
                      {n === 'github'   && <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>}
                      {n === 'linkedin' && <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8 18H5v-9h3v9zM6.5 7.7A1.7 1.7 0 1 1 8.2 6a1.7 1.7 0 0 1-1.7 1.7zM18 18h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V18h-3v-9h2.9v1.2a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.6 2 3.6 4.7V18z"/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10, fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  marginBottom: 18,
                }}>{heading}</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {items.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        style={{ fontSize: 13, color: 'var(--text-dim)', transition: 'color 150ms' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)' }}
                      >{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        padding: '16px 0',
      }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 10,
          fontSize: 12, color: 'var(--text-muted)',
        }}>
          <span>© 2026 NexPOS Technologies Ltd.</span>
          <span>Made with care in Tanzania 🇹🇿</span>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  )
}
