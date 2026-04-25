export default function HowItWorks() {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="two-col">

          {/* LEFT — POS UI mockup */}
          <div style={{ position: 'relative', paddingBottom: 20 }}>

            {/* Main POS screen */}
            <div style={{
              borderRadius: 14, overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}>
              {/* Title bar */}
              <div style={{ background: '#08090D', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>POS · Dar es Salaam</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 8px', borderRadius: 999, background: 'rgba(70,132,50,0.15)', border: '1px solid rgba(70,132,50,0.25)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#9AD872' }} />
                  <span style={{ fontSize: 10, color: '#9AD872', fontWeight: 600 }}>LIVE</span>
                </div>
              </div>

              {/* App body */}
              <div style={{ background: '#0D0F14', display: 'grid', gridTemplateColumns: '44px 1fr 148px' }}>

                {/* Sidebar */}
                <div style={{ background: '#08090D', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: 2 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#468432', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 10, color: '#fff', marginBottom: 8 }}>F</div>
                  {[
                    { active: true,  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, label: 'POS' },
                    { active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, label: 'Products' },
                    { active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>, label: 'Sales' },
                    { active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, label: 'Customers' },
                    { active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, label: 'Sync' },
                    { active: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, label: 'Settings' },
                  ].map(item => (
                    <div key={item.label} style={{ width: 38, padding: '6px 4px 4px', borderRadius: 7, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: item.active ? 'rgba(154,216,114,0.12)' : 'transparent', color: item.active ? '#9AD872' : 'rgba(255,255,255,0.28)' }}>
                      {item.icon}
                      <span style={{ fontSize: 6.5 }}>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Product grid */}
                <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {/* Search */}
                  <div style={{ background: '#181A20', borderRadius: 5, padding: '5px 9px', display: 'flex', alignItems: 'center', gap: 5, border: '1px solid rgba(255,255,255,0.07)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <span style={{ flex: 1, color: 'rgba(255,255,255,0.18)', fontSize: 8.5 }}>Search products or scan barcode</span>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#468432', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#fff', fontSize: 12, lineHeight: 1, marginTop: -1 }}>+</span>
                    </div>
                  </div>
                  {/* Category pills */}
                  <div style={{ display: 'flex', gap: 4, overflow: 'hidden' }}>
                    {['All', 'Food & Beverages', 'Beverages', 'Fresh Fruits', 'Beef'].map((cat, i) => (
                      <div key={cat} style={{ padding: '2px 8px', borderRadius: 999, whiteSpace: 'nowrap', background: i === 0 ? '#9AD872' : '#181A20', color: i === 0 ? '#0D0F14' : 'rgba(255,255,255,0.35)', fontSize: 7.5, fontWeight: i === 0 ? 700 : 400, border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>{cat}</div>
                    ))}
                  </div>
                  {/* Products */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4 }}>
                    {[
                      { name: 'Air Fresheners', price: 'TZS 1,725' },
                      { name: 'Baby Care',      price: 'TZS 1,950' },
                      { name: 'Bakery Item',    price: 'TZS 2,175' },
                      { name: 'Beef Item',      price: 'TZS 2,400' },
                      { name: 'Beverages',      price: 'TZS 2,625' },
                      { name: 'Canned Food',    price: 'TZS 2,850' },
                      { name: 'Chicken',        price: 'TZS 3,075' },
                      { name: 'Cleaning',       price: 'TZS 3,300' },
                    ].map(p => (
                      <div key={p.name} style={{ background: '#181A20', borderRadius: 6, padding: '6px 5px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ background: '#23252D', borderRadius: 3, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 5.95"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                        </div>
                        <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.65)', marginBottom: 2 }}>{p.name}</div>
                        <div style={{ fontSize: 7.5, color: '#9AD872', fontWeight: 700 }}>{p.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart panel */}
                <div style={{ background: '#111318', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', padding: '10px 8px 8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 10, color: '#fff' }}>Cart (3)</span>
                  </div>
                  <div style={{ background: '#1A1C22', borderRadius: 4, padding: '4px 6px', fontSize: 7.5, color: 'rgba(255,255,255,0.4)', marginBottom: 7, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Walk-in (no customer)
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
                    {[
                      { n: 'Beef Item ×4',   p: 'TZS 9,600' },
                      { n: 'Beverages ×2',   p: 'TZS 5,250' },
                      { n: 'Cleaning ×1',    p: 'TZS 3,300' },
                    ].map((item, i) => (
                      <div key={i} style={{ background: '#1A1C22', borderRadius: 4, padding: '5px 6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.72)', marginBottom: 2 }}>{item.n}</div>
                        <div style={{ fontSize: 8, color: '#9AD872', fontWeight: 700 }}>{item.p}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 8 }}>
                    {[['Subtotal','TZS 18,150'],['Tax','TZS 0']].map(([l,v]) => (
                      <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 7.5, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}><span>{l}</span><span>{v}</span></div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 700, color: '#fff', paddingTop: 5, marginBottom: 7, borderTop: '1px solid rgba(255,255,255,0.08)' }}><span>Total</span><span>TZS 18,150</span></div>
                    <div style={{ background: '#468432', borderRadius: 5, padding: '7px', textAlign: 'center', fontSize: 8.5, color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      Checkout [F4]
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Stats badge */}
            <div style={{ position: 'absolute', bottom: 0, left: -20, background: 'var(--orange)', color: '#fff', borderRadius: 12, padding: '18px 22px', boxShadow: '0 8px 24px var(--orange-glow)' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 32, letterSpacing: '-0.03em', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: 12, marginTop: 4, opacity: 0.85 }}>Active shops</div>
            </div>

            {/* Rating badge */}
            <div style={{ position: 'absolute', top: -14, right: -14, background: '#fff', borderRadius: 10, padding: '10px 14px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--yellow)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13, color: '#111' }}>4.9</div>
                <div style={{ fontSize: 10, color: '#888' }}>312 reviews</div>
              </div>
            </div>

          </div>

          {/* RIGHT — steps content */}
          <div>
            <span className="eyebrow">Simple Setup</span>
            <h2 className="section-title">Live in minutes,<br />not months.</h2>
            <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 40, maxWidth: 440 }}>
              Sign up, configure your shop, and start selling — all in under 10 minutes.
              No IT team needed.
            </p>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { n: '01', title: 'Create your account', desc: 'Sign up, verify your business, and choose a plan. Three minutes flat. No credit card needed.' },
                { n: '02', title: 'Set up branches & staff', desc: 'Add store locations, import products, set taxes, and invite your team with the right access levels.' },
                { n: '03', title: 'Go live — instantly', desc: 'Open NexPOS on any device. Start selling immediately, online or offline. Everything syncs in real time.' },
              ].map((s, i) => (
                <div key={s.n} style={{
                  display: 'flex', gap: 20, paddingBottom: 28,
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  marginBottom: i < 2 ? 28 : 0,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                    background: i === 2 ? 'var(--primary)' : 'var(--bg-2)',
                    border: `2px solid ${i === 2 ? 'var(--primary)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: 12,
                    color: i === 2 ? '#fff' : 'var(--text-muted)',
                  }}>{s.n}</div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 6 }}>
                      {s.title}
                      {i === 2 && <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--primary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>● LIVE</span>}
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <a href="#pricing" className="btn btn-primary">Start for free</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
