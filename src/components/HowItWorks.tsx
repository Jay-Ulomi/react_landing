const steps = [
  { n: '01', title: 'Create your account', desc: 'Sign up, verify your business, and pick a plan. Takes under 3 minutes. No credit card needed.' },
  { n: '02', title: 'Set up branches & staff', desc: 'Add store locations, import products, set taxes, and invite your team with the right access levels.' },
  { n: '03', title: 'Go live — instantly', desc: 'Open the POS on any device. Start selling immediately, online or offline. Everything syncs in real time.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="badge" style={{ margin: '0 auto 20px' }}>Simple Setup</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', color: 'var(--black)', lineHeight: 1.05 }}>
            Running in minutes,<br /><span style={{ color: 'var(--orange)' }}>not months.</span>
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.n} style={{
              background: 'var(--white)', border: '1px solid var(--border)',
              borderRadius: 20, padding: '40px 32px', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -20, right: 16,
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 100, color: 'rgba(245,80,10,0.05)',
                letterSpacing: '-0.05em', lineHeight: 1, userSelect: 'none',
              }}>
                {s.n}
              </div>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: 'var(--orange)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
              }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: '#fff', fontSize: 14 }}>{i + 1}</span>
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--black)', marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#pricing" className="btn-dark">Start for free — no card needed</a>
        </div>
      </div>
    </section>
  );
}
