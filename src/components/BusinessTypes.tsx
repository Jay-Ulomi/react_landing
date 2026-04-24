const types = [
  {
    name: 'Retail Stores',
    desc: 'Supermarkets, boutiques, electronics',
    iconBg: 'bg-[#7C3AED]/10',
    icon: (
      <svg className="w-7 h-7 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: 'Restaurants',
    desc: 'Fast food, cafes, bakeries',
    iconBg: 'bg-orange-100',
    icon: (
      <svg className="w-7 h-7 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: 'Laundry',
    desc: 'Order tracking, delivery, billing',
    iconBg: 'bg-blue-100',
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    name: 'Pharmacy',
    desc: 'Drug inventory, prescriptions',
    iconBg: 'bg-green-100',
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function BusinessTypes() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-3">Built For Your Industry</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4C1D95]">Works for Any Business</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {types.map((t) => (
            <div key={t.name} className="glass card-hover rounded-2xl p-6 text-center cursor-pointer">
              <div className={`w-14 h-14 rounded-2xl ${t.iconBg} flex items-center justify-center mx-auto mb-4`}>
                {t.icon}
              </div>
              <h4 className="font-bold text-[#4C1D95]">{t.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
