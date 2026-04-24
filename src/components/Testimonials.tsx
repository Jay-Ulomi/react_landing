const reviews = [
  { quote: 'The offline mode saved us during a 6-hour power outage. Sales never stopped. Every transaction synced the moment power came back.', name: 'Adebayo Oke', role: 'Owner · Oke Electronics, Lagos', metric: '4 branches' },
  { quote: "We replaced three separate tools with NexPOS. Our POS, inventory tracker, and accountant's spreadsheets. ₦180K/month saved.", name: 'Fatimah Bello', role: 'Director · Bello Supermarkets, Abuja', metric: '₦180K saved/mo' },
  { quote: 'Running 3 laundry outlets used to require a manager at each one. Now I watch all branches from my phone before 6am.', name: 'Chidi Nwosu', role: 'CEO · FreshClean Laundry, Port Harcourt', metric: '3 outlets, 1 view' },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="badge" style={{ marginBottom: 20 }}>Reviews</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', color: 'var(--black)', lineHeight: 1.05 }}>
              Trusted by<br /><span style={{ color: 'var(--orange)' }}>real owners.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--orange)" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span style={{ marginLeft: 6, fontSize: 14, fontWeight: 600, color: 'var(--black)' }}>4.9</span>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>average rating</span>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((r, i) => (
            <div key={i} className="lift" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 20, padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 56, lineHeight: 0.6, color: 'var(--orange)', marginBottom: 20, opacity: 0.3, userSelect: 'none' }}>"</div>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text)', flex: 1, marginBottom: 24, fontStyle: 'italic' }}>{r.quote}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF0EA', border: '1px solid rgba(245,80,10,0.15)', borderRadius: 20, padding: '4px 12px', marginBottom: 20, alignSelf: 'flex-start' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)' }}>{r.metric}</span>
              </div>
              <div className="divider" style={{ marginBottom: 20 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', background: 'var(--surface)',
                  border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: 'var(--orange)',
                }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--black)' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
