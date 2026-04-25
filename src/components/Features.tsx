const features = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20M6 16h4"/></svg>,
    title: 'Lightning POS',
    desc: 'Sub-10s checkout with barcode scanning, split payments, and offline-first sync.',
    color: 'var(--orange)',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>,
    title: 'Smart Inventory',
    desc: 'Real-time multi-branch stock with auto-reorder and low-stock alerts.',
    color: 'var(--primary)',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>,
    title: 'Built-in Accounting',
    desc: 'Double-entry books, automated tax, and one-click P&L reports.',
    color: 'var(--orange)',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Multi-Branch',
    desc: 'Manage unlimited locations from one dashboard with branch-level permissions.',
    color: 'var(--primary)',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Works Offline',
    desc: 'Keep selling with no internet. Syncs everything the moment you reconnect.',
    color: '#C8960C',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: 'Staff & Security',
    desc: 'Role-based access, PIN sessions, and full audit logs for every action.',
    color: 'var(--primary)',
  },
];

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <span className="eyebrow">What's inside</span>
          <h2 className="section-title">Everything your business needs.</h2>
          <p className="section-subtitle">Six modules, one platform. No plugins, no hidden fees, no limits.</p>
        </div>

        <div className="feat-grid">
          {features.map((f, i) => (
            <div key={f.title} className="feat-cell">
              <div style={{
                position: 'absolute', top: 20, right: 24,
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                fontSize: 13, color: 'var(--border-strong)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <div style={{ color: f.color, marginBottom: 20 }}>
                {f.icon}
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

