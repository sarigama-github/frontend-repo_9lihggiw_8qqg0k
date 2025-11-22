import React from 'react'

const plans = [
  { name: 'Indian', color: 'from-orange-200 to-yellow-200', desc: 'Comforting dals, rotis, rice bowls with a zesty twist', veg: true },
  { name: 'Continental', color: 'from-lime-200 to-emerald-200', desc: 'Pasta, baked trays, soups — bright and balanced', veg: true },
  { name: 'American', color: 'from-yellow-200 to-amber-200', desc: 'Wraps, bowls, burgers — cheerful and hearty', veg: true },
  { name: 'Mexican', color: 'from-green-200 to-lime-200', desc: 'Tacos, rice bowls, salsa pops — fiesta vibes', veg: true },
]

const Plans = () => {
  return (
    <section id="plans" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8" style={{fontFamily:'Fredoka, Inter, system-ui'}}>Choose Your Cuisine Plan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <div key={i} className="group rounded-[28px] bg-gradient-to-br p-1 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform" style={{backgroundImage:`linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.8)), linear-gradient(135deg, var(--tw-gradient-stops))`}}>
              <div className={`rounded-[26px] bg-gradient-to-br ${p.color} p-5 border border-white/60`}> 
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-extrabold text-slate-900">{p.name}</h3>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/80 text-lime-700 text-xs font-bold border border-lime-300">Veg options</span>
                </div>
                <p className="text-slate-700 text-sm">{p.desc}</p>
                <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-bold hover:scale-[1.03] active:scale-95 transition-transform shadow-[0_8px_20px_rgba(16,185,129,0.25)]">Select <span>🍋</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
