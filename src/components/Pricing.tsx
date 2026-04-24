import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    mo: '₦5,000', yr: '₦3,750',
    sub: '1 branch · 3 users',
    features: ['POS Sales', 'Basic Inventory', 'Expense Tracking', 'Email Support'],
    popular: false,
  },
  {
    name: 'Growth',
    mo: '₦15,000', yr: '₦11,250',
    sub: '3 branches · 10 users',
    features: ['Everything in Starter', 'Accounting Module', 'Supplier Management', 'Multi-Branch', 'Priority Support'],
    popular: true,
  },
  {
    name: 'Scale',
    mo: '₦35,000', yr: '₦26,250',
    sub: '10 branches · unlimited',
    features: ['Everything in Growth', 'Advanced Analytics', 'API Access', 'Phone Support', 'Custom Reports'],
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">Plans that scale with you.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
            Start free. Upgrade when you grow. Cancel anytime.
          </p>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: 4,
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: 999,
          }}>
            {[{ k: false, l: 'Monthly' }, { k: true, l: 'Annual' }].map(opt => (
              <button
                key={opt.l}
                onClick={() => setAnnual(opt.k)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13, fontWeight: 500,
                  background: annual === opt.k ? 'var(--orange)' : 'transparent',
                  color: annual === opt.k ? '#fff' : 'var(--text-dim)',
                  transition: 'all 200ms',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                {opt.l}
                {opt.k && (
                  <span style={{
                    fontSize: 10, padding: '2px 7px', borderRadius: 999,
                    background: annual ? 'rgba(255,255,255,0.25)' : 'rgba(255,160,46,0.15)',
                    color: annual ? '#fff' : 'var(--orange)', fontWeight: 600,
                  }}>−25%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {plans.map(p => {
            const price = annual ? p.yr : p.mo;
            return (
              <div
                key={p.name}
                style={{
                  padding: 32, position: 'relative',
                  background: p.popular ? 'var(--primary)' : 'var(--bg)',
                  border: `1px solid ${p.popular ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: 16,
                  boxShadow: p.popular ? '0 24px 48px rgba(70,132,50,0.2)' : '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {p.popular && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--orange)', color: '#fff',
                    fontSize: 10, fontWeight: 700,
                    padding: '4px 14px', borderRadius: 999,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                  }}>Most Popular</div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11,
                    color: p.popular ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    marginBottom: 12,
                  }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700, fontSize: 38, letterSpacing: '-0.03em',
                      color: p.popular ? '#fff' : 'var(--text)',
                    }}>{price}</span>
                    <span style={{ fontSize: 13, color: p.popular ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)' }}>/month</span>
                  </div>
                  <div style={{ fontSize: 13, color: p.popular ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}>{p.sub}</div>
                </div>

                <div style={{ height: 1, background: p.popular ? 'rgba(255,255,255,0.15)' : 'var(--border)', marginBottom: 24 }} />

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <li key={f} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontSize: 14, color: p.popular ? 'rgba(255,255,255,0.9)' : 'var(--text)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={p.popular ? '#9AD872' : 'var(--primary)'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ flexShrink: 0, marginTop: 2 }}>
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="btn"
                  style={{
                    width: '100%', display: 'block', textAlign: 'center',
                    background: p.popular ? '#fff' : 'var(--orange)',
                    color: p.popular ? 'var(--primary)' : '#fff',
                    border: 'none',
                    fontWeight: 600,
                  }}
                >
                  Get started
                </a>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: 'var(--text-muted)' }}>
          14-day free trial on all plans · No credit card required
        </p>
      </div>
    </section>
  );
}
