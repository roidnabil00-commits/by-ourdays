export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#050505] border-t border-[#1a1a1a]">

      {/* Main CTA */}
      <div className="py-24 px-6 flex flex-col items-center text-center border-b border-[#1a1a1a]">
        <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase mb-6 opacity-60">
          Ready?
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-4">
          AMBIL KENDALI HARI INI.
        </h2>
        <div className="w-8 h-[0.5px] bg-[#b89053]/40 mb-8" />
        <p className="text-gray-600 text-[0.65rem] tracking-widest uppercase mb-10">
          Produksi terbatas · Pre-order 
        </p>
        <a
          href="https://wa.me/6281931656410?text=Halo%20Ourdays%2C%20gue%20siap%20order.%20Minta%20info%20batch%20terbaru."
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-black text-[0.65rem] tracking-[0.3em] uppercase font-bold hover:bg-[#b89053] hover:text-white transition-all duration-300"
        >
          Secure Your Time
        </a>
      </div>

      {/* Footer bottom */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-white text-base italic tracking-widest">ourdays</span>
            <span className="text-gray-700 text-[0.55rem] tracking-[0.3em] uppercase">By Ourdays · Bandung, Indonesia</span>
          </div>

          {/* Nav */}
          <div className="flex gap-8">
            {['#philosophy', '#arsenal', '#testimony', '#faq'].map((href) => (
              <a
                key={href}
                href={href}
                className="text-gray-700 hover:text-white text-[0.55rem] tracking-[0.25em] uppercase transition-colors duration-300"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com/by.ourdays"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-white text-[0.55rem] tracking-[0.25em] uppercase transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@by.ourdays"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-white text-[0.55rem] tracking-[0.25em] uppercase transition-colors duration-300"
            >
              TikTok
            </a>
            <a
              href="https://wa.me/6281931656410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#b89053] text-[0.55rem] tracking-[0.25em] uppercase transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#0f0f0f] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[#1e1e1e] text-[0.55rem] tracking-widest uppercase">
            © {year} Ourdays. Crafted in Bandung.
          </p>
          <p className="text-[#1e1e1e] text-[0.55rem] tracking-widest uppercase">
            For the ones who show up.
          </p>
        </div>
      </div>

    </footer>
  )
}