import React from 'react'

const steps = [
  { title: 'Pick a plan', desc: 'Choose cuisines that make your taste buds dance', icon: '🍋' },
  { title: 'We squeeze & cook', desc: 'Fresh citrus, crisp veggies, sunshine-y sauces', icon: '🥗' },
  { title: 'Lunch, delivered', desc: 'Pop, peel, and enjoy at your desk or park', icon: '📦' },
]

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-lime-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10" style={{fontFamily:'Fredoka, Inter, system-ui'}}>How Lunch It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-[28px] bg-white p-6 border border-yellow-200 shadow-[0_12px_30px_rgba(250,204,21,0.15)]">
              <div className="absolute -top-5 -left-3 h-16 w-16 rounded-[20px] bg-yellow-300 text-3xl flex items-center justify-center border border-yellow-400 shadow-md rotate-[-6deg]">{s.icon}</div>
              <h3 className="mt-8 text-xl font-extrabold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
              <div className="mt-4 h-1.5 rounded-full bg-gradient-to-r from-yellow-300 to-lime-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
