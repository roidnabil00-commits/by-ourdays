'use client'

export default function Testimony() {
  const testimonials = [
    {
      initial: 'R',
      name: 'Rizky A.',
      city: 'Jakarta',
      variant: 'GRIND',
      text: 'Awalnya skeptis, mikir lilin cuma buat estetik. Tapi nyalain ini pas subuh sebelum buka laptop beneran jadi physical cue buat otak gue. The day doesn\'t start until this is lit.',
    },
    {
      initial: 'F',
      name: 'Fahmi D.',
      city: 'Bandung',
      variant: 'NEAT',
      text: 'Bakar ini abis nyelesaiin deal panjang rasanya beda. Aromanya mahal, bold, dan nggak manis sama sekali. It’s a pure, earned reward. Exactly what I need to close the day.',
    },
    {
      initial: 'A',
      name: 'Aldi S.',
      city: 'Surabaya',
      variant: 'AFTER HOURS',
      text: 'Gue tipe yang sering kepikiran kerjaan sampai mau tidur. Sejak pake ini, momen gue nyalain After Hours beneran ngasih sinyal ke otak: pekerjaan selesai, you are off the clock.',
    },
    {
      initial: 'B',
      name: 'Bagas P.',
      city: 'Yogyakarta',
      variant: 'LOCKED IN',
      text: 'Bukan sekadar soal wanginya, tapi efeknya. Pas nyium aroma peppermint-nya, otomatis otak masuk mode eksekusi. No distractions. Solid banget buat nemenin sesi deep work.',
    },
  ]

  // Menduplikasi array agar animasi bergeser terlihat tanpa putus (seamless loop)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section id="testimony" className="w-full py-28 md:py-36 bg-[#0a0a0a] border-y border-[#1a1a1a] overflow-hidden relative">
      
      {/* Internal CSS untuk animasi Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 mb-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase mb-4 opacity-60">
            TESTIMONIAL
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-4">
            THEY OWN THEIR TIME.
          </h2>
          <div className="w-8 h-[0.5px] bg-[#b89053]/40" />
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full">
        {/* Gradient shadow di kiri dan kanan agar transisi masuk/keluar terlihat halus */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll gap-6 px-6 cursor-grab active:cursor-grabbing">
          {duplicatedTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="w-[320px] md:w-[400px] flex-shrink-0 border border-[#1a1a1a] p-8 flex flex-col gap-6 hover:border-[#b89053]/30 transition-colors duration-500 bg-[#050505]"
            >
              {/* Quote mark */}
              <span className="font-serif text-4xl text-[#b89053]/15 leading-none">"</span>

              <p className="font-serif text-gray-400 text-sm italic leading-relaxed font-light flex-1">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a1a]">
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-[#b89053] text-xs">{t.initial}</span>
                </div>
                <div>
                  <p className="text-white text-[0.7rem] tracking-wider">{t.name}</p>
                  <p className="text-gray-700 text-[0.6rem] tracking-wider">{t.city}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[#b89053]/40 border border-[#b89053]/20 px-2 py-1">
                    {t.variant}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}