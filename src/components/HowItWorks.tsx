const steps = [
  { n: '01', title: 'Sign up', desc: 'Create your account, verify your business, choose a plan. Three minutes flat.' },
  { n: '02', title: 'Configure', desc: 'Add branches, import products, invite your staff with the right access levels.' },
  { n: '03', title: 'Sell', desc: 'Open the POS on any device. Online or offline — it just works, instantly.' },
];

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: 'var(--bg-2)', position: 'relative' }}>
      <div className="grid-bg grid-bg-mask" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64, maxWidth: 640, margin: '0 auto 64px' }}>
          <div className="section-eyebrow"><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--indigo-bright)' }} /> Onboarding</div>
          <h2 className="section-title">Live in <span className="text-gradient">minutes</span>, not months.</h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16,
          position: 'relative',
        }}>
          {steps.map((s, i) => (
            <div key={s.n} className="card card-hover" style={{ padding: 32, position: 'relative' }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12, color: 'var(--indigo-bright)', marginBottom: 24,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span>{s.n}</span>
                <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                {i === steps.length - 1 && (
                  <span style={{ color: 'var(--green)', fontSize: 11 }}>● LIVE</span>
                )}
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
