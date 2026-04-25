export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container" style={{ display: 'contents' }}>

        {/* LEFT */}
        <div className="hero-left" style={{ paddingLeft: 40 }}>
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--orange)', fontStyle: 'italic' }}>
              POS · Inventory · Accounting
            </span>
          </div>

          <h1 className="reveal reveal-1" style={{
            fontSize: 'clamp(40px, 5vw, 76px)',
            fontWeight: 700, lineHeight: 1.02,
            letterSpacing: '-0.04em', color: '#fff',
            marginBottom: 20,
          }}>
            Run your shop.<br />
            <span style={{ color: 'var(--orange)' }}>Grow your money.</span>
          </h1>

          <p className="reveal reveal-2" style={{
            fontSize: 15, color: 'rgba(255,255,255,0.55)',
            maxWidth: 400, lineHeight: 1.7, marginBottom: 32,
          }}>
            All-in-one platform for African businesses — POS, inventory
            and accounting that works fully offline.
          </p>

          <div className="reveal reveal-3" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
            <a href="#pricing" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
              Start free — 14 days
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#features" className="btn" style={{
              background: 'rgba(255,255,255,0.07)', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.14)', padding: '13px 22px', fontSize: 15,
            }}>
              See how it works
            </a>
          </div>

          <div className="reveal reveal-3" style={{ display: 'flex' }}>
            {[
              { v: '500+', l: 'Active shops',  bg: 'var(--orange)' },
              { v: '4.9★', l: 'Avg rating',    bg: 'var(--primary)' },
              { v: '100%', l: 'Offline ready', bg: '#1a3d1a' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '14px 22px', background: s.bg,
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — laptop + phone */}
        <div className="hero-right">
          <div style={{ position: 'relative', width: '100%', maxWidth: 520, paddingBottom: 60 }}>

            {/* ── Laptop (tilted left) ── */}
            <div className="float-slow" style={{
              transform: 'perspective(1400px) rotateY(-8deg)',
              transformOrigin: 'center center',
            }}>
              {/* Screen shell */}
              <div style={{
                background: 'linear-gradient(160deg, #2E2E30 0%, #1A1A1C 100%)',
                borderRadius: '12px 12px 0 0',
                padding: '10px 10px 0',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.1), -20px 24px 80px rgba(0,0,0,0.7)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', height: 10, alignItems: 'center', marginBottom: 5 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#3a3a3a' }} />
                </div>
                <div style={{ background: '#000', borderRadius: '3px 3px 0 0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <POSMockup />
                </div>
              </div>
              {/* Hinge */}
              <div style={{ height: 3, background: 'linear-gradient(90deg, #0a0a0a, #2a2a2a 40%, #0a0a0a)' }} />
              {/* Base */}
              <div style={{
                background: 'linear-gradient(180deg, #1A1A1C, #101012)',
                height: 20, borderRadius: '0 0 8px 8px',
                margin: '0 -6px',
                boxShadow: '-12px 12px 40px rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 48, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
              </div>
            </div>

            {/* ── Phone (overlapping bottom-right) ── */}
            <div className="float-fast" style={{
              position: 'absolute', bottom: 0, right: -10,
              filter: 'drop-shadow(-8px 20px 40px rgba(0,0,0,0.6))',
              zIndex: 10,
            }}>
              <PhoneMockup />
            </div>

            {/* Floating chip — payment */}
            <div style={{
              position: 'absolute', top: '22%', left: -32,
              background: '#fff', borderRadius: 10, padding: '9px 13px',
              display: 'flex', alignItems: 'center', gap: 9,
              boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
              zIndex: 20,
            }}>
              <div className="pulse-ring" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#111', whiteSpace: 'nowrap' }}>Payment received</div>
                <div style={{ fontSize: 10, color: '#888' }}>TZS 28,703 · Transfer</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Desktop POS screen ─── */
const products = [
  { name: 'Air Fresheners', price: 'TZS 1,725' },
  { name: 'Baby Care',      price: 'TZS 1,950' },
  { name: 'Bakery Item',    price: 'TZS 2,175' },
  { name: 'Beef Item',      price: 'TZS 2,400' },
  { name: 'Beverages',      price: 'TZS 2,625' },
  { name: 'Canned Food',    price: 'TZS 2,850' },
  { name: 'Chicken Item',   price: 'TZS 3,075' },
  { name: 'Cleaning',       price: 'TZS 3,300' },
];

const cartItems = [
  { name: 'Beef Item ×4',       price: 'TZS 9,600' },
  { name: 'Beverages ×2',       price: 'TZS 5,250' },
  { name: 'Cleaning Item ×1',   price: 'TZS 3,300' },
];

const navItems = [
  { label: 'POS',       active: true,  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { label: 'Products',  active: false, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
  { label: 'Sales',     active: false, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg> },
  { label: 'Customers', active: false, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
  { label: 'Sync',      active: false, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> },
  { label: 'Settings',  active: false, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
];

function POSMockup() {
  return (
    <div style={{ background: '#0D0F14', display: 'grid', gridTemplateColumns: '50px 1fr 162px', height: 320, fontSize: 10 }}>

      {/* Sidebar */}
      <div style={{ background: '#08090D', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0 8px', gap: 2 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#468432', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, color: '#fff', marginBottom: 2 }}>E</div>
        <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Emanuel</div>
        {navItems.map(item => (
          <div key={item.label} style={{ width: 40, padding: '6px 4px 4px', borderRadius: 7, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, background: item.active ? 'rgba(154,216,114,0.12)' : 'transparent', color: item.active ? '#9AD872' : 'rgba(255,255,255,0.28)' }}>
            {item.icon}
            <span style={{ fontSize: 6.5 }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Main */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '9px', overflow: 'hidden', gap: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.9)' }}>POS</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        </div>
        <div style={{ background: '#181A20', borderRadius: 5, padding: '5px 9px', display: 'flex', alignItems: 'center', gap: 5, border: '1px solid rgba(255,255,255,0.07)' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ flex: 1, color: 'rgba(255,255,255,0.18)', fontSize: 8.5 }}>Search products or scan barcode</span>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#468432', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: '#fff', fontSize: 12, lineHeight: 1, marginTop: -1 }}>+</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, overflow: 'hidden' }}>
          {['All', 'Food & Beverages', 'Beverages', 'Fresh Fruits', 'Beef'].map((cat, i) => (
            <div key={cat} style={{ padding: '2px 8px', borderRadius: 999, whiteSpace: 'nowrap', background: i === 0 ? '#9AD872' : '#181A20', color: i === 0 ? '#0D0F14' : 'rgba(255,255,255,0.35)', fontSize: 7.5, fontWeight: i === 0 ? 700 : 400, border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>{cat}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4, flex: 1, alignContent: 'start' }}>
          {products.map(p => (
            <div key={p.name} style={{ background: '#181A20', borderRadius: 6, padding: '6px 5px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ background: '#23252D', borderRadius: 3, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 5.95"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.65)', lineHeight: 1.3, marginBottom: 2 }}>{p.name}</div>
              <div style={{ fontSize: 7.5, color: '#9AD872', fontWeight: 700 }}>{p.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div style={{ background: '#111318', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', padding: '11px 9px 9px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 10.5, color: '#fff' }}>Cart (3)</span>
        </div>
        <div style={{ background: '#1A1C22', borderRadius: 4, padding: '4px 7px', display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, color: 'rgba(255,255,255,0.4)', marginBottom: 8, border: '1px solid rgba(255,255,255,0.06)' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Walk-in (no customer)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {cartItems.map((item, i) => (
            <div key={i} style={{ background: '#1A1C22', borderRadius: 4, padding: '6px 7px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.75)', marginBottom: 2 }}>{item.name}</div>
              <div style={{ fontSize: 8.5, color: '#9AD872', fontWeight: 700 }}>{item.price}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8 }}>
          {[['Subtotal', 'TZS 5,200'], ['Tax', 'TZS 0.00']].map(([l, v]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8, color: 'rgba(255,255,255,0.38)', marginBottom: 3 }}>
              <span>{l}</span><span>{v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, fontWeight: 700, color: '#fff', paddingTop: 5, marginBottom: 8, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <span>Total</span><span>TZS 5,200</span>
          </div>
          <div style={{ background: '#468432', borderRadius: 5, padding: '7px', textAlign: 'center', fontSize: 9, color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Checkout [F4]
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone mockup ─── */
function PhoneMockup() {
  const mobileProducts = [
    { name: 'Air Fresheners', price: 'TZS 1,725' },
    { name: 'Baby Care',      price: 'TZS 1,950' },
    { name: 'Beef Item',      price: 'TZS 2,400' },
    { name: 'Beverages',      price: 'TZS 2,625' },
    { name: 'Bakery Item',    price: 'TZS 2,175' },
    { name: 'Canned Food',    price: 'TZS 2,850' },
  ];

  return (
    <div style={{ position: 'relative', width: 210 }}>
      {/* Silent / volume buttons — left */}
      <div style={{ position: 'absolute', left: -5, top: 88,  width: 5, height: 32, background: 'linear-gradient(180deg,#d0d0d2,#aaaaac)', borderRadius: '3px 0 0 3px', zIndex: 5 }} />
      <div style={{ position: 'absolute', left: -5, top: 130, width: 5, height: 42, background: 'linear-gradient(180deg,#d0d0d2,#aaaaac)', borderRadius: '3px 0 0 3px', zIndex: 5 }} />
      <div style={{ position: 'absolute', left: -5, top: 182, width: 5, height: 42, background: 'linear-gradient(180deg,#d0d0d2,#aaaaac)', borderRadius: '3px 0 0 3px', zIndex: 5 }} />
      {/* Power button — right */}
      <div style={{ position: 'absolute', right: -5, top: 148, width: 5, height: 64, background: 'linear-gradient(180deg,#d0d0d2,#aaaaac)', borderRadius: '0 3px 3px 0', zIndex: 5 }} />

      {/* Outer frame */}
      <div style={{
        background: 'linear-gradient(155deg, #f2f2f4 0%, #c6c6ca 28%, #dadadd 55%, #f5f5f7 82%, #c0c0c4 100%)',
        borderRadius: 46,
        padding: 5,
        boxShadow: '-20px 40px 80px rgba(0,0,0,0.65), 3px 3px 0 rgba(255,255,255,0.2) inset, -2px -2px 0 rgba(0,0,0,0.12) inset',
      }}>
        {/* Screen */}
        <div style={{ background: '#0A0C10', borderRadius: 42, overflow: 'hidden', position: 'relative' }}>

          {/* Dynamic island */}
          <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 86, height: 24, background: '#000', borderRadius: 999, zIndex: 20 }} />

          {/* Status bar */}
          <div style={{ padding: '16px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>9:41</span>
            <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
              {[5, 8, 12, 16].map((h, i) => (
                <div key={i} style={{ width: 4, height: h, borderRadius: 1, background: i < 3 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.22)' }} />
              ))}
              <div style={{ width: 20, height: 10, borderRadius: 2, border: '1.5px solid rgba(255,255,255,0.45)', position: 'relative', marginLeft: 4 }}>
                <div style={{ position: 'absolute', inset: 1.5, borderRadius: 1, background: '#9AD872', width: '72%' }} />
                <div style={{ position: 'absolute', right: -3, top: '50%', transform: 'translateY(-50%)', width: 2, height: 6, background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
              </div>
            </div>
          </div>

          {/* App header */}
          <div style={{ padding: '8px 16px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>POS</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, background: 'rgba(70,132,50,0.15)', border: '1px solid rgba(70,132,50,0.25)' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#9AD872' }} />
                <span style={{ fontSize: 9, color: '#9AD872', fontWeight: 600 }}>LIVE</span>
              </div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#468432', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff' }}>F</div>
            </div>
          </div>

          {/* Search bar */}
          <div style={{ margin: '10px 14px 8px', background: '#181A20', borderRadius: 10, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 7, border: '1px solid rgba(255,255,255,0.07)' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)' }}>Search products or scan barcode</span>
          </div>

          {/* Category pills */}
          <div style={{ display: 'flex', gap: 5, padding: '0 14px', marginBottom: 10, overflow: 'hidden' }}>
            {['All', 'Food & Bev', 'Drinks', 'Beef'].map((cat, i) => (
              <div key={cat} style={{ padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap', background: i === 0 ? '#9AD872' : '#181A20', color: i === 0 ? '#0A0C10' : 'rgba(255,255,255,0.38)', fontSize: 9, fontWeight: i === 0 ? 700 : 400, border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
                {cat}
              </div>
            ))}
          </div>

          {/* Product grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 14px 14px' }}>
            {mobileProducts.map((p, i) => (
              <div key={i} style={{ background: '#181A20', borderRadius: 10, padding: '10px 10px 9px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ background: '#23252D', borderRadius: 6, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 7 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 5.95"/><line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.72)', lineHeight: 1.3, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 10, color: '#9AD872', fontWeight: 700 }}>{p.price}</div>
              </div>
            ))}
          </div>

          {/* Bottom cart bar */}
          <div style={{ margin: '0 14px 16px', background: '#468432', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 6px 20px rgba(70,132,50,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: 999, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>3</div>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>items in cart</span>
            </div>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 11, color: '#fff' }}>View Cart →</span>
          </div>

        </div>
      </div>
    </div>
  );
}
