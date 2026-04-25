const providers = [
  { name: 'M-Pesa',       color: '#E0003A', bg: 'rgba(224,0,58,0.1)',   icon: 'M' },
  { name: 'Airtel Money', color: '#FF4400', bg: 'rgba(255,68,0,0.1)',   icon: 'A' },
  { name: 'Tigo Pesa',    color: '#00A0E2', bg: 'rgba(0,160,226,0.1)',  icon: 'T' },
  { name: 'Selcom',       color: '#F7941D', bg: 'rgba(247,148,29,0.1)', icon: 'S' },
  { name: 'NMB Bank',     color: '#00843D', bg: 'rgba(0,132,61,0.1)',   icon: 'N' },
  { name: 'CRDB Bank',    color: '#E8001E', bg: 'rgba(232,0,30,0.1)',   icon: 'C' },
  { name: 'Vodacom',      color: '#E60000', bg: 'rgba(230,0,0,0.1)',    icon: 'V' },
  { name: 'Equity Bank',  color: '#D40E0D', bg: 'rgba(212,14,13,0.1)',  icon: 'E' },
  { name: 'Flutterwave',  color: '#F5A623', bg: 'rgba(245,166,35,0.1)', icon: 'F' },
  { name: 'DPO Pay',      color: '#0061A8', bg: 'rgba(0,97,168,0.1)',   icon: 'D' },
  { name: 'PesaLink',     color: '#006DB7', bg: 'rgba(0,109,183,0.1)',  icon: 'P' },
  { name: 'HaloPesa',     color: '#8DC63F', bg: 'rgba(141,198,63,0.1)', icon: 'H' },
];

function LogoBadge({ p }: { p: typeof providers[0] }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '8px 18px',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 999,
      whiteSpace: 'nowrap',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: '50%',
        background: p.bg,
        border: `1.5px solid ${p.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: 9, color: p.color,
        flexShrink: 0,
      }}>{p.icon}</div>
      <span style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: 600, fontSize: 13,
        color: 'var(--text)',
      }}>{p.name}</span>
    </div>
  );
}

export default function Marquee() {
  const items = [...providers, ...providers];
  return (
    <section style={{ padding: '40px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ marginBottom: 20 }}>
        <p style={{
          textAlign: 'center', fontSize: 12,
          color: 'var(--text-muted)',
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Integrates with Tanzania's top payment providers
        </p>
      </div>
      <div style={{
        position: 'relative', overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}>
        <div className="marquee" style={{ gap: 12 }}>
          {items.map((p, i) => (
            <LogoBadge key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
