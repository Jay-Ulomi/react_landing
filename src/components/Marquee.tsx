const logos = [
  'Paystack', 'Flutterwave', 'GTBank', 'Access Bank', 'Interswitch',
  'Moniepoint', 'Kuda', 'OPay', 'PalmPay', 'Carbon',
];

export default function Marquee() {
  const items = [...logos, ...logos];
  return (
    <section style={{ padding: '48px 0', position: 'relative' }}>
      <div className="container" style={{ marginBottom: 24 }}>
        <p style={{
          textAlign: 'center', fontSize: 13, color: 'var(--text-muted)',
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          Integrates with the tools you already use
        </p>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' }}>
        <div className="marquee">
          {items.map((l, i) => (
            <div key={i} style={{
              padding: '0 36px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500, fontSize: 22,
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
              opacity: 0.7,
              letterSpacing: '-0.01em',
            }}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
