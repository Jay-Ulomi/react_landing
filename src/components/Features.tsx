import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20M6 16h4"/></svg>,
    title: 'Lightning POS',
    desc: 'Sub-10s checkout with barcode scanning, split payments, and offline-first sync.',
    color: 'var(--orange)',
    bg: 'rgba(255,160,46,0.08)',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>,
    title: 'Smart Inventory',
    desc: 'Real-time multi-branch stock with auto-reorder and low-stock alerts.',
    color: 'var(--primary)',
    bg: 'rgba(70,132,50,0.07)',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>,
    title: 'Built-in Accounting',
    desc: 'Double-entry books, automated tax, and one-click P&L reports.',
    color: 'var(--orange)',
    bg: 'rgba(255,160,46,0.08)',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Multi-Branch',
    desc: 'Manage unlimited locations from one dashboard with branch-level permissions.',
    color: 'var(--primary)',
    bg: 'rgba(70,132,50,0.07)',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Works Offline',
    desc: 'Keep selling with no internet. Syncs everything the moment you reconnect.',
    color: '#C8960C',
    bg: 'rgba(200,150,12,0.07)',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: 'Staff & Security',
    desc: 'Role-based access, PIN sessions, and full audit logs for every action.',
    color: 'var(--primary)',
    bg: 'rgba(70,132,50,0.07)',
  },
]

export default function Features() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="features"
      className="section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(circle at 85% 10%, rgba(70,132,50,0.10) 0%, transparent 55%),
          radial-gradient(circle, rgba(70,132,50,0.10) 1px, transparent 1px),
          var(--bg-2)
        `,
        backgroundSize: '100% 100%, 32px 32px, 100% 100%',
      }}
    >

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="eyebrow" data-reveal>What's inside</span>
          <h2 className="section-title" data-reveal data-delay="1">Everything your business needs.</h2>
          <p className="section-subtitle" data-reveal data-delay="2">Six modules, one platform. No plugins, no hidden fees, no limits.</p>
        </div>

        {/* Grid */}
        <div className="feat-grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feat-cell"
              data-reveal="scale"
              data-delay={String(Math.floor(i / 3) * 2 + (i % 3) + 1)}
            >
              {/* Number tag */}
              <div style={{
                position: 'absolute', top: 20, right: 24,
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                fontSize: 12, color: 'var(--border-strong)',
                letterSpacing: '0.04em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon bubble */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: f.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
                color: f.color,
              }}>
                {f.icon}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
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
  )
}
