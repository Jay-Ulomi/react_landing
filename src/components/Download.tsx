const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO ?? ''

const BASE = GITHUB_REPO
  ? `https://github.com/${GITHUB_REPO}/releases/latest/download`
  : null

const platforms = [
  {
    key: 'macos',
    label: 'Download for macOS',
    sub: 'macOS 12 Monterey or later',
    file: 'flutter_pos_macos.zip',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
  },
  {
    key: 'windows',
    label: 'Download for Windows',
    sub: 'Windows 10 / 11 (64-bit)',
    file: 'flutter_pos_windows.zip',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 12V6.75l6-1.32v6.57H3zm17 0V3.87l-9 1.56V12h9zm-9 .75H3v5.43l6 1.29v-6.72zm9 0h-9v6.57l9 1.56V12.75z"/>
      </svg>
    ),
  },
]

export default function Download() {
  return (
    <section id="download" style={{
      background: 'var(--bg)',
      padding: '96px 24px',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow" style={{ marginBottom: 14, display: 'inline-block' }}>Desktop App</span>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700, letterSpacing: '-0.03em',
            color: 'var(--text)', lineHeight: 1.1, marginBottom: 16,
          }}>
            Take NexPOS offline,<br />
            <span style={{ color: 'var(--primary)' }}>anywhere you sell.</span>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-dim)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Download the desktop app for full offline support — keep selling even without internet. Syncs automatically when back online.
          </p>
        </div>

        {/* Download cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginBottom: 36,
        }}>
          {platforms.map(p => {
            const href = BASE ? `${BASE}/${p.file}` : '#'
            const disabled = !BASE
            return (
              <a
                key={p.key}
                href={href}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  padding: '28px 32px',
                  borderRadius: 16,
                  background: 'var(--bg-2)',
                  border: '1.5px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'border-color 180ms, box-shadow 180ms, transform 180ms',
                  cursor: disabled ? 'default' : 'pointer',
                  opacity: disabled ? 0.6 : 1,
                }}
                onMouseEnter={e => {
                  if (disabled) return
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--primary)'
                  el.style.boxShadow = '0 8px 32px rgba(70,132,50,0.15)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--border)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
                aria-label={p.label}
              >
                {/* Platform icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text)',
                }}>
                  {p.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700, fontSize: 16,
                    color: 'var(--text)', marginBottom: 4,
                  }}>
                    {disabled ? p.label.replace('Download for ', '') : p.label}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>{p.sub}</div>
                  {disabled && (
                    <div style={{ fontSize: 11, color: 'var(--primary)', marginTop: 4, fontWeight: 600 }}>
                      Coming soon
                    </div>
                  )}
                </div>

                {/* Arrow */}
                {!disabled && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="var(--text-dim)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ flexShrink: 0 }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                )}
              </a>
            )
          })}
        </div>

        {/* Note */}
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-dim)' }}>
          Free to download · Requires an active NexPOS account ·{' '}
          {BASE
            ? <a href={`https://github.com/${GITHUB_REPO}/releases`}
                style={{ color: 'var(--primary)', textDecoration: 'none' }}
                target="_blank" rel="noopener noreferrer">
                View all releases
              </a>
            : 'All releases on GitHub'}
        </p>

      </div>
    </section>
  )
}
