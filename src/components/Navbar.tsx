export default function Navbar() {
  return (
    <nav className="nav-root">
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 17, color: 'var(--black)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>NexPOS</span>
        </a>
        <span className="nav-slash" style={{ color: 'var(--border)', fontSize: 20 }}>/</span>
        <a href="mailto:hello@nexpos.io" className="nav-email">hello@nexpos.io</a>
      </div>

      {/* Center nav — hidden below 900px via CSS */}
      <nav className="nav-center" aria-label="Main navigation">
        {['Product', 'Solutions', 'Pricing', 'Developers'].map((item, i, arr) => (
          <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted)', padding: '6px 12px', borderRadius: 8, transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--black)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {item}
            </a>
            {i < arr.length - 1 && <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border)', flexShrink: 0 }} />}
          </span>
        ))}
      </nav>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <a href="#" style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted)', padding: '8px 12px', transition: 'color 150ms', whiteSpace: 'nowrap' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--black)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Log in
        </a>
        <a href="#pricing" className="btn-outline">Get Started — Free</a>
      </div>
    </nav>
  );
}
