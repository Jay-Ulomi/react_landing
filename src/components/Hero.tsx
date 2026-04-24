export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container" style={{ display: 'contents' }}>

        {/* LEFT — text on dark bg */}
        <div className="hero-left" style={{ paddingLeft: 40 }}>
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--orange)', fontStyle: 'italic' }}>
              POS · Inventory · Accounting
            </span>
          </div>

          <h1 className="reveal reveal-1" style={{
            fontSize: 'clamp(42px, 5.5vw, 80px)',
            fontWeight: 700, lineHeight: 1.02,
            letterSpacing: '-0.04em', color: '#fff',
            marginBottom: 24,
          }}>
            Run your shop.<br />
            <span style={{ color: 'var(--orange)' }}>Grow your money.</span>
          </h1>

          <p className="reveal reveal-2" style={{
            fontSize: 16, color: 'rgba(255,255,255,0.6)',
            maxWidth: 440, lineHeight: 1.65, marginBottom: 36,
          }}>
            All-in-one platform for African businesses — POS, inventory
            and accounting that works fully offline.
          </p>

          <div className="reveal reveal-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="#pricing" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
              Start free — 14 days
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#features" className="btn" style={{
              background: 'rgba(255,255,255,0.07)', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.15)', padding: '13px 24px', fontSize: 15,
            }}>
              See how it works
            </a>
          </div>

          {/* Stats row — colored boxes like Logistick */}
          <div className="reveal reveal-3" style={{ display: 'flex', gap: 0 }}>
            {[
              { v: '500+', l: 'Active shops', bg: 'var(--orange)' },
              { v: '4.9★', l: 'Avg rating', bg: 'var(--primary)' },
              { v: '100%', l: 'Offline ready', bg: '#1a3d1a' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '16px 24px', background: s.bg,
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — dashboard mockup */}
        <div className="hero-right">
          <div className="float-slow" style={{ width: '100%', maxWidth: 480 }}>
            <DashboardMockup />
          </div>

          {/* Floating chip — payment */}
          <div style={{
            position: 'absolute', bottom: '18%', left: '-4%',
            background: '#fff', borderRadius: 12, padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          }} className="float-fast">
            <div className="pulse-ring" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#111', whiteSpace: 'nowrap' }}>Payment received</div>
              <div style={{ fontSize: 11, color: '#888' }}>₦28,703 · Transfer</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div style={{
      background: '#fff', borderRadius: 12, overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
      border: '1px solid rgba(255,255,255,0.1)',
    }}>
      {/* Window chrome */}
      <div style={{ background: '#111', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 5 }}>
        {['#FF5F57','#FFBD2E','#28CA41'].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />)}
        <span style={{ flex: 1, textAlign: 'center', fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>NexPOS — Ikeja Branch</span>
        <div className="pulse-ring" style={{ width: 5, height: 5, borderRadius: '50%', background: '#28CA41' }} />
      </div>

      {/* App body */}
      <div style={{ display: 'grid', gridTemplateColumns: '152px 1fr' }}>
        {/* Sidebar */}
        <div style={{ background: '#111', padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 8px', marginBottom: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: 'var(--orange)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 11, color: '#fff' }}>NexPOS</span>
          </div>
          {['Dashboard','Sales','Inventory','Customers','Reports','Settings'].map((l, i) => (
            <div key={l} style={{
              padding: '6px 8px', borderRadius: 5, fontSize: 10,
              color: i === 0 ? '#fff' : 'rgba(255,255,255,0.4)',
              background: i === 0 ? 'rgba(255,160,46,0.2)' : 'transparent',
              borderLeft: i === 0 ? '2px solid var(--orange)' : '2px solid transparent',
            }}>{l}</div>
          ))}
        </div>

        {/* Main */}
        <div style={{ background: '#F5F5F2', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13, color: '#111' }}>Dashboard</div>
              <div style={{ fontSize: 10, color: '#888' }}>Thu 24 Apr · Ikeja HQ</div>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px',
              borderRadius: 999, background: 'rgba(70,132,50,0.1)',
              border: '1px solid rgba(70,132,50,0.2)', fontSize: 10, color: 'var(--primary)',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)' }} />
              LIVE
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
            {[
              { l: 'Revenue', v: '₦482K', d: '+24%', dc: 'var(--primary)' },
              { l: 'Orders', v: '147', d: '+12%', dc: 'var(--primary)' },
              { l: 'Avg ticket', v: '₦3.2K', d: '+5%', dc: '#D4A000' },
            ].map(s => (
              <div key={s.l} style={{ background: '#fff', border: '1px solid #E0E0DB', borderRadius: 7, padding: '8px 10px' }}>
                <div style={{ fontSize: 9, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>{s.l}</div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 15, color: '#111', letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontSize: 9, color: s.dc, fontWeight: 600 }}>{s.d}</div>
              </div>
            ))}
          </div>

          {/* Chart — orange bars for revenue */}
          <div style={{ background: '#fff', border: '1px solid #E0E0DB', borderRadius: 7, padding: '10px 12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#111' }}>Revenue · 14 days</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--orange)' }}>₦6.74M</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 56 }}>
              {[28,42,35,58,70,55,82,68,90,76,95,88,100,92].map((h, i) => (
                <div key={i} style={{
                  flex: 1, borderRadius: '2px 2px 0 0', height: `${h}%`,
                  background: i >= 12 ? 'var(--orange)' : i >= 9 ? 'rgba(255,160,46,0.4)' : '#EEE',
                }} />
              ))}
            </div>
          </div>

          {/* Transactions */}
          {[
            { n: 'Order #4729', d: 'Indomie ×4, Milk ×2', v: '₦4,000' },
            { n: 'Order #4728', d: 'Cabin Biscuit ×6',   v: '₦7,200' },
          ].map(tx => (
            <div key={tx.n} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: '#fff', border: '1px solid #E0E0DB', borderRadius: 6, padding: '6px 10px',
            }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: '#111' }}>{tx.n}</div>
                <div style={{ fontSize: 9, color: '#888' }}>{tx.d}</div>
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 12, color: 'var(--orange)' }}>{tx.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
