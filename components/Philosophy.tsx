export default function Philosophy() {
  const pillars = [
    {
      num: '01',
      title: 'The Trigger.',
      body: 'Dunia luar terlalu berisik. You need a physical cue to lock in. Nyalakan saat kamu butuh deep work. Let the scent be your signal: it’s time to execute.',
    },
    {
      num: '02',
      title: 'The Boundary.',
      body: 'Kita harus tau kapan untuk berhenti. Jadikan ini penanda "off" kamu. Kerjaan beres, tutup laptop, light it up. Leave the hustle outside.',
    },
    {
      num: '03',
      title: 'Reclaim It.',
      body: 'Waktu bakal terus jalan. If you don’t set the pace, the day owns you. Ritual sederhana ini adalah cara kamu merebut kendali. Your space, your rules.',
    },
  ]

  return (
    <section id="philosophy" className="w-full bg-[#0a0a0a] py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase mb-4 opacity-60">
            The Ethos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-6">
            A MENTAL SWITCH.
          </h2>
          <div className="w-8 h-[0.5px] bg-[#b89053]/40 mb-8" />
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light max-w-2xl font-serif italic">
            Ini bukan sekadar wangi-wangian ruangan. This is about state control. Diciptakan buat kamu yang butuh garis pemisah antara mode kerja keras dan waktu personal. When the world demands too much of your focus, step back. Set the mood, shift your mindset, and reclaim your time.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1a1a1a]">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`p-10 flex flex-col gap-6 ${i < pillars.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#1a1a1a]' : ''}`}
            >
              <span className="font-serif text-5xl text-[#1a1a1a] font-bold leading-none">{p.num}</span>
              <div className="w-6 h-[0.5px] bg-[#b89053]/30" />
              <h3 className="font-serif text-white text-base leading-snug">{p.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-light">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 flex flex-col items-center text-center">
          <p className="font-serif text-xl md:text-2xl text-gray-400 italic font-light leading-relaxed max-w-xl">
            "Grind hard, but know exactly when to pull the plug.<br />
            <span className="text-white">Because the time you own, is the time that matters.</span>"
          </p>
          <p className="text-[#b89053]/40 text-[0.6rem] tracking-[0.4em] uppercase mt-4">— Ourdays, 2025</p>
        </div>

      </div>
    </section>
  )
}