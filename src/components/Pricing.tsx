import { useState, useEffect } from 'react'
import { api, type Plan } from '../lib/api'
import RegisterModal from './RegisterModal'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FALLBACK_PLANS = [
  { id: '', name: 'Starter', monthlyPrice: 5000, annualPrice: 3750, sub: '1 branch · 3 users', features: ['POS Sales', 'Basic Inventory', 'Expense Tracking', 'Email Support'], popular: false },
  { id: '', name: 'Growth', monthlyPrice: 15000, annualPrice: 11250, sub: '3 branches · 10 users', features: ['Everything in Starter', 'Accounting Module', 'Supplier Management', 'Multi-Branch', 'Priority Support'], popular: true },
  { id: '', name: 'Scale', monthlyPrice: 35000, annualPrice: 26250, sub: '10 branches · unlimited', features: ['Everything in Growth', 'Advanced Analytics', 'API Access', 'Phone Support', 'Custom Reports'], popular: false },
]

function formatPrice(price: number) {
  return `TZS ${Number(price).toLocaleString()}`
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [plans, setPlans] = useState<Plan[]>([])
  const [registerOpen, setRegisterOpen] = useState(false)
  const [selectedPlanId, setSelectedPlanId] = useState('')
  const sectionRef = useScrollReveal()

  useEffect(() => {
    api.getPlans()
      .then(data => { if (data.length > 0) setPlans(data) })
      .catch(() => {})
  }, [])

  const openRegister = (planId: string) => {
    setSelectedPlanId(planId)
    setRegisterOpen(true)
  }

  const displayPlans = plans.length > 0
    ? plans.sort((a, b) => a.sortOrder - b.sortOrder).map((p, i) => ({
        id: p.id,
        name: p.name,
        monthlyPrice: p.monthlyPrice,
        annualPrice: p.annualPrice,
        sub: `${p.maxBranches} branch${p.maxBranches !== 1 ? 'es' : ''} · ${p.maxUsers === -1 ? 'unlimited' : p.maxUsers} users`,
        features: p.features.filter(f => f.isEnabled).map(f => f.featureName),
        popular: i === 1,
      }))
    : FALLBACK_PLANS

  return (
    <section id="pricing" className="section" ref={sectionRef as React.RefObject<HTMLElement>} style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow" data-reveal>Pricing</span>
          <h2 className="section-title" data-reveal data-delay="1">Plans that scale with you.</h2>
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
                type="button"
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
          {displayPlans.map((p, idx) => {
            const price = annual ? formatPrice(p.annualPrice) : formatPrice(p.monthlyPrice)
            return (
              <div
                key={p.name}
                data-reveal="scale"
                data-delay={String(idx + 2)}
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
                      fontWeight: 700, fontSize: 34, letterSpacing: '-0.03em',
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

                <button
                  type="button"
                  onClick={() => openRegister(p.id)}
                  className="btn"
                  style={{
                    width: '100%', display: 'block', textAlign: 'center',
                    background: p.popular ? '#fff' : 'var(--orange)',
                    color: p.popular ? 'var(--primary)' : '#fff',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Get started
                </button>
              </div>
            )
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: 'var(--text-muted)' }}>
          14-day free trial on all plans · No credit card required
        </p>
      </div>

      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        preselectedPlanId={selectedPlanId}
        billingCycle={annual ? 'ANNUAL' : 'MONTHLY'}
      />
    </section>
  )
}
