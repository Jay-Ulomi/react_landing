export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 80, paddingBottom: 120 }}>
      {/* Background grid */}
      <div className="grid-bg grid-bg-mask" style={{
        position: 'absolute', inset: 0, zIndex: 0,
      }} />

      {/* Indigo glow */}
      <div style={{
        position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600,
        background: 'radial-gradient(ellipse, rgba(154,216,114,0.22) 0%, transparent 65%)',
        filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Eyebrow */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <a href="#" className="badge" style={{ fontSize: 13 }}>
            <span className="badge-dot" />
            <span style={{ color: 'var(--text)' }}>New</span>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <span>Offline mode v2 is here</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
          </a>
        </div>

        {/* Headline */}
        <h1 className="reveal reveal-1" style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          lineHeight: 1.02,
          letterSpacing: '-0.04em',
          fontWeight: 600,
          marginBottom: 24,
          maxWidth: 960, margin: '0 auto 24px',
        }}>
          The operating system<br />
          for <span className="text-gradient">modern commerce</span>.
        </h1>

        {/* Subhead */}
        <p className="reveal reveal-2" style={{
          fontSize: 'clamp(16px, 1.6vw, 19px)',
          color: 'var(--text-dim)',
          maxWidth: 620, margin: '0 auto 40px',
          lineHeight: 1.55,
        }}>
          POS, inventory, and accounting unified in one beautifully fast platform.
          Built for African businesses — works fully offline.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-3" style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64,
        }}>
          <a href="#pricing" className="btn btn-primary" style={{ padding: '13px 24px', fontSize: 15 }}>
            Start free trial
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#features" className="btn btn-ghost" style={{ padding: '13px 22px', fontSize: 15 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Watch demo
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="reveal reveal-3" style={{ position: 'relative', maxWidth: 1080, margin: '0 auto' }}>
          {/* Glow */}
          <div style={{
            position: 'absolute', inset: '-40px -20px',
            background: 'radial-gradient(ellipse at center, rgba(154,216,114,0.30), transparent 70%)',
            filter: 'blur(40px)', zIndex: -1,
          }} />

          <div style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            border: '1px solid var(--border-strong)',
            borderRadius: 16,
            padding: 8,
            backdropFilter: 'blur(20px)',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)',
          }}>
            <DashboardMockup />
          </div>

          {/* Floating chips */}
          <div className="float-slow card" style={{
            position: 'absolute', top: 60, left: -40, padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'rgba(6,13,6,0.92)',
          }}>
            <div className="pulse-ring" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)' }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Payment received</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>₦28,703 · Transfer</div>
            </div>
          </div>

          <div className="float-fast card" style={{
            position: 'absolute', bottom: 40, right: -32, padding: '10px 14px',
            background: 'rgba(6,13,6,0.92)',
          }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-muted)', marginBottom: 2 }}>SALES TODAY</div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em' }}>
              ₦482,910
            </div>
            <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 500 }}>↑ 24% vs yesterday</div>
          </div>
        </div>

        {/* Trust strip */}
        <div style={{
          marginTop: 56,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 16, flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: 13,
        }}>
          <span>Trusted by 500+ businesses</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-muted)' }} />
          <span>SOC 2 Type II</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-muted)' }} />
          <span>99.99% uptime</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-float-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div style={{
      background: '#0a120a',
      borderRadius: 12,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      minHeight: 400,
      textAlign: 'left',
    }}>
      {/* Sidebar */}
      <aside style={{
        background: '#060d06', borderRight: '1px solid var(--border)',
        padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', marginBottom: 12 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 6,
            background: 'linear-gradient(135deg, var(--indigo-bright), var(--indigo-deep))',
          }} />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13 }}>NexPOS</span>
        </div>
        {[
          { l: 'Dashboard', a: true },
          { l: 'Sales' },
          { l: 'Inventory' },
          { l: 'Customers' },
          { l: 'Reports' },
          { l: 'Settings' },
        ].map(item => (
          <div key={item.l} style={{
            padding: '8px 10px',
            borderRadius: 6,
            fontSize: 12,
            color: item.a ? 'var(--text)' : 'var(--text-muted)',
            background: item.a ? 'rgba(154,216,114,0.10)' : 'transparent',
            border: item.a ? '1px solid rgba(154,216,114,0.22)' : '1px solid transparent',
          }}>{item.l}</div>
        ))}
      </aside>

      {/* Main */}
      <main style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 16 }}>Good morning, Jide</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Thursday, 24 April · Ikeja HQ</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '5px 10px', borderRadius: 999,
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
            fontSize: 11, color: 'var(--green)',
          }}>
            <span className="pulse-ring" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} />
            Live
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { l: 'Revenue', v: '₦482K', d: '+24%', c: 'var(--green)' },
            { l: 'Orders', v: '147', d: '+12%', c: 'var(--green)' },
            { l: 'Avg ticket', v: '₦3,280', d: '+5%', c: 'var(--indigo-bright)' },
          ].map(s => (
            <div key={s.l} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderRadius: 10, padding: '10px 12px',
            }}>
              <div style={{ fontSize: 10, color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.l}</div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em' }}>{s.v}</div>
              <div style={{ fontSize: 10, color: s.c, fontWeight: 500, marginTop: 2 }}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--border)',
          borderRadius: 10, padding: 14, flex: 1,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 600 }}>Revenue · Last 14 days</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-muted)' }}>+24.3%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 90 }}>
            {[28, 42, 35, 58, 70, 55, 82, 68, 90, 76, 95, 88, 100, 92].map((h, i) => (
              <div key={i} style={{
                flex: 1,
                background: i >= 12
                  ? 'linear-gradient(180deg, var(--indigo-bright), var(--indigo-deep))'
                  : 'rgba(154,216,114,0.16)',
                borderRadius: '3px 3px 0 0',
                height: `${h}%`,
                boxShadow: i >= 12 ? '0 0 12px var(--indigo-glow)' : 'none',
              }} />
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[
            { n: 'Order #4729', d: 'Indomie ×4, Milk ×2', v: '₦4,000' },
            { n: 'Order #4728', d: 'Cabin Biscuit ×6', v: '₦7,200' },
          ].map(tx => (
            <div key={tx.n} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 12px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border)',
              borderRadius: 8,
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600 }}>{tx.n}</div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{tx.d}</div>
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--indigo-bright)' }}>{tx.v}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
