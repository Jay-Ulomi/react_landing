const reviews = [
  {
    quote: 'The offline mode saved us during a 6-hour outage. Sales never stopped — every transaction synced perfectly when power came back.',
    name: 'Adebayo Oke', role: 'Owner, Oke Electronics · Lagos',
    metric: '4 branches',
  },
  {
    quote: "Replaced three separate tools — our POS, inventory tracker, and accountant's spreadsheets. Saving ₦180K every month.",
    name: 'Fatimah Bello', role: 'Director, Bello Supermarkets · Abuja',
    metric: '₦180K saved/mo',
  },
  {
    quote: 'Running 3 laundry outlets used to need a manager at each. Now I see everything from my phone before 6am.',
    name: 'Chidi Nwosu', role: 'CEO, FreshClean Laundry · Port Harcourt',
    metric: '3 outlets, 1 view',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <span className="eyebrow">Customer Stories</span>
            <h2 className="section-title">Trusted by real owners.</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--yellow)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
            <span style={{ marginLeft: 8, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>4.9</span>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>· 312 reviews</span>
          </div>
        </div>

        {/* Logistick-style quote cards */}
        <div className="review-grid">
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 16,
              padding: '36px 32px', display: 'flex', flexDirection: 'column', position: 'relative',
            }}>
              {/* Large quote circle — Logistick style */}
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'var(--orange)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24, flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M3 17h3l2-4V7H2v6h3zm10 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.7, flex: 1, marginBottom: 24 }}>
                "{r.quote}"
              </p>

              {/* Metric badge */}
              <div style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                alignItems: 'center', gap: 6,
                padding: '4px 12px', borderRadius: 999,
                background: 'rgba(70,132,50,0.08)',
                border: '1px solid rgba(70,132,50,0.18)',
                fontSize: 11, color: 'var(--primary)', fontWeight: 600,
                marginBottom: 20,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)' }} />
                {r.metric}
              </div>

              <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff',
                }}>{r.name[0]}</div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
