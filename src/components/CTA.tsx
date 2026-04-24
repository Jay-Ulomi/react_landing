export default function CTA() {
  return (
    <section style={{ background: 'var(--white)', padding: '80px 0 96px' }}>
      <div className="container">
        <div className="cta-box" style={{
          background: 'var(--black)', borderRadius: 24,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative "14" — overflow:hidden on parent prevents layout bleed */}
          <div style={{
            position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 280, lineHeight: 1,
            color: 'rgba(255,255,255,0.03)', userSelect: 'none', letterSpacing: '-0.05em',
            pointerEvents: 'none',
          }}>14</div>

          {/* Orange accent dot */}
          <div style={{ position: 'absolute', top: 40, left: 64, width: 12, height: 12, borderRadius: '50%', background: 'var(--orange)' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge" style={{ marginBottom: 20, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
              Start Today
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 3.5vw, 52px)', letterSpacing: '-0.03em', color: '#fff', marginBottom: 12 }}>
              14 days free.<br />No credit card.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Join 500+ businesses already running on NexPOS.</p>
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
            <a href="#" className="btn-orange" style={{ fontSize: 15, padding: '14px 32px' }}>
              Start Free Trial
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#" style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500, padding: '8px 0' }}>
              Talk to sales →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
