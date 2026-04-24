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
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48, maxWidth: 640, margin: '0 auto 48px' }}>
          <div className="section-eyebrow"><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--indigo-bright)' }} /> Pricing</div>
          <h2 className="section-title">Plans that <span className="text-gradient">scale with you</span>.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
            Start free. Upgrade when you grow. Cancel anytime.
          </p>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: 4,
            background: 'rgba(255,255,255,0.04)',
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
                    background: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 600,
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
                className="card card-hover"
                style={{
                  padding: 32, position: 'relative',
                  borderColor: p.popular ? 'rgba(154,216,114,0.35)' : 'var(--border)',
                  background: p.popular
                    ? 'linear-gradient(180deg, rgba(154,216,114,0.10), rgba(154,216,114,0.02))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  boxShadow: p.popular ? '0 24px 48px -16px var(--indigo-glow)' : 'none',
                }}
              >
                {p.popular && (
                  <div style={{
                    position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--indigo)', color: '#fff',
                    fontSize: 10, fontWeight: 600,
                    padding: '4px 12px', borderRadius: 999,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    boxShadow: '0 4px 12px var(--indigo-glow)',
                  }}>Most Popular</div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11, color: 'var(--text-muted)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    marginBottom: 12,
                  }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 600, fontSize: 38, letterSpacing: '-0.03em',
                    }}>{price}</span>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{p.sub}</div>
                </div>

                <div className="divider" style={{ marginBottom: 24 }} />

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <li key={f} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontSize: 14, color: 'var(--text)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo-bright)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={p.popular ? 'btn btn-primary' : 'btn btn-ghost'}
                  style={{ width: '100%' }}
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
