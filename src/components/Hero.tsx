export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 80, paddingBottom: 120 }}>
      {/* Subtle grid only — no blob glows */}
      <div className="grid-bg grid-bg-mask" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Headline */}
        <h1 className="reveal reveal-1" style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          lineHeight: 1.02,
          letterSpacing: '-0.04em',
          fontWeight: 600,
          maxWidth: 960, margin: '0 auto 24px',
        }}>
          Run your shop.<br />
          <span style={{ color: 'var(--orange)' }}>Grow your money.</span>
        </h1>

        {/* Subhead */}
        <p className="reveal reveal-2" style={{
          fontSize: 'clamp(16px, 1.6vw, 19px)',
          color: 'var(--text-dim)',
          maxWidth: 580, margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          POS, inventory, and accounting in one platform — built for African businesses,
          works fully offline.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-3" style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64,
        }}>
          <a href="#pricing" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
            Start free — 14 days
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#features" className="btn btn-ghost" style={{ padding: '13px 22px', fontSize: 15 }}>
            See how it works
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="reveal reveal-3" style={{ position: 'relative', maxWidth: 1040, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(10,18,10,0.9)',
            border: '1px solid var(--border-strong)',
            borderRadius: 16,
            padding: 8,
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7)',
          }}>
            <DashboardMockup />
          </div>

          {/* Floating chip — payment */}
          <div className="float-slow card" style={{
            position: 'absolute', top: 56, left: -36, padding: '10px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'rgba(6,13,6,0.95)',
          }}>
            <div className="pulse-ring" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--indigo-bright)', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Payment received</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>₦28,703 · Transfer</div>
            </div>
          </div>

          {/* Floating chip — revenue */}
          <div className="float-fast card" style={{
            position: 'absolute', bottom: 48, right: -28, padding: '12px 16px',
            background: 'rgba(6,13,6,0.95)',
          }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-muted)', marginBottom: 3, letterSpacing: '0.06em' }}>TODAY'S SALES</div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--orange)' }}>
              ₦482,910
            </div>
            <div style={{ fontSize: 11, color: 'var(--indigo-bright)', fontWeight: 500, marginTop: 2 }}>↑ 24% vs yesterday</div>
          </div>
        </div>

        {/* Social proof — factual, no fake certifications */}
        <div style={{
          marginTop: 52,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 20, flexWrap: 'wrap',
        }}>
          {[
            { v: '500+', l: 'active shops' },
            { v: '4.9★', l: 'average rating' },
            { v: '100%', l: 'offline capable' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {i > 0 && <span style={{ width: 1, height: 28, background: 'var(--border)' }} />}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 18, color: 'var(--orange)', letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div style={{
      background: '#0a120a',
      borderRadius: 10,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      minHeight: 380,
      textAlign: 'left',
    }}>
      {/* Sidebar */}
      <aside style={{
        background: '#060d06',
        borderRight: '1px solid var(--border)',
        padding: '14px 10px',
        display: 'flex', flexDirection: 'column', gap: 2,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', marginBottom: 14 }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 12 }}>NexPOS</span>
        </div>
        {[
          { l: 'Dashboard', active: true },
          { l: 'Sales' },
          { l: 'Inventory' },
          { l: 'Customers' },
          { l: 'Reports' },
          { l: 'Settings' },
        ].map(item => (
          <div key={item.l} style={{
            padding: '7px 8px',
            borderRadius: 6,
            fontSize: 11,
            color: item.active ? 'var(--text)' : 'var(--text-muted)',
            background: item.active ? 'rgba(70,132,50,0.25)' : 'transparent',
            borderLeft: item.active ? '2px solid var(--indigo-bright)' : '2px solid transparent',
            paddingLeft: item.active ? 6 : 8,
          }}>{item.l}</div>
        ))}
      </aside>

      {/* Main */}
      <main style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14 }}>Ikeja HQ</div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>Thursday, 24 Apr 2026</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '4px 10px', borderRadius: 999,
            background: 'rgba(154,216,114,0.1)',
            border: '1px solid rgba(154,216,114,0.2)',
            fontSize: 10, color: 'var(--indigo-bright)',
          }}>
            <span className="pulse-ring" style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--indigo-bright)' }} />
            LIVE
          </div>
        </div>

        {/* Stat cards — orange=money, green=growth, yellow=neutral */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { l: 'Revenue', v: '₦482K', d: '+24%', vc: 'var(--orange)', dc: 'var(--indigo-bright)' },
            { l: 'Orders', v: '147', d: '+12%', vc: 'var(--text)', dc: 'var(--indigo-bright)' },
            { l: 'Avg ticket', v: '₦3,280', d: '+5%', vc: 'var(--text)', dc: 'var(--yellow)' },
          ].map(s => (
            <div key={s.l} style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid var(--border)',
              borderRadius: 8, padding: '9px 11px',
            }}>
              <div style={{ fontSize: 9, color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em', color: s.vc }}>{s.v}</div>
              <div style={{ fontSize: 9, color: s.dc, fontWeight: 500, marginTop: 2 }}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Chart — orange bars for revenue */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid var(--border)',
          borderRadius: 8, padding: 12,
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 10, fontWeight: 600 }}>Revenue · Last 14 days</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--orange)' }}>₦6.74M</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 72 }}>
            {[28, 42, 35, 58, 70, 55, 82, 68, 90, 76, 95, 88, 100, 92].map((h, i) => (
              <div key={i} style={{
                flex: 1,
                background: i >= 12 ? 'var(--orange)' : i >= 9 ? 'rgba(255,160,46,0.35)' : 'rgba(255,160,46,0.12)',
                borderRadius: '2px 2px 0 0',
                height: `${h}%`,
              }} />
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { n: 'Order #4729', d: 'Indomie ×4, Milk ×2', v: '₦4,000' },
            { n: 'Order #4728', d: 'Cabin Biscuit ×6', v: '₦7,200' },
          ].map(tx => (
            <div key={tx.n} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '7px 10px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border)',
              borderRadius: 7,
            }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600 }}>{tx.n}</div>
                <div style={{ fontSize: 9, color: 'var(--text-muted)' }}>{tx.d}</div>
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 12, color: 'var(--orange)' }}>{tx.v}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
