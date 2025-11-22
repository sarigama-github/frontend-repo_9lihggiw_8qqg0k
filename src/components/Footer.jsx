import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-lime-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-lime-400 border border-lime-600 text-slate-900">🍋</span>
          <p className="font-extrabold text-slate-900">Lunch It</p>
        </div>
        <p className="text-sm text-lime-700">Bright bites, happy afternoons.</p>
        <div className="flex items-center gap-4 text-lime-700">
          <span className="inline-flex items-center gap-1"><span>📸</span> <span className="text-sm">Instagram</span></span>
          <span className="inline-flex items-center gap-1"><span>🐦</span> <span className="text-sm">Twitter</span></span>
          <span className="inline-flex items-center gap-1"><span>📬</span> <span className="text-sm">Support</span></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
