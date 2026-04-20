import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import Arsenal from '../components/Arsenal'
import Testimony from '../components/Testimony'
import FAQ from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#050505]">
      <Navbar />
      <Hero />
      <Philosophy />
      <Arsenal />
      <Testimony />
      <FAQ />
      <Footer />
    </main>
  )
}