'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Sistem pembeliannya gimana?',
    a: 'Ourdays beroperasi dengan sistem Pre-Order (PO). Kamu order lewat website, lalu diarahkan ke WhatsApp or Marketplace untuk konfirmasi & pembayaran. Setelah DP masuk, produk diproduksi dan dikirim dalam 3–5 hari kerja.',
  },
  {
    q: 'Berapa lama burn time-nya?',
    a: 'Setiap lilin Ourdays memiliki burn time estimasi 35–45 jam tergantung kondisi ruangan. Untuk hasil optimal, jangan bakar lebih dari 4 jam sekali dan pastikan sumbu dipotong ke 6mm sebelum dinyalakan.',
  },
  {
    q: 'Apakah bisa custom wangi atau wadah?',
    a: 'Untuk saat ini kami belum membuka custom order. Fokus kami adalah 5 varian signature yang sudah dikurasi. Namun, untuk pembelian dalam jumlah besar (10+ pcs), silakan DM langsung untuk diskusi.',
  },
  {
    q: 'Metode pembayaran apa saja yang diterima?',
    a: 'Transfer bank (BCA, Mandiri, BRI, BNI) dan dompet digital (GoPay, OVO, Dana, QRIS). Semua konfirmasi dilakukan via WhatsApp setelah lo mengisi form order.',
  },
  {
    q: 'Apakah ada gratis ongkir?',
    a: 'Gratis ongkir untuk pembelian pulau jawa via J&T atau SiCepat. Pembelian diluar pulau jawa dikenakan ongkos kirim sesuai zona pengiriman.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full py-28 md:py-36 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase mb-4 opacity-80">
            Frequently Asked
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-4">
            PERTANYAAN UMUM
          </h2>
          <div className="w-8 h-[0.5px] bg-[#b89053]/40" />
        </div>

        {/* Accordion */}
        <div className="flex flex-col border-t border-[#1a1a1a]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#1a1a1a]">
              <button
                className="w-full flex items-center justify-between py-6 text-left gap-4 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                  openIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white'
                }`}>
                  {faq.q}
                </span>
                <span className={`text-[#b89053] text-lg leading-none flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-400 ${
                openIndex === i ? 'max-h-48 pb-6' : 'max-h-0'
              }`}>
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="text-white/40 text-xs tracking-wider mb-4">Masih ada pertanyaan?</p>
          <a
            href="https://wa.me/6281931656410?text=Halo%20Ourdays%2C%20gue%20punya%20pertanyaan."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] tracking-[0.3em] uppercase px-6 py-3 border border-white/10 text-white/60 hover:border-[#b89053]/30 hover:text-[#b89053] transition-all duration-300"
          >
            Chat via WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}