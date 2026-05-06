import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import RegisterModal from './RegisterModal'
import DemoModal from './DemoModal'

export default function CTA() {
  const [registerOpen, setRegisterOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        padding: '100px 0',
        position: 'relative',
        /* Stacked CSS backgrounds — no extra DOM, no overflow bleed */
        background: `
          radial-gradient(circle at 85% 10%, rgba(154,216,114,0.22) 0%, transparent 45%),
          radial-gradient(circle at 8%  90%, rgba(255,160,46,0.16)  0%, transparent 38%),
          radial-gradient(circle, rgba(154,216,114,0.1) 1px, transparent 1px),
          var(--primary)
        `,
        backgroundSize: '100% 100%, 100% 100%, 28px 28px, 100% 100%',
      }}
    >


      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Eyebrow — same pattern as every other section */}
        <div data-reveal="fade" style={{ marginBottom: 16 }}>
          <span className="eyebrow">500+ businesses already running on NexPOS</span>
        </div>

        {/* Headline */}
        <h2
          data-reveal
          data-delay="1"
          style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            color: '#fff', letterSpacing: '-0.04em',
            lineHeight: 1.04, marginBottom: 20,
          }}
        >
          14 days free.<br />
          <span style={{ color: 'var(--orange)' }}>No credit card.</span>
        </h2>

        {/* Sub */}
        <p
          data-reveal
          data-delay="2"
          style={{
            fontSize: 16, color: 'rgba(255,255,255,0.48)',
            maxWidth: 420, margin: '0 auto 44px',
            lineHeight: 1.7,
          }}
        >
          Start selling smarter today. Cancel anytime, no questions asked.
        </p>

        {/* CTAs */}
        <div data-reveal="scale" data-delay="3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setRegisterOpen(true)}
            className="btn"
            style={{
              padding: '15px 36px', fontSize: 15, borderRadius: 10,
              background: 'var(--orange)', color: '#fff',
              border: '1.5px solid var(--orange)',
              boxShadow: '0 4px 28px rgba(255,160,46,0.35)',
            }}
          >
            Start free trial
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="btn"
            style={{
              padding: '15px 28px', fontSize: 15, borderRadius: 10,
              background: 'rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.75)',
              border: '1.5px solid rgba(255,255,255,0.12)',
            }}
          >
            Talk to sales
          </button>
        </div>

        {/* Trust marks */}
        <div
          data-reveal="fade"
          data-delay="4"
          style={{
            display: 'flex', gap: 28, justifyContent: 'center',
            flexWrap: 'wrap', marginTop: 40,
          }}
        >
          {[
            {
              icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
              text: 'No credit card required',
            },
            {
              icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
              text: 'Up in under 10 minutes',
            },
            {
              icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
              text: 'Cancel anytime',
            },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', display: 'flex' }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

      </div>

      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  )
}
