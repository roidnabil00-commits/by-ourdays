'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative w-full bg-[#050505] overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background grain */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(184,144,83,0.05) 0%, transparent 70%)'
        }}
      />

      {/* ==============================
          MOBILE — image as background
          ============================== */}
      <div className="md:hidden">
        {/* Candle image */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '280px',
            height: '380px',
            zIndex: 1,
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.2) 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.2) 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
            maskComposite: 'intersect',
            opacity: 0.35,
          }}
        >
          <Image
            src="/images/grind.jpg"
            alt="Ourdays Candle"
            fill
            className="object-contain object-bottom"
            style={{ filter: 'brightness(0.9) contrast(1.1)' }}
            unoptimized
          />
        </div>

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background: 'radial-gradient(ellipse at 50% 40%, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.7) 70%)'
          }}
        />

        {/* Mobile text content */}
        <div
          className="relative flex flex-col items-center justify-center text-center"
          style={{
            zIndex: 3,
            minHeight: '100vh',
            padding: '100px 28px 80px'
          }}
        >
          <p
            className="text-[#b89053] uppercase"
            style={{ fontSize: '0.58rem', letterSpacing: '0.55em', marginBottom: '16px', opacity: 0.8 }}
          >
            By Ourdays · Est. 2025
          </p>

          <h1
            className="font-serif text-white"
            style={{ fontSize: '2.5rem', lineHeight: 1.0, letterSpacing: '0.04em', marginBottom: '6px' }}
          >
            RECLAIM
          </h1>
          <h1
            className="font-serif"
            style={{
              fontSize: '2.5rem', lineHeight: 1.0,
              letterSpacing: '0.04em', marginBottom: '22px',
              color: '#b89053', fontStyle: 'italic', fontWeight: 300
            }}
          >
            YOUR TIME.
          </h1>

          <div style={{ width: '28px', height: '0.5px', background: 'rgba(184,144,83,0.6)', marginBottom: '18px' }} />

          <p
            className="text-white uppercase"
            style={{ fontSize: '0.58rem', letterSpacing: '0.28em', marginBottom: '10px', opacity: 0.9 }}
          >
            Own your hours. Set the boundaries.
          </p>

          <p
            className="font-serif text-white italic"
            style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.75, maxWidth: '300px', marginBottom: '36px', opacity: 0.85 }}
          >
            Ambil kembali kendali atas waktumu. Nyalakan untuk memicu fokus saat harus bekerja, atau jadikan penanda batas bahwa hari ini sudah selesai. Cara paling sederhana mengatur ulang pikiran.
          </p>

          <div className="flex items-center" style={{ gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#arsenal"
              className="bg-white text-black font-bold uppercase hover:bg-[#b89053] hover:text-white transition-all duration-300"
              style={{ padding: '10px 22px', fontSize: '0.58rem', letterSpacing: '0.28em' }}
            >
              Explore Scent
            </a>
            <a
              href="#philosophy"
              className="text-white uppercase hover:text-[#b89053] transition-all duration-300"
              style={{ padding: '10px 22px', fontSize: '0.58rem', letterSpacing: '0.28em', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              The Story
            </a>
          </div>
        </div>
      </div>

      {/* ==============================
          DESKTOP — image left, text right
          ============================== */}
      <div
        className="hidden md:flex items-center justify-between"
        style={{
          minHeight: '100vh',
          paddingTop: '80px',
          paddingBottom: '60px',
          paddingLeft: 'clamp(40px, 6vw, 100px)',
          paddingRight: 'clamp(40px, 6vw, 100px)',
          gap: 'clamp(24px, 4vw, 60px)'
        }}
      >
        {/* Candle image container */}
        <div
          className="relative flex-shrink-0 flex items-end justify-center"
          style={{ width: 'clamp(200px, 36vw, 400px)', height: 'clamp(260px, 48vw, 480px)' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              top: '10%', left: '50%',
              transform: 'translateX(-50%)',
              width: '160px', height: '160px',
              background: 'radial-gradient(circle, rgba(255,180,50,0.07) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
              WebkitMaskComposite: 'source-in',
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
              maskComposite: 'intersect'
            }}
          >
            <Image
              src="/images/grind.jpg"
              alt="Ourdays Candle"
              fill
              className="object-contain object-bottom"
              style={{ filter: 'brightness(0.88) contrast(1.05)' }}
              unoptimized
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div style={{ width: '0.5px', height: '35%', background: 'linear-gradient(to bottom, transparent, rgba(184,144,83,0.3), transparent)', flexShrink: 0 }} />

        {/* Desktop text content */}
        <div className="flex flex-col items-start text-left flex-1" style={{ maxWidth: '520px' }}>
          <p className="text-[#b89053] uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.55em', marginBottom: '16px', opacity: 0.8 }}>
            By Ourdays · Est. 2025
          </p>
          <h1 className="font-serif text-white" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', lineHeight: 1.0, letterSpacing: '0.04em', marginBottom: '6px' }}>
            RECLAIM
          </h1>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', lineHeight: 1.0, letterSpacing: '0.04em', marginBottom: '22px', color: '#b89053', fontStyle: 'italic', fontWeight: 300 }}>
            YOUR TIME.
          </h1>
          <div style={{ width: '28px', height: '0.5px', background: 'rgba(184,144,83,0.5)', marginBottom: '18px' }} />
          <p className="text-white uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.28em', marginBottom: '10px', opacity: 0.9 }}>
            Own your hours. Set the boundaries.
          </p>
          <p className="font-serif text-white italic" style={{ fontSize: 'clamp(0.78rem, 1.3vw, 0.95rem)', fontWeight: 300, lineHeight: 1.75, maxWidth: '360px', marginBottom: '32px', opacity: 0.85 }}>
            Ambil kembali kendali atas waktumu. Nyalakan untuk memicu fokus saat harus bekerja, atau jadikan penanda batas bahwa hari ini sudah selesai. Cara paling sederhana mengatur ulang pikiran.
          </p>
          <div className="flex items-center" style={{ gap: '10px', flexWrap: 'wrap' }}>
            <a href="#arsenal" className="bg-white text-black font-bold uppercase hover:bg-[#b89053] hover:text-white transition-all duration-300" style={{ padding: '10px 24px', fontSize: '0.58rem', letterSpacing: '0.28em' }}>
              Explore Scent
            </a>
            <a href="#philosophy" className="text-white uppercase hover:text-[#b89053] transition-all duration-300" style={{ padding: '10px 24px', fontSize: '0.58rem', letterSpacing: '0.28em', border: '1px solid rgba(255,255,255,0.2)' }}>
              The Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 flex flex-col items-center" style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)', gap: '5px' }}>
        <span className="text-white uppercase" style={{ fontSize: '0.48rem', letterSpacing: '0.4em', opacity: 0.6 }}>Scroll</span>
        <div className="animate-pulse" style={{ width: '0.5px', height: '28px', background: 'linear-gradient(to bottom, rgba(184,144,83,0.5), transparent)' }} />
      </div>

    </section>
  )
}