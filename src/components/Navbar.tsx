import { useEffect, useState } from 'react';

const links = ['Product', 'Solutions', 'Pricing', 'Customers', 'Docs'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'rgba(7,7,26,0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 250ms ease',
      }}
    >
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(135deg, var(--indigo-bright), var(--indigo-deep))',
            boxShadow: '0 0 16px var(--indigo-glow), inset 0 0 0 1px rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em' }}>
            NexPOS
          </span>
        </a>

        {/* Center nav */}
        <nav className="nav-center" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              fontSize: 14, color: 'var(--text-dim)',
              padding: '8px 14px', borderRadius: 8,
              transition: 'color 150ms, background 150ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.background = 'transparent'; }}
            >{l}</a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="#" className="btn btn-link" style={{ fontSize: 14 }}>Sign in</a>
          <a href="#pricing" className="btn btn-primary">
            Get Started
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .nav-center { display: none !important; } }
      `}</style>
    </header>
  );
}
