export default function CTA() {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: 80, paddingBottom: 80 }}>
      <div className="container">
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: 20,
          padding: 'clamp(40px, 6vw, 72px)',
          background: 'rgba(255,160,46,0.07)',
          border: '1px solid rgba(255,160,46,0.2)',
          textAlign: 'center',
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.06, letterSpacing: '-0.035em',
              marginBottom: 16, maxWidth: 680, margin: '0 auto 16px',
            }}>
              14 days free.<br />
              <span style={{ color: 'var(--orange)' }}>No credit card.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--text-dim)', maxWidth: 480, margin: '0 auto 36px' }}>
              Join 500+ businesses already running on NexPOS.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
                Start free trial
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#" className="btn btn-ghost" style={{ padding: '14px 24px', fontSize: 15 }}>
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
