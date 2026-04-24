const features = [
  {
    num: '01', title: 'Fast POS Sales',
    desc: 'Complete a sale in under 10 seconds. Barcode scanning, split payments, and receipts — fully offline, syncs the instant you reconnect.',
    tags: ['Barcode Scanner', 'Offline Mode', 'Split Payment', 'PDF Receipts'],
    visual: (
      <div style={{ padding: '32px 28px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Live Cart</div>
        {[['Indomie Chicken (×4)', '₦1,600'], ['Peak Milk 400g (×2)', '₦2,400'], ['Cabin Biscuit (×1)', '₦1,200']].map(([n, p], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderRadius: 9, marginBottom: 5, background: 'var(--white)', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: 12, color: 'var(--text)' }}>{n}</span>
            <span style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>{p}</span>
          </div>
        ))}
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', padding: '11px 12px', background: 'var(--orange)', borderRadius: 9, color: '#fff' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 12 }}>TOTAL</span>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16 }}>₦5,200</span>
        </div>
      </div>
    ),
  },
  {
    num: '02', title: 'Smart Inventory',
    desc: 'Real-time stock levels across all branches. Automatic low-stock alerts with one-click reorder from your supplier list.',
    tags: ['Auto Alerts', 'Multi-Branch', 'Supplier Orders'],
    visual: (
      <div style={{ padding: '32px 28px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Stock Overview</div>
        {[
          { n: 'Indomie Chicken', p: 71, v: '142 units' },
          { n: 'Peak Milk 400g',  p: 12, v: '12 units',  low: true },
          { n: 'Milo 400g',       p: 10, v: '8 units',   low: true },
          { n: 'Cabin Biscuit',   p: 59, v: '88 units' },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 12, color: s.low ? '#D03030' : 'var(--text)', fontWeight: s.low ? 600 : 400 }}>{s.n}</span>
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>{s.v}</span>
            </div>
            <div style={{ height: 4, background: 'var(--border)', borderRadius: 4 }}>
              <div style={{ height: '100%', width: `${s.p}%`, background: s.low ? '#D03030' : 'var(--orange)', borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '03', title: 'Built-in Accounting',
    desc: 'Full double-entry accounting with automated tax rules, reconciliation, and financial reports. No separate software needed.',
    tags: ['Double-Entry', 'Tax Rules', 'P&L Reports', 'Reconciliation'],
    visual: (
      <div style={{ padding: '32px 28px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>This Month — P&L</div>
        {[
          { l: 'Revenue',       v: '₦4.2M',  p: 100, c: 'var(--green)' },
          { l: 'Cost of Goods', v: '₦1.8M',  p: 43,  c: '#D03030' },
          { l: 'Expenses',      v: '₦620K',  p: 15,  c: 'var(--muted)' },
          { l: 'Net Profit',    v: '₦1.78M', p: 42,  c: 'var(--orange)' },
        ].map((r, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>{r.l}</span>
              <span style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Syne, sans-serif', color: r.c }}>{r.v}</span>
            </div>
            <div style={{ height: 4, background: 'var(--border)', borderRadius: 4 }}>
              <div style={{ height: '100%', width: `${r.p}%`, background: r.c, borderRadius: 4, opacity: 0.7 }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '04', title: 'Multi-Branch Management',
    desc: 'Manage every store from one dashboard with branch-level isolation for staff, inventory, and reports.',
    tags: ['Unlimited Branches', 'Staff Roles', 'Branch Reports'],
    visual: (
      <div style={{ padding: '32px 28px' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>Branch Status</div>
        {[
          { n: 'Ikeja HQ',        s: '₦182K', on: true },
          { n: 'Victoria Island', s: '₦241K', on: true },
          { n: 'Lekki Phase 1',   s: '₦98K',  on: true },
          { n: 'Surulere',        s: '—',     on: false },
        ].map((b, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderRadius: 9, marginBottom: 5, background: 'var(--white)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div className={b.on ? 'live' : ''} style={{ width: 7, height: 7, borderRadius: '50%', background: b.on ? 'var(--green)' : 'var(--border)', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>{b.n}</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Syne, sans-serif', color: b.on ? 'var(--black)' : 'var(--muted)' }}>{b.s}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" style={{ background: 'var(--white)', padding: '80px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 40, alignItems: 'end', marginBottom: 48 }} className="feat-header-grid">
          <div>
            <div className="badge" style={{ marginBottom: 18 }}>Platform Features</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', color: 'var(--black)', lineHeight: 1.05 }}>
              One platform.<br /><span style={{ color: 'var(--orange)' }}>Every tool.</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>
            From the checkout counter to the accounting books, NexPOS gives you everything to run a serious business.
          </p>
        </div>

        {/* Feature rows */}
        <div style={{ border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
          {features.map((f, i) => (
            <div key={f.num} className="feat-row" style={{ borderBottom: i < features.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className={`feat-row-left ${i % 2 !== 0 ? 'feat-row-left-alt' : ''}`} style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 52, color: 'rgba(245,80,10,0.1)', lineHeight: 1, marginBottom: 14, letterSpacing: '-0.04em' }}>
                  {f.num}
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--black)', marginBottom: 10, letterSpacing: '-0.02em' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.72, marginBottom: 18 }}>{f.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {f.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', background: 'var(--surface)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: 20 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={`feat-row-right ${i % 2 !== 0 ? 'feat-row-right-alt' : ''}`} style={{ order: i % 2 === 0 ? 1 : 0 }}>
                {f.visual}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .feat-header-grid { grid-template-columns: 1fr !important; gap: 16px !important; } }
      `}</style>
    </section>
  );
}
