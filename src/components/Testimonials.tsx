import { useScrollReveal } from '../hooks/useScrollReveal'

const reviews = [
  {
    quote: 'The offline mode saved us during a 6-hour power outage. Sales never stopped — every transaction synced perfectly when power came back.',
    name: 'Juma Mwangi',
    role: 'Owner, Mwangi Electronics',
    location: 'Dar es Salaam',
    metric: '4 branches',
    accent: '#FFA02E',
    initial: 'J',
    reveal: 'left' as const,
  },
  {
    quote: "Replaced three separate tools — our POS, inventory tracker, and accountant's spreadsheets. Saving TZS 180K every month.",
    name: 'Amina Hassan',
    role: 'Director, Hassan Supermarkets',
    location: 'Arusha',
    metric: 'TZS 180K saved/mo',
    accent: '#468432',
    initial: 'A',
    reveal: undefined,
  },
  {
    quote: 'Running 3 laundry outlets used to need a manager at each. Now I see everything from my phone before 6am.',
    name: 'Peter Kimaro',
    role: 'CEO, CleanFast Laundry',
    location: 'Mwanza',
    metric: '3 outlets, 1 view',
    accent: '#C8960C',
    initial: 'P',
    reveal: 'right' as const,
  },
]

export default function Testimonials() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="reviews"
      className="section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(circle at 85% 10%, rgba(70,132,50,0.12) 0%, transparent 55%),
          radial-gradient(circle, rgba(70,132,50,0.10) 1px, transparent 1px),
          #EEF5E9
        `,
        backgroundSize: '100% 100%, 32px 32px, 100% 100%',
      }}
    >
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <span className="eyebrow" data-reveal>Customer Stories</span>
            <h2 className="section-title" data-reveal data-delay="1">Trusted by real owners.</h2>
          </div>
          <div data-reveal="right" data-delay="1" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFEF91"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
            <span style={{ marginLeft: 6, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>4.9</span>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>&nbsp;· 312 reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="review-grid">
          {reviews.map((r, i) => (
            <div
              key={i}
              data-reveal={r.reveal ?? undefined}
              data-delay={String(i + 1)}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '32px',
                display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
                transition: 'box-shadow 240ms ease, transform 240ms ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.09)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.boxShadow = ''
                el.style.transform = ''
              }}
            >
              {/* Accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: r.accent,
                borderRadius: '20px 20px 0 0',
              }} />

              {/* Decorative quote mark */}
              <div style={{
                fontFamily: 'Georgia, Times New Roman, serif',
                fontSize: 80, lineHeight: 0.8,
                color: r.accent, opacity: 0.12,
                marginBottom: 8, marginLeft: -4,
                userSelect: 'none',
              }}>"</div>

              {/* Quote text */}
              <p style={{
                fontSize: 15, color: 'var(--text)',
                lineHeight: 1.72, flex: 1, marginBottom: 28,
              }}>
                {r.quote}
              </p>

              {/* Metric pill */}
              <div style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                alignItems: 'center', gap: 6,
                padding: '5px 12px', borderRadius: 999,
                background: `${r.accent}14`,
                border: `1px solid ${r.accent}30`,
                fontSize: 11, fontWeight: 700,
                color: r.accent,
                marginBottom: 24,
                letterSpacing: '0.02em',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: r.accent, display: 'inline-block', flexShrink: 0 }} />
                {r.metric}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                  background: r.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                  fontSize: 17, color: '#fff',
                }}>{r.initial}</div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 2 }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                    {r.role} · <span style={{ color: 'var(--text-dim)' }}>{r.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
