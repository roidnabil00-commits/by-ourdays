'use client'

import { useState } from 'react'
import OrderForm from './OrderForm'

const variants = [
  {
    id: 'grind',
    name: 'GRIND',
    scent: 'Black Coffee',
    origin: 'Dark Roast',
    desc: 'Untuk pagi yang dimulai sebelum dunia bangun. Aroma kopi yang mengingatkan kamu bahwa hari ini untukmu.',
    benefit: 'Produktivitas · Morning Ritual',
    img: '/images/grind.jpg',
  },
  {
    id: 'locked-in',
    name: 'LOCKED IN',
    scent: 'Peppermint',
    origin: 'Fresh & Sharp',
    desc: 'Ketika pikiran harus jernih. Segar. Tajam. Seperti kamu di hari terbaik dalam hidup-mu.',
    benefit: 'Fokus · Deep Work',
    img: '/images/locked-in.jpg',
  },
  {
    id: 'after-hours',
    name: 'AFTER HOURS',
    scent: 'Lavender',
    origin: 'Calm & Deep',
    desc: 'Untuk malam setelah semua sudah diberikan. Biarkan tenang itu akhirnya datang sendiri.',
    benefit: 'Anti-Anxiety · Wind Down',
    img: '/images/after-hours.jpg',
  },
  {
    id: 'golden-hour',
    name: 'GOLDEN HOUR',
    scent: 'Bergamot',
    origin: 'Citrus · Warm',
    desc: 'Momen di antara kerja dan istirahat milik kamu sepenuhnya. Citrus yang hangat seperti sore sempurna.',
    benefit: 'Mood Boost · Energi',
    img: '/images/golden-hour.jpg',
  },
  {
    id: 'neat',
    name: 'NEAT',
    scent: 'Whiskey',
    origin: 'Scotland',
    desc: 'Harum yang berubah menjadi bisikan di telinga. Hangat, lepas kendali, dan gairah yang terjaga di balik rileksnya malam.',
    benefit: 'Prestige · Night Ritual',
    img: '/images/neat.jpg',
  },
]

export default function Arsenal() {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const [hoveredVariant, setHoveredVariant] = useState<string | null>(null)

  const activeVariant = variants.find(v => v.id === selectedVariant)

  return (
    <section id="arsenal" className="w-full py-28 md:py-36 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase mb-4">
            Five Signature Scents
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-4">
            CATALOG
          </h2>
          <div className="w-8 h-[0.5px] bg-[#b89053]/40 mb-6" />
          <p className="font-serif text-white italic text-base max-w-md leading-relaxed opacity-90">
            Temukan ritme kamu. Lima cara untuk hadir — sepenuhnya.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {variants.map((v) => (
            <div
              key={v.id}
              className={`group border transition-all duration-500 cursor-pointer flex flex-col ${
                hoveredVariant === v.id
                  ? 'border-[#b89053]/30 bg-[#0a0a0a]'
                  : 'border-[#1a1a1a] bg-[#050505]'
              }`}
              onMouseEnter={() => setHoveredVariant(v.id)}
              onMouseLeave={() => setHoveredVariant(null)}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#0d0d0d]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
                  <div className="w-16 h-16 rounded-full border border-[#b89053]/30 mb-2" />
                  <span className="text-[0.5rem] tracking-widest text-[#b89053] uppercase">Gypsum</span>
                </div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#b89053]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#b89053]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-serif text-white text-sm tracking-[0.15em]">{v.name}</h3>
                  <span className="text-[#b89053] text-[0.55rem] tracking-wider opacity-80">{v.origin}</span>
                </div>

                <p className="text-[#b89053] text-[0.6rem] tracking-[0.2em] uppercase mb-3 opacity-60">{v.scent}</p>

                <p className="text-white text-[0.65rem] leading-relaxed flex-1 mb-4 font-light opacity-85">
                  {v.desc}
                </p>

                <div className="text-[0.55rem] tracking-wider text-white uppercase mb-4 border-t border-[#1a1a1a] pt-3 opacity-60">
                  {v.benefit}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-white text-sm">Rp75.000</span>
                  <button
                    onClick={() => setSelectedVariant(v.id)}
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border border-[#b89053]/30 text-[#b89053] hover:bg-[#b89053] hover:text-black transition-all duration-300"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PO Notice */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="border border-[#1a1a1a] px-8 py-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b89053] animate-pulse" />
            <p className="text-white text-[0.65rem] tracking-wider opacity-80">
              Produksi terbatas · <span className="text-[#b89053]">Pre-order</span> dibuka setiap minggu · Pengiriman 3–7 hari.
            </p>
          </div>
        </div>

      </div>

      {/* Order Form Modal */}
      {selectedVariant && activeVariant && (
        <OrderForm
          variantName={activeVariant.name}
          onClose={() => setSelectedVariant(null)}
        />
      )}
    </section>
  )
}