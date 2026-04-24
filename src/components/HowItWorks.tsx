export default function HowItWorks() {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="two-col">

          {/* LEFT — mockup with stat overlay */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#0D1F0D', borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
            }}>
              {/* App header bar */}
              <div style={{ background: '#111', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
                {['#FF5F57','#FFBD2E','#28CA41'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
                <span style={{ marginLeft: 6, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>NexPOS Mobile · Ikeja</span>
              </div>
              {/* Cart content */}
              <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>New Sale</div>
                {[
                  { n: 'Indomie Chicken ×4', p: '₦1,600' },
                  { n: 'Peak Milk 400g ×2',  p: '₦2,400' },
                  { n: 'Cabin Biscuit ×1',   p: '₦1,200' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 14px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9,
                  }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{item.n}</span>
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff' }}>{item.p}</span>
                  </div>
                ))}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 14px', background: 'var(--orange)', borderRadius: 9, marginTop: 4,
                }}>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 13, color: '#fff' }}>TOTAL</span>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff' }}>₦5,200</span>
                </div>
                <div style={{
                  padding: '12px', background: '#111', borderRadius: 9,
                  textAlign: 'center', fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700, fontSize: 13, color: '#fff',
                }}>CHARGE ₦5,200</div>
              </div>
            </div>

            {/* Stats badge overlay — Logistick style */}
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              background: 'var(--orange)', color: '#fff',
              borderRadius: 12, padding: '20px 24px',
              boxShadow: '0 8px 24px var(--orange-glow)',
            }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 36, letterSpacing: '-0.03em', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: 13, marginTop: 4, opacity: 0.85 }}>Active shops</div>
            </div>

            {/* Rating badge */}
            <div style={{
              position: 'absolute', top: -16, right: -16,
              background: '#fff', borderRadius: 10, padding: '10px 16px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--yellow)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, color: '#111' }}>4.9</div>
                <div style={{ fontSize: 11, color: '#888' }}>312 reviews</div>
              </div>
            </div>
          </div>

          {/* RIGHT — steps content */}
          <div>
            <span className="eyebrow">Simple Setup</span>
            <h2 className="section-title">Live in minutes,<br />not months.</h2>
            <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 40, maxWidth: 440 }}>
              Sign up, configure your shop, and start selling — all in under 10 minutes.
              No IT team needed.
            </p>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { n: '01', title: 'Create your account', desc: 'Sign up, verify your business, and choose a plan. Three minutes flat. No credit card needed.' },
                { n: '02', title: 'Set up branches & staff', desc: 'Add store locations, import products, set taxes, and invite your team with the right access levels.' },
                { n: '03', title: 'Go live — instantly', desc: 'Open NexPOS on any device. Start selling immediately, online or offline. Everything syncs in real time.' },
              ].map((s, i) => (
                <div key={s.n} style={{
                  display: 'flex', gap: 20, paddingBottom: 28,
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  marginBottom: i < 2 ? 28 : 0,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                    background: i === 2 ? 'var(--primary)' : 'var(--bg-2)',
                    border: `2px solid ${i === 2 ? 'var(--primary)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: 12,
                    color: i === 2 ? '#fff' : 'var(--text-muted)',
                  }}>{s.n}</div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 6 }}>
                      {s.title}
                      {i === 2 && <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--primary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>● LIVE</span>}
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <a href="#pricing" className="btn btn-primary">Start for free</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
