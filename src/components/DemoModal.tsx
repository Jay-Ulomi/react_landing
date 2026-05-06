import { useState, useEffect } from 'react'
import { api, type DemoAccessResponse } from '../lib/api'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: Props) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<DemoAccessResponse | null>(null)
  const [error, setError] = useState('')

  const [form, setForm] = useState({ name: '', email: '', phone: '', businessName: '', message: '' })

  useEffect(() => {
    if (isOpen) {
      setForm({ name: '', email: '', phone: '', businessName: '', message: '' })
      setResult(null)
      setError('')
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const submit = async () => {
    if (!form.name.trim()) { setError('Name is required'); return }
    if (!form.email.trim()) { setError('Email is required'); return }
    setError('')
    setLoading(true)
    try {
      const data = await api.requestDemo({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        businessName: form.businessName || undefined,
        message: form.message || undefined,
      })
      setResult(data)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Request failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg)', borderRadius: 16,
          border: '1px solid var(--border)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
          width: '100%', maxWidth: 460,
          padding: 36,
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 32, height: 32, borderRadius: 8,
            border: '1px solid var(--border)', background: 'var(--bg-2)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-dim)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        {result ? (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(70,132,50,0.1)', margin: '0 auto 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 style={{ marginBottom: 8, fontSize: 20 }}>Your demo is ready</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: 14, marginBottom: 24 }}>{result.note}</p>

            <div style={{
              background: 'var(--bg-2)', borderRadius: 10,
              border: '1px solid var(--border)',
              padding: 20, textAlign: 'left',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <DemoCredRow label="Email" value={result.loginEmail} />
              <DemoCredRow label="Password" value={result.loginPassword} />
            </div>

            <button onClick={onClose} className="btn btn-primary" style={{ marginTop: 20, width: '100%' }}>
              Got it
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, marginBottom: 4 }}>Talk to sales</h2>
              <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>
                Get a personalized demo and instant access to a trial account.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <DemoField label="Full name *">
                <input value={form.name} onChange={set('name')} placeholder="John Doe" />
              </DemoField>
              <DemoField label="Work email *">
                <input type="email" value={form.email} onChange={set('email')} placeholder="john@company.com" />
              </DemoField>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <DemoField label="Phone">
                  <input value={form.phone} onChange={set('phone')} placeholder="+255 7XX XXX XXX" />
                </DemoField>
                <DemoField label="Business name">
                  <input value={form.businessName} onChange={set('businessName')} placeholder="Acme Ltd." />
                </DemoField>
              </div>
              <DemoField label="Message (optional)">
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us a bit about your needs…"
                  rows={3}
                  style={{
                    width: '100%', padding: '10px 12px',
                    border: '1.5px solid var(--border)', borderRadius: 8,
                    background: 'var(--bg)', color: 'var(--text)',
                    fontSize: 14, fontFamily: 'inherit',
                    outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                  }}
                />
              </DemoField>

              {error && (
                <div style={{
                  padding: '10px 14px', borderRadius: 8,
                  background: 'rgba(220,38,38,0.07)',
                  border: '1px solid rgba(220,38,38,0.2)',
                  fontSize: 13, color: '#dc2626',
                }}>
                  {error}
                </div>
              )}

              <button
                onClick={submit}
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Sending…' : 'Request demo'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function DemoField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dim)', display: 'block', marginBottom: 6 }}>{label}</label>
      {children}
      <style>{`
        div input {
          width: 100%;
          padding: 10px 12px;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          background: var(--bg);
          color: var(--text);
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 150ms;
          box-sizing: border-box;
        }
        div input:focus { border-color: var(--orange); }
        div input::placeholder { color: var(--text-muted); }
      `}</style>
    </div>
  )
}

function DemoCredRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{label}</span>
      <span style={{
        fontSize: 13, fontWeight: 600, color: 'var(--text)',
        fontFamily: 'JetBrains Mono, monospace',
        background: 'var(--bg)', padding: '4px 10px', borderRadius: 6,
        border: '1px solid var(--border)',
      }}>{value}</span>
    </div>
  )
}
