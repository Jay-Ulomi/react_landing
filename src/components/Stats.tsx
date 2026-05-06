import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '500+',   label: 'Active shops',         sub: 'across Tanzania' },
  { value: '50K+',   label: 'Transactions/day',      sub: 'processed daily' },
  { value: '99.9%',  label: 'Uptime',                sub: 'guaranteed SLA' },
  { value: '10+',    label: 'Cities covered',        sub: 'and growing' },
]

export default function Stats() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        background: '#2d6020',
        borderTop: '1px solid rgba(154,216,114,0.15)',
        borderBottom: '1px solid rgba(154,216,114,0.15)',
        padding: '56px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(154,216,114,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(154,216,114,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Decorative TZ letters */}
      <div style={{
        position: 'absolute', right: '8%', top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.04, zIndex: 0,
        fontSize: 280, lineHeight: 1,
        color: '#9AD872', userSelect: 'none',
        fontWeight: 900, pointerEvents: 'none',
      }}>TZ</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="stats-band">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal="scale"
              data-delay={String(i + 1)}
              style={{
                padding: '24px 32px',
                borderRight: i < 3 ? '1px solid rgba(154,216,114,0.12)' : 'none',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800, fontSize: 'clamp(32px, 3.5vw, 52px)',
                color: '#fff', letterSpacing: '-0.03em', lineHeight: 1,
                marginBottom: 8,
              }}>{s.value}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#9AD872', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-band { grid-template-columns: 1fr 1fr !important; }
          .stats-band > div { border-right: none !important; border-bottom: 1px solid rgba(154,216,114,0.12); }
          .stats-band > div:nth-child(odd) { border-right: 1px solid rgba(154,216,114,0.12) !important; }
          .stats-band > div:last-child, .stats-band > div:nth-last-child(2):nth-child(odd) { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
