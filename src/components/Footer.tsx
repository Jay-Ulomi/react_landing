const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', padding: '60px 0 40px' }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: 'var(--black)' }}>NexPOS</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 240, marginBottom: 16 }}>
              All-in-one business management built for modern African businesses.
            </p>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Made with care in Nigeria 🇳🇬</span>
          </div>
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--black)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>{heading}</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: 13, color: 'var(--muted)', transition: 'color 150ms' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--black)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divider" />
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>© 2026 NexPOS Technologies Ltd.</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>RC: 1234567 · Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
