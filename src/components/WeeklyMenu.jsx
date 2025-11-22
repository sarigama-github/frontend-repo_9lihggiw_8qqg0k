import React from 'react'

const colors = [
  'bg-yellow-100 border-yellow-300',
  'bg-lime-100 border-lime-300',
  'bg-amber-100 border-amber-300',
  'bg-green-100 border-green-300',
]

const sampleMenu = [
  { day: 'Mon', title: 'Lemon Herb Quinoa Bowl', desc: 'Zesty quinoa, roasted chickpeas, mint yogurt', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60' },
  { day: 'Tue', title: 'Citrus Avocado Wrap', desc: 'Creamy avocado, greens, tangy dressing', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60' },
  { day: 'Wed', title: 'Sunny Veggie Pasta', desc: 'Lemon-garlic sauce, snap peas, basil', img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=800&q=60' },
  { day: 'Thu', title: 'Ginger-Lime Stir Fry', desc: 'Crisp veggies, tofu, sticky rice', img: 'https://images.unsplash.com/photo-1569058242560-64297530b29f?auto=format&fit=crop&w=800&q=60' },
  { day: 'Fri', title: 'Spicy Mango Salad', desc: 'Mango, chili-lime vinaigrette, cashews', img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60' },
]

const WeeklyMenu = () => {
  return (
    <section id="menu" className="bg-lime-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900" style={{fontFamily:'Fredoka, Inter, system-ui'}}>This Week’s Menu</h2>
          <span className="text-slate-500 text-sm">New dishes drop every Friday</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {sampleMenu.map((item, i) => (
            <div key={i} className={`group rounded-[24px] border overflow-hidden ${colors[i % colors.length]} shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5`}>
              <div className="aspect-[5/4] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center h-7 min-w-7 px-2 rounded-full bg-white text-lime-700 text-xs font-bold border border-lime-300 shadow-sm">{item.day}</span>
                  <span className="text-slate-500 text-xs">Veg + Non-Veg</span>
                </div>
                <h3 className="font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeeklyMenu
