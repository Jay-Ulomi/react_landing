import { useState } from 'react';

const plans = [
  { name: 'Basic', mo: '₦5,000', yr: '₦3,750', sub: '1 branch · 3 users', features: ['POS Sales', 'Basic Inventory', 'Expense Tracking', 'Email Support'], missing: ['Accounting', 'Multi-Branch'], popular: false },
  { name: 'Standard', mo: '₦15,000', yr: '₦11,250', sub: '3 branches · 10 users', features: ['Everything in Basic', 'Accounting Module', 'Supplier Mgmt', 'Multi-Branch (3)', 'Priority Email'], missing: ['Advanced Reports'], popular: false },
  { name: 'Premium', mo: '₦35,000', yr: '₦26,250', sub: '10 branches · unlimited', features: ['Everything in Standard', 'Advanced Reports', 'Laundry Module', 'Phone Support', 'API Access'], missing: [], popular: true },
  { name: 'Enterprise', mo: 'Custom', yr: 'Custom', sub: 'Unlimited · white-label', features: ['Everything in Premium', 'Unlimited Branches', 'Dedicated Manager', 'Custom Integrations', 'SLA Guarantee'], missing: [], popular: false },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-pad" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="badge" style={{ marginBottom: 20 }}>Pricing</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', color: 'var(--black)', lineHeight: 1.05 }}>
              Plans that<br /><span style={{ color: 'var(--orange)' }}>scale with you.</span>
            </h2>
          </div>
          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: annual ? 'var(--muted)' : 'var(--black)' }}>Monthly</span>
            <button onClick={() => setAnnual(v => !v)} aria-label="Toggle billing" style={{
              width: 48, height: 26, borderRadius: 13, border: 'none', cursor: 'pointer',
              background: annual ? 'var(--orange)' : 'var(--border)', position: 'relative', transition: 'background 200ms',
            }}>
              <div style={{
                position: 'absolute', top: 3, left: 3, width: 20, height: 20,
                borderRadius: '50%', background: '#fff',
                transition: 'transform 200ms', transform: annual ? 'translateX(22px)' : 'none',
                boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
              }} />
            </button>
            <span style={{ fontSize: 14, fontWeight: 600, color: annual ? 'var(--black)' : 'var(--muted)' }}>
              Annual
              <span style={{ marginLeft: 6, fontSize: 11, fontWeight: 700, color: 'var(--green)', background: '#ECFDF5', padding: '2px 7px', borderRadius: 20 }}>-25%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map(p => {
            const price = annual ? p.yr : p.mo;
            return (
              <div key={p.name} style={{
                background: p.popular ? 'var(--black)' : 'var(--white)',
                border: `1px solid ${p.popular ? 'var(--black)' : 'var(--border)'}`,
                borderRadius: 20, padding: '32px 28px',
                display: 'flex', flexDirection: 'column', position: 'relative',
              }}>
                {p.popular && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--orange)', color: '#fff',
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 10,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap',
                  }}>Most Popular</div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: p.popular ? 'rgba(255,255,255,0.5)' : 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: price === 'Custom' ? 28 : 32, letterSpacing: '-0.03em', color: p.popular ? '#fff' : 'var(--black)' }}>{price}</span>
                    {price !== 'Custom' && <span style={{ fontSize: 13, color: p.popular ? 'rgba(255,255,255,0.5)' : 'var(--muted)' }}>/mo</span>}
                  </div>
                  <div style={{ fontSize: 12, color: p.popular ? 'rgba(255,255,255,0.5)' : 'var(--muted)' }}>{p.sub}</div>
                </div>

                <div style={{ height: 1, background: p.popular ? 'rgba(255,255,255,0.1)' : 'var(--border)', marginBottom: 24 }} />

                <ul style={{ flex: 1, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: p.popular ? 'rgba(255,255,255,0.8)' : 'var(--text)' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={p.popular ? '#fff' : 'var(--green)'} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                      {f}
                    </li>
                  ))}
                  {p.missing.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: p.popular ? 'rgba(255,255,255,0.25)' : 'var(--subtle)', opacity: 0.6 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#" style={{
                  display: 'block', textAlign: 'center', padding: '12px',
                  borderRadius: 10, fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13,
                  background: p.popular ? 'var(--orange)' : 'var(--surface)',
                  color: p.popular ? '#fff' : 'var(--black)',
                  border: p.popular ? 'none' : '1px solid var(--border)',
                  transition: 'opacity 150ms',
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {p.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--muted)' }}>14-day free trial on all plans · No credit card required</p>
      </div>
    </section>
  );
}
