export default function CTA() {
  return (
    <section style={{ background: 'var(--primary)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Dot grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: -60, right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(154,216,114,0.15)', filter: 'blur(80px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: -40, left: '5%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,160,46,0.12)', filter: 'blur(60px)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }} className="cta-inner">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#9AD872' }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>500+ businesses already running on NexPOS</span>
            </div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 48px)', color: '#fff',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 12,
            }}>
              14 days free.<br />No credit card.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 420 }}>
              Start selling smarter today. Cancel anytime, no questions asked.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
            <a href="#" className="btn btn-white" style={{ padding: '14px 32px', fontSize: 15, borderRadius: 8 }}>
              Start free trial
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#" style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.5)', padding: '6px 0' }}>
              Talk to sales →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cta-inner { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
