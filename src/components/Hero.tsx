export default function Hero() {
  return (
    <div className="hero-layout">

      {/* LEFT — text */}
      <div className="hero-left">
        <div>
          {/* Badge */}
          <div className="badge" style={{ marginBottom: 28 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <span style={{ fontWeight: 700 }}>500+ businesses</span>
            <span style={{ color: 'var(--subtle)' }}>·</span>
            <a href="#reviews" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>Read stories</a>
          </div>

          {/* Headline */}
          <h1 className="hero-headline" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(64px, 8.5vw, 116px)',
            lineHeight: 0.9, letterSpacing: '-0.04em',
            color: 'var(--black)', marginBottom: 28,
          }}>
            Sell<br/>
            More<span style={{ color: 'var(--orange)' }}>+</span>
          </h1>

          <div className="divider" style={{ marginBottom: 22 }} />

          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: 420, marginBottom: 24 }}>
            All-in-one POS, inventory & accounting for African businesses — works online and fully offline.
          </p>

          {/* Social proof */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32, paddingBottom: 28, borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex' }}>
              {['#F5A623','#F5500A','#18A058'].map((c,i) => (
                <div key={c} style={{
                  width: 30, height: 30, borderRadius: '50%', background: c,
                  border: '2px solid #fff', marginLeft: i > 0 ? -9 : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11, color: '#fff', flexShrink: 0,
                }}>{['A','F','C'][i]}</div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>
              Loved by owners
              <span style={{ margin: '0 8px', color: 'var(--border)' }}>/</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#F5A623" style={{ verticalAlign: 'middle', marginRight: 3 }} aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <strong style={{ color: 'var(--black)' }}>4.9</strong>
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <a href="#pricing" className="btn-dark">Start Free — 14 days</a>
          <a href="#pricing" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap' }}>
            Our Pricing
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>
      </div>

      {/* RIGHT — device mockups */}
      <div className="hero-right">

        {/* ── Laptop mockup ── */}
        <div className="float-b" style={{ position: 'relative', zIndex: 2, marginRight: 28 }}>
          {/* Screen bezel */}
          <div style={{
            background: '#1C1C1E', borderRadius: '14px 14px 0 0',
            padding: '8px 8px 0 8px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 6px 16px rgba(0,0,0,0.14)',
          }}>
            {/* App window */}
            <div style={{ background: '#fff', borderRadius: '8px 8px 0 0', overflow: 'hidden', width: 320 }}>
              {/* Window chrome */}
              <div style={{ background: '#1A1A1A', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 5 }}>
                {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
                  <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
                ))}
                <div style={{ flex: 1, textAlign: 'center', fontSize: 9, color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em' }}>
                  NexPOS — Ikeja Branch
                </div>
                <div className="live" style={{ width: 5, height: 5, borderRadius: '50%', background: '#28CA41' }} />
              </div>

              {/* App body */}
              <div style={{ display: 'flex', height: 196 }}>
                {/* Sidebar */}
                <div style={{ width: 38, background: '#0D0D0D', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 14, gap: 16 }}>
                  {/* Logo mark */}
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  </div>
                  {/* Nav icons */}
                  {[
                    <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
                    <><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></>,
                    <><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>,
                    <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
                  ].map((icon, i) => (
                    <div key={i} style={{
                      width: 28, height: 28, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: i === 3 ? 'rgba(245,80,10,0.2)' : 'transparent',
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={i === 3 ? 'var(--orange)' : 'rgba(255,255,255,0.3)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {icon}
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Main dashboard */}
                <div style={{ flex: 1, background: '#F5F4F1', padding: 10, display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 9, fontWeight: 700, fontFamily: 'Syne, sans-serif', color: '#0D0D0D', letterSpacing: '-0.01em' }}>Dashboard</div>
                      <div style={{ fontSize: 8, color: 'var(--muted)' }}>Thu 24 Apr · Ikeja HQ</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 8, fontWeight: 800, color: '#fff', fontFamily: 'Syne, sans-serif' }}>J</span>
                      </div>
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 5 }}>
                    {[
                      { l: 'Revenue', v: '₦482K', c: 'var(--orange)', up: '+24%' },
                      { l: 'Orders', v: '47', c: 'var(--green)', up: '+8%' },
                      { l: 'Live carts', v: '3', c: '#6366F1', up: '' },
                    ].map(s => (
                      <div key={s.l} style={{ background: '#fff', borderRadius: 7, padding: '6px 7px', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: 7, color: 'var(--muted)', marginBottom: 2 }}>{s.l}</div>
                        <div style={{ fontSize: 11, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#0D0D0D', letterSpacing: '-0.03em' }}>{s.v}</div>
                        {s.up && <div style={{ fontSize: 7, color: s.c, fontWeight: 600 }}>{s.up}</div>}
                      </div>
                    ))}
                  </div>

                  {/* Sales chart */}
                  <div style={{ background: '#fff', borderRadius: 7, padding: '7px 8px', border: '1px solid var(--border)', flex: 1 }}>
                    <div style={{ fontSize: 7, fontWeight: 700, color: 'var(--muted)', marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Sales today</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 44 }}>
                      {[28, 45, 32, 60, 78, 55, 88, 72, 95, 62].map((h, i) => (
                        <div key={i} style={{
                          flex: 1, background: i === 8 ? 'var(--orange)' : i === 9 ? 'rgba(245,80,10,0.3)' : 'var(--border)',
                          borderRadius: '3px 3px 0 0', height: `${h}%`,
                          minWidth: 0,
                        }} />
                      ))}
                    </div>
                  </div>

                  {/* Last transactions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {[
                      { n: 'Indomie ×4, Milk ×2', v: '₦4,000', t: '2m ago' },
                      { n: 'Cabin Biscuit ×6', v: '₦7,200', t: '9m ago' },
                    ].map((tx, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 6, padding: '5px 7px', border: '1px solid var(--border)' }}>
                        <div>
                          <div style={{ fontSize: 8, fontWeight: 600, color: '#0D0D0D' }}>{tx.n}</div>
                          <div style={{ fontSize: 7, color: 'var(--muted)' }}>{tx.t}</div>
                        </div>
                        <div style={{ fontSize: 9, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: 'var(--orange)' }}>{tx.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Keyboard base */}
          <div style={{ background: '#2A2A2C', height: 14, borderRadius: '0 0 6px 6px', margin: '0 2px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 3 }}>
            <div style={{ width: 56, height: 4, background: '#222', borderRadius: '2px 2px 0 0' }} />
          </div>
          <div style={{ height: 4, background: '#1A1A1A', borderRadius: '0 0 12px 12px', margin: '0 -8px' }} />
        </div>

        {/* ── Phone mockup ── */}
        <div className="float-c" style={{
          position: 'absolute', bottom: '7%', right: '6%', zIndex: 4,
        }}>
          {/* Phone frame */}
          <div style={{
            background: '#1C1C1E', borderRadius: 28, padding: 6,
            boxShadow: '0 20px 52px rgba(0,0,0,0.32), 0 4px 12px rgba(0,0,0,0.18)',
            width: 118,
          }}>
            {/* Screen */}
            <div style={{ background: '#fff', borderRadius: 22, overflow: 'hidden' }}>
              {/* Status bar */}
              <div style={{ background: '#0D0D0D', padding: '6px 12px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 7, fontWeight: 700, color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>9:41</span>
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <svg width="9" height="7" viewBox="0 0 24 18" fill="#fff" aria-hidden="true"><path d="M1 9c3-6 19-6 22 0M5 13c2-4 12-4 14 0M9 17c1-2 5-2 6 0"/></svg>
                  <svg width="10" height="7" viewBox="0 0 24 12" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true"><rect x="1" y="1" width="18" height="10" rx="2"/><path d="M23 4v4" strokeWidth="3" strokeLinecap="round"/><rect x="2" y="2" width="14" height="8" rx="1" fill="#fff"/></svg>
                </div>
              </div>

              {/* App header */}
              <div style={{ background: '#0D0D0D', padding: '8px 12px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.45)', marginBottom: 1 }}>Ikeja Branch</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 12, color: '#fff', letterSpacing: '-0.02em' }}>New Sale</div>
                </div>
                <div style={{ width: 22, height: 22, borderRadius: 7, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
              </div>

              {/* Cart items */}
              <div style={{ padding: '8px 10px', background: '#F5F4F1', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { n: 'Indomie ×4', p: '₦1,600' },
                  { n: 'Peak Milk ×2', p: '₦2,400' },
                  { n: 'Cabin Biscuit', p: '₦1,200' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 7, padding: '5px 7px', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 8, color: '#0D0D0D', fontWeight: 500 }}>{item.n}</span>
                    <span style={{ fontSize: 8, fontWeight: 800, fontFamily: 'Syne, sans-serif' }}>{item.p}</span>
                  </div>
                ))}
              </div>

              {/* Total + button */}
              <div style={{ padding: '6px 10px 10px', background: '#F5F4F1' }}>
                <div style={{ background: 'var(--orange)', borderRadius: 8, padding: '7px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                  <span style={{ fontSize: 8, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#fff' }}>TOTAL</span>
                  <span style={{ fontSize: 11, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#fff' }}>₦5,200</span>
                </div>
                <div style={{ background: '#0D0D0D', borderRadius: 8, padding: '7px 10px', textAlign: 'center' }}>
                  <span style={{ fontSize: 8, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#fff', letterSpacing: '0.04em' }}>CHARGE ₦5,200</span>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div style={{ height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 32, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
            </div>
          </div>
        </div>

        {/* Floating: payment confirmed */}
        <div className="ui-card float-a" style={{
          position: 'absolute', top: '10%', left: '4%', zIndex: 5,
          padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 9,
        }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--black)', whiteSpace: 'nowrap' }}>Payment received</div>
            <div style={{ fontSize: 10, color: 'var(--muted)' }}>₦28,703 · Transfer</div>
          </div>
        </div>

        {/* Floating: low stock */}
        <div className="ui-card float-c" style={{
          position: 'absolute', top: '30%', left: '2%', zIndex: 5,
          padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 9,
        }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: 'var(--orange-light)', border: '1px solid rgba(245,80,10,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--black)', whiteSpace: 'nowrap' }}>Low stock alert</div>
            <div style={{ fontSize: 10, color: 'var(--muted)' }}>Peak Milk — 8 left</div>
          </div>
        </div>

        {/* Floating: stat badge — hidden on tablet */}
        <div className="ui-card float-b hero-card-extra" style={{
          position: 'absolute', top: '8%', right: '3%', zIndex: 5,
          padding: '12px 16px', minWidth: 130,
        }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>— UP TO</div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 32, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--black)', marginBottom: 2 }}>60%</div>
          <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.4 }}>More sales<br />this month</div>
        </div>

      </div>
    </div>
  );
}
