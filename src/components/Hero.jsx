import React from 'react'

const Lemon = ({ className = '' }) => (
  <svg viewBox="0 0 200 140" className={className} aria-hidden>
    <defs>
      <radialGradient id="lemonGrad" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stopColor="#FFF59E"/>
        <stop offset="60%" stopColor="#FFE352"/>
        <stop offset="100%" stopColor="#FFC400"/>
      </radialGradient>
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#FFD54F" floodOpacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#softShadow)">
      <ellipse cx="100" cy="70" rx="88" ry="58" fill="url(#lemonGrad)"/>
      <path d="M20 70c10-28 30-44 80-44s70 16 80 44c-10 28-30 44-80 44S30 98 20 70z" fill="url(#lemonGrad)" opacity=".65"/>
      <path d="M188 70c-6 10-16 18-32 24 8-14 8-34 0-48 16 6 26 14 32 24z" fill="#FFEE58"/>
      <circle cx="62" cy="56" r="6" fill="#FFFDE7" opacity=".85"/>
      <circle cx="76" cy="50" r="3" fill="#FFFDE7" opacity=".8"/>
    </g>
  </svg>
)

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background citrus splash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-lime-300 blur-3xl opacity-40"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-yellow-300 blur-3xl opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(132,204,22,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.15),transparent_35%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lime-300/50 shadow-sm">
              <span className="inline-block h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_0_4px_rgba(132,204,22,0.25)]"></span>
              <span className="text-lime-700 font-semibold tracking-wide text-sm">Lunch It</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-900 mb-4" style={{fontFamily:'Fredoka, Inter, system-ui'}}>Fresh, fun lunches squeezed daily</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">A playful meal subscription that delivers zesty, colorful bowls right to your desk. Bright flavors, big smiles — no midday slump.</p>

            <div className="flex items-center gap-4">
              <a href="#plans" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-500 text-slate-900 font-extrabold shadow-[0_10px_20px_rgba(132,204,22,0.45)] transition-transform active:scale-95 hover:scale-[1.03]">
                <span>Pick a plan</span>
                <span className="transition-transform group-hover:translate-x-1">➜</span>
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-300/80 text-slate-900 font-bold border border-yellow-400 shadow-[0_10px_20px_rgba(250,204,21,0.45)] hover:scale-[1.03] active:scale-95 transition-transform">See this week</a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-500">
              <div className="flex -space-x-3">
                {Array.from({length:5}).map((_,i)=> (
                  <img key={i} alt="meal" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src={`https://images.unsplash.com/photo-15${90+i}5930-8d7d8f2f31?auto=format&fit=crop&w=120&q=60`} />
                ))}
              </div>
              <p className="text-sm">Thousands of happy lunchers. 4.9/5 average taste rating.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-6 rotate-6">
              <Lemon className="h-40 w-auto" />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <img alt="bright bowl" className="rounded-[28px] shadow-xl shadow-yellow-200/50 border border-yellow-300 object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=60" />
              <img alt="fresh greens" className="rounded-[28px] shadow-xl shadow-lime-300/50 border border-lime-300 object-cover aspect-[4/5] translate-y-6" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=900&q=60" />
              <img alt="zesty wrap" className="rounded-[28px] shadow-xl shadow-lime-300/40 border border-lime-300 object-cover aspect-[4/5] -translate-y-6" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=60" />
              <img alt="colorful salad" className="rounded-[28px] shadow-xl shadow-yellow-200/50 border border-yellow-300 object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=60" />
            </div>
          </div>
        </div>
      </div>

      {/* Citrus divider */}
      <div className="relative h-16 overflow-visible">
        <svg className="absolute inset-x-0 -bottom-8 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0,64 C240,120 480,0 720,64 C960,128 1200,24 1440,64 L1440,160 L0,160 Z" fill="#ECFCCB"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
