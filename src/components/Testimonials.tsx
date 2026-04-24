const reviews = [
  {
    quote: 'The offline mode saved us during a 6-hour outage. Sales never stopped — every transaction synced perfectly when power came back.',
    name: 'Adebayo Oke', role: 'Owner, Oke Electronics',
    metric: '4 branches',
  },
  {
    quote: "Replaced three separate tools with NexPOS. Our POS, inventory, and accountant's spreadsheets — all gone. Saving ₦180K/month.",
    name: 'Fatimah Bello', role: 'Director, Bello Supermarkets',
    metric: '₦180K saved/mo',
  },
  {
    quote: 'Running 3 laundry outlets used to need a manager at each. Now I see everything from my phone before 6am.',
    name: 'Chidi Nwosu', role: 'CEO, FreshClean Laundry',
    metric: '3 outlets, 1 view',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <div className="section-eyebrow"><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--indigo-bright)' }} /> Customers</div>
            <h2 className="section-title">Loved by <span className="text-gradient">real owners</span>.</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--yellow)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span style={{ marginLeft: 6, fontFamily: 'Space Grotesk, sans-serif', fontSize: 16, fontWeight: 600 }}>4.9</span>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>· 312 reviews</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {reviews.map((r, i) => (
            <div key={i} className="card card-hover" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--indigo-bright)" style={{ opacity: 0.4, marginBottom: 16 }}>
                <path d="M3 17h3l2-4V7H2v6h3zm10 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.65, flex: 1, marginBottom: 24 }}>{r.quote}</p>

              <div style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                alignItems: 'center', gap: 6,
                padding: '4px 10px',
                background: 'rgba(154,216,114,0.09)',
                border: '1px solid rgba(154,216,114,0.16)',
                borderRadius: 999,
                marginBottom: 20,
                fontSize: 11, color: 'var(--indigo-bright)', fontWeight: 500,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--indigo-bright)' }} />
                {r.metric}
              </div>

              <div className="divider" style={{ marginBottom: 16 }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'var(--orange)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14, color: '#fff',
                }}>{r.name[0]}</div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
