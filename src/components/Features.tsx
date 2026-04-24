const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20M6 16h4"/>
      </svg>
    ),
    title: 'Lightning POS',
    desc: 'Sub-10s checkout. Barcode scanning, split payments, and offline-first sync.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/>
      </svg>
    ),
    title: 'Smart Inventory',
    desc: 'Real-time multi-branch stock with auto-reorder and low-stock alerts.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/>
      </svg>
    ),
    title: 'Built-in Accounting',
    desc: 'Double-entry books, automated tax, and one-click P&L statements.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Multi-Branch',
    desc: 'Run unlimited locations from one console with branch-level permissions.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Offline-First',
    desc: 'Keep selling without internet. Everything syncs the moment you reconnect.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption, role-based access, and SOC 2 Type II certified.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64, maxWidth: 720, margin: '0 auto 64px' }}>
          <div className="section-eyebrow"><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--indigo-bright)' }} /> Platform</div>
          <h2 className="section-title">Everything you need.<br /><span className="text-gradient">Nothing you don't.</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Six core modules, one unified platform. No plugins, no hidden fees, no limits.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
        }}>
          {features.map(f => (
            <div key={f.title} className="card card-hover" style={{ padding: 28 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'linear-gradient(135deg, rgba(154,216,114,0.16), rgba(154,216,114,0.05))',
                border: '1px solid rgba(154,216,114,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--indigo-bright)',
                marginBottom: 20,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
