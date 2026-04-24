export default function CTA() {
  return (
    <section style={{ background: 'var(--primary)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }} className="cta-inner">
          <div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 48px)', color: '#fff',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 12,
            }}>
              14 days free.<br />No credit card.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 420 }}>
              Join 500+ businesses already running on NexPOS.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
            <a href="#" className="btn btn-white" style={{ padding: '14px 32px', fontSize: 15, borderRadius: 8 }}>
              Start free trial
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#" style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '6px 0' }}>
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
