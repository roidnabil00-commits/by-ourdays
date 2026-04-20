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
    <section id="philosophy" className="w-full bg-[#050505] py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase mb-6">
            The Ethos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-widest mb-8">
            A MENTAL SWITCH.
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed font-light max-w-2xl font-serif italic">
            Ini bukan sekadar wangi-wangian ruangan. This is about state control. Diciptakan buat kamu yang butuh garis pemisah antara mode kerja keras dan waktu personal. When the world demands too much of your focus, step back. Set the mood, shift your mindset, and reclaim your time.
          </p>
        </div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="flex flex-col items-start text-left"
            >
              <span className="font-serif text-4xl text-white/20 mb-6 font-light">
                {p.num}
              </span>
              <div className="w-10 h-[1px] bg-[#b89053] mb-6" />
              <h3 className="font-serif text-white text-xl tracking-wide mb-4">
                {p.title}
              </h3>
              <p className="text-white text-sm leading-relaxed font-light opacity-90">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-32 flex flex-col items-center text-center">
          <p className="font-serif text-2xl md:text-3xl text-white italic font-light leading-relaxed max-w-2xl">
            "Grind hard, but know exactly when to pull the plug.<br />
            <span className="text-white mt-4 block font-normal">Because the time you own, is the time that matters.</span>"
          </p>
          <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase mt-8 opacity-80">— Ourdays, 2026</p>
        </div>

      </div>
    </section>
  )
}