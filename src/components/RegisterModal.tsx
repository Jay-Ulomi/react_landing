import { useState, useEffect } from 'react'
import { api, type Plan, type BusinessType } from '../lib/api'

interface Props {
  isOpen: boolean
  onClose: () => void
  preselectedPlanId?: string
  billingCycle?: 'MONTHLY' | 'ANNUAL'
}

// Fallback used only if the API is unreachable
const FALLBACK_TYPES: BusinessType[] = [
  'GROCERY', 'SUPERMARKET', 'RESTAURANT', 'CAFE', 'BAKERY', 'BUTCHERY',
  'PHARMACY', 'CLINIC', 'SALON', 'ELECTRONICS', 'HARDWARE', 'CLOTHING',
  'AGRICULTURE', 'WHOLESALE', 'HOTEL', 'SCHOOL', 'RETAIL', 'LAUNDRY', 'GENERAL',
].map((code, i) => ({
  id: code, code, isActive: true, sortOrder: i,
  label: code.charAt(0) + code.slice(1).toLowerCase(),
}))

const PERKS = [
  { icon: '✦', text: '14-day free trial, no card needed' },
  { icon: '✦', text: 'Set up in under 2 minutes' },
  { icon: '✦', text: 'Cancel anytime, no questions' },
]

const BUSINESS_ADMIN_URL = import.meta.env.VITE_BUSINESS_ADMIN_URL ?? 'http://192.168.0.121:5175'

