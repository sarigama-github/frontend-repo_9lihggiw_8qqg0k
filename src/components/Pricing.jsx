import React from 'react'

const tiers = [
  { name: 'Starter Box', price: '₹999', period: '/week', perks: ['3 lunches', 'Mix & match', 'Free cutlery'], badge: 'Best for trying' },
  { name: 'Sunny Box', price: '₹1799', period: '/week', perks: ['5 lunches', 'Chef picks', 'Priority delivery'], badge: 'Most popular' },
  { name: 'Citrus Club', price: '₹2999', period: '/2 weeks', perks: ['10 lunches', 'VIP support', 'Surprise dessert'], badge: 'Value pack' },
]

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-lime-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10" style={{fontFamily:'Fredoka, Inter, system-ui'}}>Subscription Boxes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className="relative rounded-[28px] bg-white p-6 border border-yellow-200 shadow-[0_20px_40px_rgba(250,204,21,0.15)]">
              <div className="absolute -top-3 right-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-300 text-slate-900 text-xs font-extrabold border border-yellow-400 shadow">{t.badge} 🍋</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{t.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-slate-900">{t.price}</span>
                <span className="text-slate-500">{t.period}</span>
              </div>
              <ul className="space-y-2 mb-5 text-slate-700">
                {t.perks.map((p, j) => (
                  <li key={j} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime-500"></span> {p}</li>
                ))}
              </ul>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-lime-500 text-slate-900 font-extrabold hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_12px_24px_rgba(132,204,22,0.35)]">Get this box</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
