const brands = [
  'Paystack', 'Flutterwave', 'Interswitch', 'GTBank', 'Access Bank',
  'Paystack', 'Flutterwave', 'Interswitch', 'GTBank', 'Access Bank',
];

const items = [
  'Retail Stores', 'Restaurants', 'Laundry', 'Pharmacy', 'Supermarkets',
  'Boutiques', 'Fast Food', 'Electronics', 'Bakeries', 'Service Centers',
  'Retail Stores', 'Restaurants', 'Laundry', 'Pharmacy', 'Supermarkets',
  'Boutiques', 'Fast Food', 'Electronics', 'Bakeries', 'Service Centers',
];

export default function Marquee() {
  return (
    <div style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 0', overflow: 'hidden' }}>
      <div className="marquee-wrap">
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to right, #fff 0%, transparent 8%, transparent 92%, #fff 100%)',
        }} />
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, paddingRight: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.04em', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                {item}
              </span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--orange)', opacity: 0.5, flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