export default function RegisterModal({ isOpen, onClose, preselectedPlanId, billingCycle = 'MONTHLY' }: Props) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [registeredEmail, setRegisteredEmail] = useState('')
  const [error, setError] = useState('')
  const [plans, setPlans] = useState<Plan[]>([])
  const [businessTypes, setBusinessTypes] = useState<BusinessType[]>(FALLBACK_TYPES)
  const [selectedPlanId, setSelectedPlanId] = useState(preselectedPlanId ?? '')
  const [cycle] = useState<'MONTHLY' | 'ANNUAL'>(billingCycle)

  const [form, setForm] = useState({
    businessName: '', businessType: '', businessPhone: '',
    ownerFirstName: '', ownerLastName: '', ownerEmail: '', ownerPassword: '', ownerPhone: '',
  })

  useEffect(() => {
    if (isOpen) {
      api.getPlans().then(setPlans).catch(() => {})
      api.getBusinessTypes().then(types => { if (types.length > 0) setBusinessTypes(types) }).catch(() => {})
      setSelectedPlanId(preselectedPlanId ?? '')
      setStep(1); setError(''); setSuccess(false)
      setForm({ businessName: '', businessType: '', businessPhone: '', ownerFirstName: '', ownerLastName: '', ownerEmail: '', ownerPassword: '', ownerPhone: '' })
    }
  }, [isOpen, preselectedPlanId])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const nextStep = () => {
    if (!form.businessName.trim()) { setError('Business name is required'); return }
    setError(''); setStep(2)
  }

  const submit = async () => {
    if (!form.ownerFirstName.trim()) { setError('First name is required'); return }
    if (!form.ownerLastName.trim()) { setError('Last name is required'); return }
    if (!form.ownerEmail.trim()) { setError('Email is required'); return }
    if (form.ownerPassword.length < 8) { setError('Password must be at least 8 characters'); return }
    setError(''); setLoading(true)
    try {
      await api.registerBusiness({
        businessName: form.businessName,
        businessType: form.businessType || undefined,
        businessPhone: form.businessPhone || undefined,
        ownerFirstName: form.ownerFirstName,
        ownerLastName: form.ownerLastName,
        ownerEmail: form.ownerEmail,
        ownerPassword: form.ownerPassword,
        ownerPhone: form.ownerPhone || undefined,
        planId: selectedPlanId || undefined,
        billingCycle: cycle,
        startWithTrial: true,
      })
      setRegisteredEmail(form.ownerEmail)
      setSuccess(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .reg-modal-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .reg-modal-scroll::-webkit-scrollbar { display: none; }
        .reg-input {
          width: 100%; padding: 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          background: var(--bg-2);
          color: var(--text);
          font-size: 14px; font-family: inherit;
          outline: none;
          transition: border-color 150ms, background 150ms;
          box-sizing: border-box;
        }
        .reg-input:focus { border-color: var(--orange); background: var(--bg); }
        .reg-input::placeholder { color: var(--text-muted); }
        .reg-plan-card { cursor: pointer; transition: all 150ms; }
        .reg-plan-card:hover { border-color: var(--border-strong) !important; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
          backdropFilter: 'blur(6px)',
        }}
      >
        {/* Modal shell */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            display: 'flex',
            width: '100%', maxWidth: 860,
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.22)',
            maxHeight: '92vh',
          }}
        >
          {/* ── Left panel ── */}
          <div style={{
            width: 300, flexShrink: 0,
            background: 'var(--primary)',
            padding: '40px 32px',
            display: 'flex', flexDirection: 'column',
            position: 'relative', overflow: 'hidden',
          }} className="reg-left-panel">
            {/* decorative circles */}
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(154,216,114,0.15)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,160,46,0.12)' }} />

            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, position: 'relative' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.02em' }}>NexPOS</span>
            </div>

            <div style={{ position: 'relative', flex: 1 }}>
              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 24, fontWeight: 700, color: '#fff',
                lineHeight: 1.2, letterSpacing: '-0.02em',
                marginBottom: 12,
              }}>
                Start growing your business today.
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 32 }}>
                Join 500+ businesses already using NexPOS to run smarter operations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {PERKS.map(p => (
                  <div key={p.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: '#9AD872', fontSize: 12, marginTop: 2, flexShrink: 0 }}>{p.icon}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step indicator at bottom */}
            {!success && (
              <div style={{ display: 'flex', gap: 6, marginTop: 40, position: 'relative' }}>
                {[1, 2].map(s => (
                  <div key={s} style={{
                    height: 4, flex: 1, borderRadius: 99,
                    background: step >= s ? 'var(--orange)' : 'rgba(255,255,255,0.2)',
                    transition: 'background 300ms',
                  }} />
                ))}
              </div>
            )}

            <style>{`
              @media (max-width: 640px) { .reg-left-panel { display: none !important; } }
            `}</style>
          </div>

          {/* ── Right panel ── */}
          <div
            className="reg-modal-scroll"
            style={{
              flex: 1, background: 'var(--bg)',
              padding: '40px 36px',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 32, height: 32, borderRadius: 8,
                border: '1px solid var(--border)', background: 'var(--bg-2)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {success ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 320, textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(70,132,50,0.1)', marginBottom: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 8 }}>You're all set!</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.65, maxWidth: 300 }}>
                  Your business account has been created.
                </p>
                {registeredEmail && (
                  <div style={{
                    marginTop: 16, padding: '10px 18px', borderRadius: 10,
                    background: 'var(--bg-2)', border: '1.5px solid var(--border)',
                    fontSize: 14, color: 'var(--text)', fontWeight: 500,
                  }}>
                    {registeredEmail}
                  </div>
                )}
                <a
                  href={`${BUSINESS_ADMIN_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: 24, padding: '12px 32px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 10 }}
                >
                  Sign in now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <button type="button" onClick={onClose} className="btn btn-ghost" style={{ marginTop: 10, padding: '10px 24px', borderRadius: 10 }}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 28 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                    Step {step} of 2
                  </p>
                  <h2 style={{ fontSize: 22, letterSpacing: '-0.02em', marginBottom: 4 }}>
                    {step === 1 ? 'Your business' : 'Your account'}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                    {step === 1 ? 'Tell us a bit about your business.' : "You'll use these credentials to sign in."}
                  </p>
                </div>

                {step === 1 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <FormField label="Business name *">
                      <input className="reg-input" value={form.businessName} onChange={set('businessName')} placeholder="e.g. Mama Patel Grocery" />
                    </FormField>

                    <FormField label="Business type">
                      <select className="reg-input" aria-label="Business type" value={form.businessType} onChange={set('businessType')}>
                        <option value="">Select a type</option>
                        {businessTypes.map(t => <option key={t.code} value={t.code}>{t.label}</option>)}
                      </select>
                    </FormField>

                    <FormField label="Business phone">
                      <input className="reg-input" value={form.businessPhone} onChange={set('businessPhone')} placeholder="+255 7XX XXX XXX" />
                    </FormField>

                    {plans.length > 0 && (
                      <FormField label="Choose a plan">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {plans.sort((a, b) => a.sortOrder - b.sortOrder).map(p => {
                            const active = selectedPlanId === p.id
                            return (
                              <label
                                key={p.id}
                                className="reg-plan-card"
                                style={{
                                  display: 'flex', alignItems: 'center', gap: 12,
                                  padding: '12px 14px', borderRadius: 10,
                                  border: `1.5px solid ${active ? 'var(--orange)' : 'var(--border)'}`,
                                  background: active ? 'rgba(255,160,46,0.06)' : 'var(--bg-2)',
                                  cursor: 'pointer',
                                }}
                              >
                                <div style={{
                                  width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                                  border: `2px solid ${active ? 'var(--orange)' : 'var(--border-strong)'}`,
                                  background: active ? 'var(--orange)' : 'transparent',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  transition: 'all 150ms',
                                }}>
                                  {active && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                                </div>
                                <input type="radio" name="plan" value={p.id} checked={active} onChange={() => setSelectedPlanId(p.id)} style={{ display: 'none' }} />
                                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', flex: 1 }}>{p.name}</span>
                                <span style={{ fontSize: 13, color: active ? 'var(--orange)' : 'var(--text-muted)', fontWeight: 500 }}>
                                  TZS {Number(cycle === 'ANNUAL' ? p.annualPrice : p.monthlyPrice).toLocaleString()}/mo
                                </span>
                              </label>
                            )
                          })}
                        </div>
                      </FormField>
                    )}

                    {error && <ErrorMsg msg={error} />}

                    <button type="button" onClick={nextStep} className="btn btn-primary" style={{ width: '100%', height: 46, fontSize: 15, borderRadius: 10 }}>
                      Continue
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <FormField label="First name *">
                      <input className="reg-input" value={form.ownerFirstName} onChange={set('ownerFirstName')} placeholder="John" />
                    </FormField>
                    <FormField label="Last name *">
                      <input className="reg-input" value={form.ownerLastName} onChange={set('ownerLastName')} placeholder="Doe" />
                    </FormField>
                    <FormField label="Email address *">
                      <input className="reg-input" type="email" value={form.ownerEmail} onChange={set('ownerEmail')} placeholder="john@business.com" />
                    </FormField>
                    <FormField label="Password *">
                      <input className="reg-input" type="password" value={form.ownerPassword} onChange={set('ownerPassword')} placeholder="Min. 8 characters" />
                    </FormField>
                    <FormField label="Phone (optional)">
                      <input className="reg-input" value={form.ownerPhone} onChange={set('ownerPhone')} placeholder="+255 7XX XXX XXX" />
                    </FormField>

                    {error && <ErrorMsg msg={error} />}

                    <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                      <button
                        type="button"
                        onClick={() => { setStep(1); setError('') }}
                        className="btn btn-ghost"
                        style={{ flexShrink: 0, height: 46, borderRadius: 10 }}
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={submit}
                        disabled={loading}
                        className="btn btn-primary"
                        style={{ flex: 1, height: 46, fontSize: 15, borderRadius: 10, opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                      >
                        {loading ? 'Creating account…' : 'Start free trial'}
                      </button>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
                      By signing up you agree to our Terms of Service.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dim)' }}>{label}</label>
      {children}
    </div>
  )
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '10px 14px', borderRadius: 10,
      background: 'rgba(220,38,38,0.06)',
      border: '1px solid rgba(220,38,38,0.18)',
      fontSize: 13, color: '#dc2626',
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      {msg}
    </div>
  )
}
