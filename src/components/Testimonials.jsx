import React from 'react'

const testimonials = [
  { name: 'Anika', role: 'Designer', quote: 'Every bowl is sunshine. The citrus kick wakes me up before my 2 PM reviews!', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Kabir', role: 'Engineer', quote: 'The portions are perfect and the flavors pop. Love the veg options.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Meera', role: 'Founder', quote: 'Lunch It is my happy break. Colors, taste, and zero hassle.', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
]

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10" style={{fontFamily:'Fredoka, Inter, system-ui'}}>Why People Love Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-[28px] p-6 border border-lime-300 bg-gradient-to-br from-white to-lime-50 shadow-[0_12px_30px_rgba(132,204,22,0.15)]">
              <div className="flex items-center gap-3 mb-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full border-2 border-white shadow"/>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
