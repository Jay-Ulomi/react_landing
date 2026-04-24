export default function CTA() {
  return (
    <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container">
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: 24,
          padding: 'clamp(40px, 6vw, 72px)',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(15,15,46,0.6))',
          border: '1px solid rgba(99,102,241,0.3)',
          textAlign: 'center',
        }}>
          {/* Glow */}
          <div style={{
            position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
            width: '80%', height: '120%',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.4), transparent 60%)',
            filter: 'blur(50px)', pointerEvents: 'none',
          }} />

          {/* Grid bg */}
          <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge" style={{ marginBottom: 24, background: 'rgba(99,102,241,0.15)', borderColor: 'rgba(99,102,241,0.3)' }}>
              <span className="badge-dot" />
              Limited time · 14 days free
            </div>

            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.05, letterSpacing: '-0.035em',
              marginBottom: 16, maxWidth: 720, margin: '0 auto 16px',
            }}>
              Ready to <span className="text-gradient">level up</span> your business?
            </h2>
            <p style={{ fontSize: 17, color: 'var(--text-dim)', marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Join 500+ businesses already running on NexPOS. No credit card required.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
                Start free trial
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#" className="btn btn-ghost" style={{ padding: '13px 22px', fontSize: 15 }}>
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
