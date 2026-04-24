import { useEffect, useState } from 'react';

const links = ['Features', 'Pricing', 'Customers', 'About'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`nav-root${scrolled ? ' scrolled' : ''}`}>
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'var(--orange)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        </div>
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text)', letterSpacing: '-0.02em' }}>
          NexPOS
        </span>
      </a>

      {/* Center nav */}
      <nav className="nav-center" aria-label="Main navigation">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontSize: 14, fontWeight: 500, color: 'var(--text-dim)',
            padding: '8px 14px', borderRadius: 8,
            transition: 'color 150ms, background 150ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg-2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.background = 'transparent'; }}
          >{l}</a>
        ))}
      </nav>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <a href="#" className="btn btn-link" style={{ fontSize: 14, padding: '10px 12px' }}>Sign in</a>
        <a href="#pricing" className="btn btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>
          Get Started
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </header>
  );
}
